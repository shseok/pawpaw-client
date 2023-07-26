import Feed from "./Feed";
import Upload from "./Upload";

export default function Main() {
  return (
    <>
      <div className="w-[1028px]">
        <div className="h-[298px] border border-red-500">
          <Upload></Upload>
        </div>
        <Feed></Feed>
      </div>
    </>
  );
}
