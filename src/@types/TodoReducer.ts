import { Todo } from "./Todo";

export type TodoState = Todo[];

type TodoWithOptionalProps = {
  [Key in keyof Todo]?: Todo[Key];
};

type AddTodo = {
  type: "ADD";
  payload: Todo | Todo[];
};

type ChangeTodo = {
  type: "CHANGE";
  payload: TodoWithOptionalProps & { index: number };
};

type DeleteTodo = {
  type: "DELETE";
  payload: { index: number };
};

export type TodoActions = AddTodo | ChangeTodo | DeleteTodo;
