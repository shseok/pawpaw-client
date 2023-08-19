import DesktopSvg from './SideButton/DesktopSvg';

export default function SidebarLogo({
  desktopWidth,
}: {
  desktopWidth: boolean;
}) {
  const { toggleOnLogo, toggleOffLogo } = DesktopSvg;
  const svgSize = `${viewport / 13.5}`;

  return (
    <figure
      className={`${
        desktopWidth === true ? 'mt-8 mb-10' : 'mt-8 mb-11'
      } flex flex-row justify-center`}
    >
      {desktopWidth === true ? toggleOnLogo({ svgSize }) : toggleOffLogo()}
    </figure>
  );
}
