export default async function copyURLToClipboard() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    alert('복사 성공');
  } catch {
    alert('복사 실패');
  }
}
