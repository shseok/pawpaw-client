export interface SidebarProps {
  svgComponent: (props: { color: string }) => JSX.Element;
  activeButton: string;
  onClick: () => void;
  desktopWidth: boolean;
}
