import { useSaveTodos } from "./hooks/useSaveTodos";

const App = () => {
  // Monitoring all changes on todos and save in localStorage
  useSaveTodos();

  return <div>App</div>;
};

export default App;
