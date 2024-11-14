export {};
import { Todo } from "./types";

const todo: Todo = {
  id: 1,
  name: "TypeScriptの勉強",
  priority: 1,
  isDone: false,
  deadline: new Date(2024, 9, 11, 9, 45),
};

// Reactの状態管理に適した
// todo とは参照は異なる updatedTodo を生成
const updatedTodo: Todo = {
    ...todo, // スプレッド構文
    name: "COBOLの勉強をする", // 変更
    priority: 3, // 変更
  };

// todo と updatedTodo のtodo の値を参照が「異なること」を確認
console.log(todo !== updatedTodo); // true であれば OK