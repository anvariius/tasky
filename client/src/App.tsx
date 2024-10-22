import "./App.css";
import Calendar from "./components/calendar/Calendar.tsx";

function App() {
  return (
    <div className="mx-10 flex mt-10">
      <div className="min-w-80 mr-20">
        {/*<TotalTaskCard text="You have 4 tasks today" />*/}
        <div className="hidden">
          <div className="bg-pink"></div>
          <div className="bg-yellow"></div>
          <div className="bg-orange"></div>
          <div className="bg-purple"></div>
        </div>
      </div>
      <div className="w-full overflow-x-hidden">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
