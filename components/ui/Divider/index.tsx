interface DeviderType {
  type: "horizontal" | "vertical";
}

export default function Devider({ type }: DeviderType) {
  if (type === "horizontal") {
    return <hr className="h-[1px] w-full bg-[#E9EBED]" />;
  } else {
    return <hr className="h-full  w-[1px] min-h-[1rem] bg-[#E9EBED]" />;
  }
}
