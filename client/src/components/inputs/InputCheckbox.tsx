export default function InputCheckbox({
  value,
  change,
}: {
  value: boolean;
  change: (value: boolean) => void;
}) {
  return (
    <div
      className="flex justify-center items-center h-[18px] w-[18px] rounded border-[1.8px] border-dark cursor-pointer"
      onClick={() => change(!value)}
    >
      {value && <div className="block h-3 w-3 rounded-sm bg-dark"></div>}
    </div>
  );
}
