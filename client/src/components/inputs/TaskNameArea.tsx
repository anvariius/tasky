export default function TaskNameArea({
  value,
  change,
}: {
  value: string;
  change: Function;
}) {
  return (
    <textarea
      className="h-16 outline-0 font-medium border-0 bg-gray bg-opacity-0 resize-none"
      placeholder="Введите название задачи"
      onChange={(e) => change(e.target.value)}
      value={value}
    />
  );
}
