import FlexBox from '@/components/ui/FlexBox';
import ProfileCard from './ProfileCard';
// import FollowingFollowerCard from './FollowingFollowerCard';

export default function SideProfile() {
  return (
    <FlexBox direction="column" className="sticky top-0 gap-4 -z-10">
      <ProfileCard />
      {/* <FollowingFollowerCard /> */}
    </FlexBox>
  );
}
