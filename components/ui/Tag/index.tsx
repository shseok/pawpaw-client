interface TagType {
  tagName: string;
}
export default function Tag({ tagName }: TagType) {
  return (
    <div className="rounded-[10px] bg-[#F7F8F9] text-[#74787D] py-1 px-2 ">
      #{tagName}
    </div>
  );
}
