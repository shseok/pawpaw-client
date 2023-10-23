'use client';

import FlexBox from '@/components/ui/FlexBox';
import useGetUserInfo from '@/hooks/queries/useGetUserInfo';
import ProfileCard from './ProfileCard';
// TODO: 팔로우 구현 (백엔드 완료 이후)
// import FollowingFollowerCard from './FollowingFollowerCard';

export default function SideProfile() {
  const { data: user } = useGetUserInfo();
  if (!user) return <div>로그인이 필요한 서비스입니다.</div>;
  return (
    <FlexBox
      direction="column"
      className="gap-4 mt-10 md:mt-0 md:fixed top-32 md:top-24 tablet:top-10 -z-10"
    >
      <ProfileCard user={user} />
      {/* <FollowingFollowerCard /> */}
    </FlexBox>
  );
}
