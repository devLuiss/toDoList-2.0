import React from "react";
import {useState} from "react";
import "./global.css";

import {Header} from "./components/Header/Header";
import {TaskList} from "./components/taskList/TaskList";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

const LOCAL_STORAGE_KEY = "tasks";

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  React.useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTaskandSave(newTasks: ITask[]) {
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  function addTask(taskTittle: string) {
    setTaskandSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTittle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTaskandSave(newTasks);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTaskandSave(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  );
}
