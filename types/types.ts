export interface SidebarProps {
  svgComponent: (props: { color: string }) => JSX.Element;
  activeButton: string;
  setActive: () => void;
  router: () => void;
  desktopWidth: boolean;
  toggleButton: () => void;
}
