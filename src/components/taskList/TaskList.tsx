import {ITask} from "../../App";
import {Task} from "../task/Task";
import styles from "./TaskList.module.css";
import vazio from "../../assets/vazio.svg";

interface props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function TaskList({tasks, onDelete, onComplete}: props) {
  const taskQuantity = tasks.length;
  const completedTask = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas Criadas</p>
          <span>{taskQuantity}</span>
        </div>

        <div>
          <p className={styles.roxo}>Concluidas</p>
          <span>
            {completedTask} de {taskQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task task={task} onDelete={onDelete} onComplete={onComplete} />
        ))}
        {tasks.length === 0 && (
          <div className={styles.empty}>
            <img src={vazio} className={styles.svgvazio}/>
          </div>
        )}
      </div>
    </section>
  );
}
