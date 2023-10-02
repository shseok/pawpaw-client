import { AuthParams } from '@/types/types';

export default async function createUserWithSocialLogin(params: AuthParams) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/sign-up/social`;
  const formData = new FormData();
  const { body, image } = params;
  formData.append('image', image);
  formData.append(
    'body',
    new Blob([JSON.stringify({ ...body })], { type: 'application/json' }),
  );
  console.log(formData, formData.get('image'), formData.get('body'));
  await fetch(url, {
    method: 'POST',
    credentials: 'include',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    body: formData,
  });
}
