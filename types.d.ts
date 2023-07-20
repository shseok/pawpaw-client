interface SidebarButtonProps {
  svgComponent: (props: { color: string }) => JSX.Element;
  activeButton: string;
  onClick: () => void;
}
