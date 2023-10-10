import Logo from '@/public/sidebar/logo.svg';
import SmallLogo from '@/public/sidebar/small-logo.svg';

export default function SidebarLogo({
  desktopWidth,
}: {
  desktopWidth: boolean;
}) {
  return (
    <figure
      className={`${
        desktopWidth === true ? 'mt-8 mb-10' : 'mt-8 mb-11'
      } flex flex-row justify-center`}
    >
      {desktopWidth === true ? <Logo /> : <SmallLogo />}
    </figure>
  );
}
