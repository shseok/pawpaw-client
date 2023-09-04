import FlexBox from '@/components/ui/FlexBox';
import ProfileCard from './ProfileCard';
import FollowingFollowerCard from './FollowingFollowerCard';

export default function SideProfile() {
  return (
    <FlexBox direction="column" className="gap-4">
      <ProfileCard />
      <FollowingFollowerCard />
    </FlexBox>
  );
}
