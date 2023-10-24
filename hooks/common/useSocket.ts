import SockJs from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

export default function useSocket() {
  const createClient = (endpoint: string) => {
    const client = Stomp.over(() => {
      const socket = new SockJs(endpoint);
      return socket;
    });
    return client;
  };

  return { createClient };
}
