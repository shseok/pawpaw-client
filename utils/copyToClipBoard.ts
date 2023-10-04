import Toast from './notification';

export default async function copyToClipBoard(url: string) {
  try {
    await navigator.clipboard.writeText(url);
    Toast.success('복사에 성공했습니다.');
  } catch {
    Toast.error('복사에 실패했습니다. 다시 시도해주세요.');
  }
}
