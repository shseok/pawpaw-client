/* eslint-disable consistent-return */

import { RecommendedChatList, EnteredChatList } from '@/types/types';
import Toast from '@/utils/notification';
import { AuthError } from '../lib/error';

export async function getRecommendedChatList(): Promise<RecommendedChatList[]> {
  try {
    const url = `/endpoint/api/chatroom/recommended`;
    const response = await fetch(url);
    if (response.status === 401) {
      throw new AuthError('로그인이 필요한 서비스입니다.');
    }
    if (!response.ok) {
      throw new Error(`서버오류:${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof AuthError) {
      window.location.replace('/auth/login');
      alert(error.message);
    }
    console.error(error);
    throw error;
  }
}

export async function getEnteredChatList(): Promise<EnteredChatList[]> {
  try {
    const url = `/endpoint/api/chatroom/participated`;
    const response = await fetch(url);

    if (response.status === 401) {
      throw new AuthError('로그인이 필요한 서비스입니다.');
    }
    if (!response.ok) {
      throw new Error(`서버오류:${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof AuthError) {
      window.location.replace('/auth/login');
      Toast.error(error.message);
    }
    console.error(error);
    throw error;
  }
}

export async function getTrendingChatList(beforeId: number, size: number) {
  let url = `/endpoint/api/chatroom/trending?size=${size}`;
  if (beforeId !== 0) {
    url += `&beforeId=${beforeId}`;
  }
  try {
    const response = await fetch(url, { credentials: 'include' });
    if (response.status === 401) {
      throw new AuthError('로그인이 필요한 서비스입니다.');
    }
    if (!response.ok) {
      throw new Error(`서버오류:${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof AuthError) {
      window.location.replace('/auth/login');
      alert(error.message);
    }
    console.error(error);
    throw error;
  }
}
