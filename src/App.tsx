import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Form } from './components/Form';
import { useState } from 'react';
import './global.css';

export interface ITask {
  id: string;
  description: string;
  isFinished: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function onCreateTask(taskToCreate: ITask) {
    setTasks([...tasks, taskToCreate]);
  }

  function onDeleteTask(taskIdToDelete: string) {
    const newTasksList = tasks.filter(task => {
      return task.id !== taskIdToDelete
    });
    setTasks(newTasksList);
  }

  function onFinishTask(taskIdToFinish: string) {
    const newTaksList = tasks.map(task => {
      if (task.id === taskIdToFinish) {
        return {
          id: task.id,
          description: task.description,
          isFinished: !(task.isFinished)
        }
      } else {
        return task;
      }
    });
    setTasks(newTaksList);
  }

  return (
    <div>
      <Header />

      <Form onCreateTask={onCreateTask} />

      <TaskList
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onFinishTask={onFinishTask}
      />
    </div>
  )
}

export default App
