import "./App.css";
import TotalTaskCard from "./components/cards/TotalTaskCard.tsx";
import { taskList } from "./state/TaskList.ts";
import Calendar from "./components/calendar/Calendar.tsx";

function App() {
  return (
    <div className="mx-10 flex mt-10">
      <div className="min-w-80 mr-20">
        {/*<TotalTaskCard text="You have 4 tasks today" />*/}
      </div>
      <div className="w-full overflow-x-hidden">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
