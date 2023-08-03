import FlexBox from "@/components/ui/FlexBox";
import Title from "./Title";
import Location from "./Location";
import Upload from "./Upload";

export default function FeedHeader() {
  return (
    <>
      <FlexBox
        direction="column"
        align="start"
        justify="between"
        className="gap-[20px] w-full mt-10"
      >
        <Title />
        <FlexBox
          direction="column"
          align="start"
          justify="between"
          className="gap-[16px] w-full"
        >
          <Location />
          <Upload />
        </FlexBox>
      </FlexBox>
    </>
  );
}
