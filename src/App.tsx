import { useSaveTodos } from "./hooks/useSaveTodos";

import styles from "./App.module.css";
import { Header } from "./components/Header";

const App = () => {
  // Monitoring all changes on todos and save in localStorage
  useSaveTodos();

  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>
    </div>
  );
};

export default App;
