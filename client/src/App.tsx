import "./App.css";
import Calendar from "./components/calendar/Calendar.tsx";
import TotalTaskCard from "./components/cards/TotalTaskCard.tsx";
import { useTasks } from "./hooks/useTasks.ts";
import { useCalendar } from "./hooks/useCalendar.ts";
import { useTasksStats } from "./hooks/useTasksStats.ts";

function App() {
  const { tasks } = useTasks();
  const { today } = useCalendar();

  const stats = useTasksStats({ tasks, today });

  console.log(stats);
  return (
    <div className="mx-10 flex mt-10">
      <div className="min-w-80 mr-20">
        <TotalTaskCard stats={stats.tasksStats} tags={stats.activeTags} />
        <div className="hidden">
          <div className="bg-pink"></div>
          <div className="bg-yellow"></div>
          <div className="bg-orange"></div>
          <div className="bg-purple"></div>
          <div className="bg-green"></div>
          <div className="bg-lightBlue"></div>
        </div>
      </div>
      <div className="w-full overflow-x-hidden">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
