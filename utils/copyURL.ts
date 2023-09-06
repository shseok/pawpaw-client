export default async function copyURL(url: string) {
  try {
    await navigator.clipboard.writeText(url);
    alert('복사 성공');
  } catch {
    alert('복사 실패');
  }
}
