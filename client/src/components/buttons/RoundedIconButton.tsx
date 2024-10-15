import { IconType } from "react-icons";

export default function RoundedIconButton({
  Icon,
  onClick,
}: {
  Icon: IconType;
  onClick?: () => void;
}) {
  return (
    <div
      className="flex justify-center items-center text-white text-3xl w-10 h-10 rounded-full bg-dark transition hover:opacity-80 cursor-pointer"
      onClick={onClick}
    >
      <Icon />
    </div>
  );
}
