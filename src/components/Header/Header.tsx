import styles from "./Header.module.css";
import Logo from "../../assets/logo.png";
import {AiOutlinePlusCircle} from "react-icons/ai";
import {ChangeEvent, FormEvent} from "react";
import {useState} from "react";

interface props {
  onAddTask: (taskTittle: string) => void;
}

export function Header({onAddTask}: props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
