import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

import EmptyIcon from "../../assets/clipboard.svg?react";

import styles from "./TodoList.module.css";
import { TodoItem } from "../TodoItem";

export const TodoList = () => {
  const { state: todos } = useContext(TodoContext);
  return (
    <div className={styles.container}>
      {todos.length > 0 && (
        <div className={styles.infoTasksContainer}>
          <span className={styles.infoDoneTasks}>Concluídas</span>

          <div className={styles.infoCountDoneTasks}>
            {todos.filter((item) => item.isDone).length} de {todos.length}
          </div>
        </div>
      )}

      {todos.length < 1 && (
        <div className={styles.emptyContainer}>
          <EmptyIcon />

          <p className={styles.emptyLabel}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}

      <div className={styles.tasksContainer}>
        {todos.map((data, key) => (
          <TodoItem key={key} data={data} dataIndex={key} />
        ))}
      </div>
    </div>
  );
};
