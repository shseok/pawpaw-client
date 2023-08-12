'use client';

import { useState } from 'react';
import FotterButton from './FooterButton';
import MobileSvg from '../MobileSvg';

export default function Footer() {
  const [activeButton, setActiveButton] = useState('Feed');
  const { Feed, Community, Chat, Mypage } = MobileSvg;

  return (
    <nav className="block tablet:hidden">
      <div className="fixed bottom-0 flex flex-row items-center justify-center border-t-[1px] border-[#E9EBED] h-[54px] w-full bg-white">
        <FotterButton
          svgComponent={Feed}
          activeButton={activeButton}
          setActive={() => setActiveButton('Feed')}
        />
        <FotterButton
          svgComponent={Community}
          activeButton={activeButton}
          setActive={() => setActiveButton('Community')}
        />
        <FotterButton
          svgComponent={Chat}
          activeButton={activeButton}
          setActive={() => setActiveButton('Chat')}
        />
        <FotterButton
          svgComponent={Mypage}
          activeButton={activeButton}
          setActive={() => setActiveButton('Mypage')}
        />
      </div>
    </nav>
  );
}
