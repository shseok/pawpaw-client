import { PlaceType } from '@/types/types';

export const REVIEW_KEYWORDS = [
  { text: '경치가 좋아요', emoji: '🏞️' },
  { text: '조용해요', emoji: '🤫' },
  { text: '편안해요', emoji: '😌' },
  { text: '접근성이 좋아요', emoji: '🚗' },
  { text: '깨끗해요', emoji: '✨' },
  { text: '안전해요', emoji: '👮' },
];

export const CATEGORY_MAP: { [key: string]: PlaceType } = {
  맛집: 'RESTAURANT',
  카페: 'CAFE',
  공원: 'PARK',
};

export const MAX_STAR_NUM = 5;
