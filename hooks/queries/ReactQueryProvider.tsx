'use client';

import { AuthError } from '@/lib/error';
import Toast from '@/utils/notification';

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

// 에러핸들링 함수 만약 에러클래스를 여러개 정의한다면 에러별로 공통된 에러핸들링을 정의할 수 있음.
const handleError = (error: unknown) => {
  if (error instanceof Error) Toast.error(error.message);
  if (error instanceof AuthError) {
    Toast.error(error.message);
    window.location.assign(`/auth/login`);
  }
};

const queryClient = new QueryClient({
  // useMutation 과 useQuery 훅의 에러를 한곳에서 공통적으로 처리할수 있도록 하였습니다.
  mutationCache: new MutationCache({
    onError: (error) => handleError(error),
  }),
  // useQuery의 onError callback 이 deprecated(더 이상 사용되지않음) 되었기 때문에 추가하였습니다. useQuery 훅이 작동할때 에러가 발생한다면 에러 토스트알림을 띄웁니다.
  queryCache: new QueryCache({
    onError: (error) => handleError(error),
  }),
});

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
