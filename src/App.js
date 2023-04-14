import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([
    {
        id : 1,
        text : 'Doctor Appointment',
        day : '05-04-2023',
        reminder : true
    },
    {
        id : 2,
        text : 'Car rental',
        day : '11-24-2023',
        reminder : true
    },
    {
        id : 3,
        text : 'Assignment',
        day : '02-22-2023',
        reminder : true
    },
    {
        id : 4,
        text : 'Submission details',
        day : '11-12-2023',
        reminder : false
    }
  ])

  return (
    <div className="container">
      <h1>Hello from React</h1>
      <Header />
      <Tasks tasks = {tasks}/>
    </div>
  );
}



export default App;
