import {
  Place,
  Review,
  ReviewList,
  ReviewMutateParams,
  SearchPlaceParams,
} from '@/types/types';
import { stringify } from 'qs';

// 장소 검색
export async function searchPlace({
  query,
  placeType,
  latMin,
  latMax,
  longMin,
  longMax,
}: SearchPlaceParams) {
  const queryString = stringify(
    { query, placeType, latMin, latMax, longMin, longMax },
    { addQueryPrefix: true },
  );
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/place/search`.concat(queryString),
    {
      method: 'GET',
      credentials: 'include',
    },
  );
  if (!response.ok) {
    throw new Error('장소 검색에 실패하였습니다.');
  }
  const data = (await response.json()) as Place[];
  return data;
}

// 장소 리뷰 조회 (타인)
export async function getPlaceReviewList({
  placeId,
  beforeId,
  size,
}: {
  placeId: number;
  beforeId?: number;
  size: number;
}) {
  const queryParams = beforeId ? { beforeId, size } : { size };
  const queryString = stringify(queryParams, { addQueryPrefix: true });
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/place/${placeId}/review`.concat(
      queryString,
    ),
    {
      method: 'GET',
      credentials: 'include',
    },
  );
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('로그인이 필요한 서비스입니다.');
    } else {
      throw new Error('장소 리뷰 조회에 실패하였습니다.');
    }
  }
  const data = (await response.json()) as ReviewList;
  return data;
}

// 장소 리뷰 조회 (자신)
export async function getMyPlaceReview({ placeId }: { placeId: number }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/place/${placeId}/myReview`,
    {
      method: 'GET',
      credentials: 'include',
    },
  );
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('로그인이 필요한 서비스입니다.');
    } else if (response.status === 404) {
      throw new Error('존재하지 않는 장소입니다');
    } else {
      throw new Error('장소 리뷰 조회에 실패하였습니다.');
    }
  }
  // response body가 없는 경우 > 자신의 리뷰가 없는 경우
  if (response.status === 204) {
    return null;
  }
  const data = (await response.json()) as Review;
  return data;
}

// 장소 리뷰 생성 or 수정
export async function createOrUpdatePlaceReview({
  placeId,
  score,
  content,
  accessible,
  quiet,
  safe,
  scenic,
  clean,
  comfortable,
}: ReviewMutateParams) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/place/${placeId}/review`,
    {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        score,
        content,
        accessible,
        quiet,
        safe,
        scenic,
        clean,
        comfortable,
      }),
    },
  );
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('로그인이 필요한 서비스입니다.');
    } else {
      throw new Error('장소 리뷰 생성에 실패하였습니다.');
    }
  }
  const data = await response.json();
  return data;
}

// 장소 리뷰 이미지 생성
// request body > multipart/form-data
export async function createPlaceReviewImage({
  placeId,
  placeReviewId,
  images,
}: {
  placeId: number;
  placeReviewId: number;
  images: File[];
}) {
  const formData = new FormData();

  images.forEach((image) => {
    formData.append('images', image);
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/place/${placeId}/review/${placeReviewId}/image`,
    {
      method: 'POST',
      credentials: 'include',
      body: formData,
    },
  );
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('로그인이 필요한 서비스입니다.');
    } else {
      throw new Error('장소 리뷰 이미지 생성에 실패하였습니다.');
    }
  }
}

// 장소 리뷰 이미지 삭제
export async function deletePlaceReviewImage({
  placeId,
  placeReviewId,
  placeReviewImageIdList,
}: {
  placeId: number;
  placeReviewId: number;
  placeReviewImageIdList: number[];
}) {
  const queryString = stringify(
    { placeReviewImageIdList },
    { arrayFormat: 'repeat', addQueryPrefix: true },
  );
  console.log(queryString);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/place/${placeId}/review/${placeReviewId}/image`.concat(
      queryString,
    ),
    {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('로그인이 필요한 서비스입니다.');
    } else if (response.status === 404) {
      throw new Error('존재하지 않는 장소리뷰입니다.');
    } else {
      throw new Error('장소 리뷰 이미지 삭제에 실패하였습니다.');
    }
  }
}

// 장소 즐겨찾기 추가
export async function createPlaceBookmark({ placeId }: { placeId: number }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/place/${placeId}/bookmarks`,
    {
      method: 'POST',
      credentials: 'include',
    },
  );
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('로그인이 필요한 서비스입니다.');
    } else if (response.status === 404) {
      throw new Error('존재하지 않는 장소입니다.');
    } else if (response.status === 409) {
      throw new Error('이미 북마크한 장소입니다.');
    } else {
      throw new Error('장소 즐겨찾기 추가에 실패하였습니다.');
    }
  }
}

// 장소 즐겨찾기 삭제
export async function deletePlaceBookmark({ placeId }: { placeId: number }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/place/${placeId}/bookmarks`,
    {
      method: 'DELETE',
      credentials: 'include',
    },
  );
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('로그인이 필요한 서비스입니다.');
    } else if (response.status === 404) {
      throw new Error('존재하지 않는 장소입니다.');
    } else if (response.status === 409) {
      throw new Error('북마크하지 않은 장소입니다.');
    } else {
      throw new Error('장소 즐겨찾기 삭제에 실패하였습니다.');
    }
  }
}
