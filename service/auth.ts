import {
  AuthParams,
  EmailAuthParams,
  SearchEmailResult,
  SocialInfo,
  VerificationParams,
} from '@/types/types';
import { stringify } from 'qs';

export async function createUserWithSocialLogin(params: AuthParams) {
  const formData = new FormData();
  const { body, image } = params;
  formData.append(
    'body',
    new Blob([JSON.stringify({ ...body })], { type: 'application/json' }),
  );
  formData.append('image', image);
  const response = await fetch('/endpoint/api/auth/sign-up/social', {
    method: 'POST',
    credentials: 'include',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    body: formData,
  });

  if (!response.ok) {
    if (response.status === 400) {
      throw new Error('모든 필수 약관에 동의가 필요합니다.');
    } else if (response.status === 413) {
      throw new Error('파일 크기 제한을 초과하였습니다.');
    } else {
      throw new Error('소셜 회원가입에 실패하였습니다.');
    }
  }
}

export async function createUserWithEmailAndPassword(params: EmailAuthParams) {
  const formData = new FormData();
  const { body, image } = params;
  formData.append(
    'body',
    new Blob([JSON.stringify({ ...body })], { type: 'application/json' }),
  );
  formData.append('image', image);
  const response = await fetch('/endpoint/api/auth/sign-up', {
    method: 'POST',
    credentials: 'include',
    body: formData,
  });
  if (!response.ok) {
    if (response.status === 400) {
      throw new Error('모든 필수 약관에 동의가 필요합니다.');
    } else if (response.status === 409) {
      throw new Error('중복된 아이디 입니다.');
    } else if (response.status === 413) {
      throw new Error('파일 크기 제한을 초과하였습니다.');
    } else {
      throw new Error('간편 회원가입에 실패하였습니다.');
    }
  }
}

export async function loginWithEmailAndPassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await fetch('/endpoint/api/auth', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('잘못된 계정정보입니다.');
    } else if (response.status === 404) {
      throw new Error('존재하지 않는 유저입니다.');
    } else {
      throw new Error('로그인에 실패하였습니다.');
    }
  }

  return response;
}

export async function isDuplicatedEmail(email: string) {
  const url = `/endpoint/api/auth/sign-up/check/duplicate/email`;
  const response = await fetch(url.concat(`?email=${email}`));
  const data = await response.json();
  if (!response.ok) {
    throw new Error('이미 존재하는 이메일입니다.');
  }
  return data;
}

export async function requestVerification(params: VerificationParams) {
  const response = await fetch('/endpoint/api/auth/sign-up/verification', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error('인증번호 발송에 실패하였습니다.');
  }
}

export async function checkVerification({
  phoneNumber,
  code,
}: {
  phoneNumber: string;
  code: string;
}) {
  const response = await fetch(
    '/endpoint/api/auth/sign-up/verification/check',
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber, code }),
    },
  );
  if (!response.ok) {
    if (response.status === 400) {
      throw new Error('유효하지 않은 인증 코드입니다.');
    } else {
      throw new Error('인증번호 확인에 실패하였습니다.');
    }
  }
  const data = (await response.json()) as { success: boolean };
  return data;
}
export async function logout() {
  const response = await fetch('/endpoint/api/auth', {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!response.ok) {
    if (response.status === 400) {
      throw new Error('로그인 상태가 아닙니다.');
    } else {
      throw new Error('로그아웃에 실패하였습니다.');
    }
  }
}

export async function findUserEmail({
  name,
  phoneNumber,
}: {
  name: string;
  phoneNumber: string;
}): Promise<SearchEmailResult> {
  const query = stringify({ name, phoneNumber }, { addQueryPrefix: true });
  const response = await fetch('/endpoint/api/auth/email'.concat(query), {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('존재하지 않는 유저입니다.');
    } else {
      throw new Error('이메일을 찾을 수 없습니다.');
    }
  }

  const data = (await response.json()) as SearchEmailResult;
  return data;
}

export async function sendEmailChangeVerificationLink({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const response = await fetch('/endpoint/api/auth/password/reset/mail', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('존재하지 않는 유저입니다.');
    } else {
      throw new Error('비밀번호 변경에 실패하였습니다.');
    }
  }
}

export async function changePassword({
  key,
  password,
}: {
  key: string;
  password: string;
}) {
  const response = await fetch('/endpoint/api/auth/password', {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key, password }),
  });
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('존재하지 않는 비밀번호 변경 임시키입니다.');
    } else {
      throw new Error('비밀번호 변경에 실패하였습니다.');
    }
  }
}

export async function getSocialInfo(key: string) {
  const query = stringify({ key }, { addQueryPrefix: true });
  const response = await fetch(
    '/endpoint/api/auth/sign-up/social/info'.concat(query),
    {
      method: 'GET',
      credentials: 'include',
    },
  );
  if (!response.ok) {
    if (response.status === 400) {
      throw new Error(
        '유효하지 않은 소셜 회원가입 임시 키입니다. 회원가입을 재시도해주세요.',
      );
    } else {
      throw new Error('소셜 정보를 가져오는데 실패하였습니다.');
    }
  }
  const data = (await response.json()) as SocialInfo;
  return data;
}
