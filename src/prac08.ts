export {};
import { initTodos } from "./initTodos";

const targetId = 2; // 削除対象のTodoのID
const updatedTodos = initTodos.filter((todo) => todo.id !== targetId);
console.log("削除処理後のTodoの一覧");
console.log(JSON.stringify(updatedTodos, null, 2));