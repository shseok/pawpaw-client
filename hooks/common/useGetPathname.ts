import { usePathname } from 'next/navigation';

export default function useGetPathname() {
  const path = usePathname();
  let pathname;
  if (path === '/') {
    pathname = 'Feed';
  } else if (path.includes('chat')) {
    pathname = 'Chat';
  } else {
    pathname = path.charAt(1).toUpperCase() + path.slice(2);
  }
  return pathname;
}
