import styles from "./task.module.css";
import {HiOutlineTrash} from "react-icons/hi";
import {BsFillCheckCircleFill} from "react-icons/bs";

import {ITask} from "../../App";

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({task, onComplete, onDelete}: Props) {
  return (
    <div className={styles.container}>
      <button className={styles.checkbox} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>


      <button className={styles.deleteButton}>
        <HiOutlineTrash size={20} onClick={() => onDelete(task.id)} />
      </button>
    </div>
  );
}
