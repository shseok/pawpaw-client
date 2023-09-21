interface TagType {
  tagName: string;
}
export default function Tag({ tagName }: TagType) {
  return (
    <li className="rounded-[10px] decoration-none bg-[#F7F8F9] text-[#74787D] min-w-fit py-1 px-2 ">
      #{tagName}
    </li>
  );
}
