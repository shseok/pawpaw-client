import { AuthParams, VerifivationParams } from '@/types/types';

export async function createUserWithSocialLogin(params: AuthParams) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/sign-up/social`;
  const formData = new FormData();
  const { body, image } = params;
  formData.append('image', image);
  formData.append(
    'body',
    new Blob([JSON.stringify({ ...body })], { type: 'application/json' }),
  );
  // console.log(formData, formData.get('image'), formData.get('body'));
  await fetch(url, {
    method: 'POST',
    credentials: 'include',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    body: formData,
  });
}

export async function isDuplicatedEmail(email: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/sign-up/check/duplicate/email`;
  const response = await fetch(url.concat(`?email=${email}`));
  const data = await response.json();
  return data;
}

export async function requestVerification(params: VerifivationParams) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/sign-up/verification`;
  await fetch(url, {
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
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/sign-up/verification/check`;
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phoneNumber, code }),
  });
  const data = (await response.json()) as { success: boolean };
  return data;
}
