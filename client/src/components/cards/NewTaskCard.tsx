export default function NewTaskCard({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="flex justify-center items-center border-dashed border-[1px] border-purple h-32 rounded-3xl bg-purple bg-opacity-10 transition hover:bg-opacity-20 cursor-pointer"
    >
      <div className="flex justify-center items-center h-8 w-8 rounded-full border-[0.8px] font-extralight text-3xl">
        +
      </div>
    </div>
  );
}
