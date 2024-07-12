import AddIcon from "../../assets/add.svg?react";

import styles from "./Button.module.css";

type Props = {
  onClick: () => void;
};

export const Button = ({ onClick }: Props) => {
  return (
    <div className={styles.container}>
      <button onClick={onClick}>
        Criar <AddIcon />
      </button>
    </div>
  );
};
