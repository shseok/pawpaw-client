import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CardList() {
  return (
    <ul>
      <li>
        <Link href="" className="flex-col gap-4 shadow-chatCard p-5">
          <div>tag row container</div>
          <div className="flex gap-4">
            <Image src="" alt="" />
            <div className="flex-col gap-2">
              <p>탑골공원</p>
              <p>서울 종로구 종로 99 탑골공원</p>
              <p>시계 09:00 ~ 18:00 연중 무휴</p>
              <p>별 4.8</p>
            </div>
          </div>
        </Link>
      </li>
    </ul>
  );
}
