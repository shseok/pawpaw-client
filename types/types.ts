import { SPECIES } from '@/constant/pets';

export interface SidebarProps {
  svgComponent: (props: { color: string }) => JSX.Element;
  activeButton: string;
  setActive: (props: string) => void;
  router: () => void;
  desktopWidth: boolean;
  toggleButton: () => void;
  viewport: number | undefined;
  pathname: string;
}

export interface Post {
  albumId: number;
  id: number;
  title: string;
  url: string;
}

export interface TempPostListApiProps {
  pageParam: number;
  pageSize: number;
}

export interface Comment {
  id: number;
  content: string;
  PostId: number;
  User: {
    name: string;
  };
}

export interface LocationInfoType {
  predictions: string[];
  location: {
    lat: number;
    lng: number;
  };
}

export type LocationName = {
  koAddress: string;
};

export type Species = (typeof SPECIES)[number];

export interface AuthParams {
  image: File | string;
  body: Body;
}

export interface Body {
  key: string;
  termAgrees: number[];
  position: Position;
  nickname: string;
  noImage: boolean;
  petInfos: PetInfo[];
}

export interface PetInfo {
  petName: string;
  petType: string;
}

export interface Position {
  latitude: number;
  longitude: number;
  name: string;
}

export type EmailAuthParams = Omit<AuthParams, 'body'> & {
  body: Omit<AuthParams['body'], 'key' | 'noImage'> & {
    email: string;
    password: string;
    phoneNumber: string;
  };
};

export interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export interface VerificationParams {
  name: string;
  recipient: string;
  birthday: string;
}
interface ChatList {
  id: number;
  name: string;
  description: string;
  hashTagList: string[];
  managerName: string;
  managerImageUrl: string;
  participantNumber: number;
  trendingId: number;
}
export interface RecommendedChatList extends ChatList {}
export interface EnteredChatList extends ChatList {
  coverUrl: string;
  lastChatTime: string;
  hasNotice: boolean;
  hasSchedule: boolean;
}
export interface TrendingChatList {
  size: number;
  content: ChatList[];
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface UserInfo {
  email: string;
  role: string;
  nickname: string;
  briefIntroduction: string;
  position: { latitude: number; longitude: number; name: string };
  imageUrl: string;
}
