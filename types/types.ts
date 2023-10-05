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

export type Species =
  | 'DOG'
  | 'CAT'
  | 'FISH'
  | 'BIRD'
  | 'HAMSTER'
  | 'RABBIT'
  | 'GUINEA_PIG'
  | 'LIZARD'
  | 'FROG';

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

export type AuthParamsWithoutKey = Omit<AuthParams, 'body'> & {
  body: Omit<AuthParams['body'], 'key'>;
};

export interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export interface VerifivationParams {
  name: string;
  recipient: string;
  birthday: string;
}
