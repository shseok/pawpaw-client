import React from 'react';
import HeaderLogo from './HeaderLogo';
import MobileSvg from '../MobileSvg';

export default function Header() {
  const { Search, Alert } = MobileSvg;
  const color = '#74787D';

  return (
    <nav className="block tablet:hidden">
      <div className="fixed flex flex-row items-center justify-between border-b-[1px] border-[#E9EBED] flex-nowrap h-[60px]  w-full bg-white z-10">
        <div className="ml-5 sm:ml-10">
          <HeaderLogo />
        </div>
        <div className="flex flex-row mr-5 flex-nowra sm:mr-10">
          <button type="button" className="mr-[18px]">
            {Search({ color })}
          </button>
          <button type="button">{Alert({ color })}</button>
        </div>
      </div>
    </nav>
  );
}
