import { useState } from 'react'

import './App.css';

import FormTask from './components/formtask';
import SearchTasks from './components/Searchtasks';
import Filtertasks from './components/filtertasks';
import Listtasks from './components/listtasks';
import Task from './components/task'

function App() {

  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");


  const handleAddTask = (desc) => {
    const newTask = new Task(desc);
    setTasks([...tasks, newTask]);
  }


  const onTaskCompleted = (taskSelected) => {
    let mapTasks = tasks.map(task => {
      if(task.id === taskSelected.id) {
        task.done = !taskSelected.done;
      }
      return task; 
    })
    setTasks(mapTasks);
  }


  const onDeleteTask = (taskSelected) => {
    let filterTasks = tasks.filter(task => task.id !== taskSelected.id);
    setTasks(filterTasks);
  }

  const onSearchTask = (text) => {
    setSearch(text);
  }

  const onFilteredTask = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  }


  return (
    
    <div className='Todo-Container'>
      <h1 className='Todo-Title'>Todo List Web</h1>
      <hr />
      <div className='Todo-Inputs-Container'>
        <div>
          {/* Component Form Task */}
          <FormTask handleAddTask={handleAddTask}></FormTask>
        </div>
        <div>
          {/* Component Search Task */}
          <SearchTasks onSearchTask={onSearchTask}></SearchTasks>
          <span className='verticalBar'></span>
          {/* Component Filter Tasks */}
          <Filtertasks onFilteredTask={onFilteredTask}></Filtertasks>
        </div>
      </div>
      <hr />
      {/* List Tasks */}
      <div className='Todo-ListTasks-Container'>
        <Listtasks filter={filter} search={search} tasks={tasks} onTaskCompleted={onTaskCompleted} onDeleteTask={onDeleteTask}></Listtasks>
      </div>
    </div>
  )
}

export default App
