import FlexBox from '@/components/ui/FlexBox';
import ProfileCard from './ProfileCard';
// import FollowingFollowerCard from './FollowingFollowerCard';

export default function SideProfile() {
  return (
    <FlexBox
      direction="column"
      className="gap-4 mt-10 md:mt-0 md:fixed top-32 md:top-24 tablet:top-10 -z-10"
    >
      <ProfileCard />
      {/* <FollowingFollowerCard /> */}
    </FlexBox>
  );
}
