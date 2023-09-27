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

export interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export interface RecommendedChatList {
  id: number;
  name: string;
  description: string;
  hashTagList: string[];
  managerName: string;
  managerImageUrl: string;
  participantNumber: number;
}
