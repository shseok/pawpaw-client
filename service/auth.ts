import {
  AuthParams,
  EmailAuthParams,
  SearchEmailResult,
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
    throw new Error('소셜 회원가입에 실패하였습니다.');
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
    throw new Error('간편 회원가입에 실패하였습니다.');
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
    throw new Error('로그인에 실패하였습니다.');
  }

  return response;
}

export async function isDuplicatedEmail(email: string) {
  const url = `/endpoint/api/auth/sign-up/check/duplicate/email`;
  const response = await fetch(url.concat(`?email=${email}`));
  const data = await response.json();
  return data;
}

export async function requestVerification(params: VerificationParams) {
  await fetch('/endpoint/api/auth/sign-up/verification', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
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
  const data = (await response.json()) as { success: boolean };
  return data;
}
export async function logout() {
  const response = await fetch('/endpoint/api/auth', {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('로그아웃에 실패하였습니다.');
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
