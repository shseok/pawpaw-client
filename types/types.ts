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

export interface Board {
  userId: string;
  id: number;
  title: string;
  content: string;
  writer: string;
  replyListDto: Comment[];
  fileNames: string[];
  likedCount: number;
  replyCount: number;
  userImageUrl: string;
  boardLiked: boolean;
  createdDate: string;
  modifiedDate: string;
}
export interface BoardList {
  content: Board[];
  pageable: {
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    offset: number;
    pageSize: number;
    pageNumber: number;
    paged: boolean;
    unpaged: boolean;
  };
  size: number;
  number: number;
  sort: {
    empty: true;
    unsorted: true;
    sorted: false;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface MyBoardList extends BoardList {}

export interface BookmarkedBoardList extends BoardList {}

export interface Comment {
  id: number;
  content: string;
  nickname: string;
  replyWriter: boolean;
  userImageUrl: string;
  // children: string[];
}

export interface CommentList {
  content: Comment[];
  pageable: {
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    offset: 0;
    pageSize: 3;
    pageNumber: 0;
    paged: boolean;
    unpaged: boolean;
  };
  size: 3;
  number: 0;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface PostBoardType {
  title: string;
  content: string;
}

export interface PostImageType {
  files: string[];
}

export interface PostCommentType {
  boardId: number;
  parentId: number;
  content: string;
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
  briefIntroduction: string;
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
export interface ChatList {
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
  userId: string;
  email: string;
  role: string;
  nickname: string;
  briefIntroduction: string;
  position: { latitude: number; longitude: number; name: string };
  imageUrl: string;
}
export interface ChatRoomUserList {
  userId: string;
  briefIntroduction: string;
  nickname: string;
  imageUrl: string;
  role: 'MANAGER' | 'PARTICIPANT';
}

export interface ScheduleEventArgType {
  roomId: string;
  scheduleId: number;
}

export interface Schedule {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
}
export interface ScheduleList extends Schedule {
  isManager?: boolean;
  participantList: { nickname: string; imageUrl: string }[];
}

export interface ChatRoomType {
  image: File;
  body: {
    name: string;
    description: string;
    hashTagList: string[];
    searchable: boolean;
    locationLimit: boolean;
  };
}

export type ChatEventType =
  | 'MESSAGE'
  | 'IMAGE'
  | 'JOIN'
  | 'LEAVE'
  | 'INVITE'
  | 'CHANGE_MANAGER';

export interface ChatType {
  userId: string;
  id: number;
  chatroomId: number;
  chatType: ChatEventType;
  data: string;
  senderId: string;
  sender: string;
  senderImageUrl: string;
  createdDate: string;
}
export interface ChatHistory {
  content: ChatType[];
}
export interface ChatRoomInfo {
  name: string;
  description: string;
  participantNumber: number;
  coverUrl: string;
}

export interface SearchEmailResult {
  email: string;
  registrationDate: string;
}

export interface SocialInfo {
  name: string;
  profileImageUrl: string;
}
