import { changeTodo } from "../ts/functions";
import { addTodo } from "../ts/functions";
import { removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

test("should change the todos", () => {
  let newItem = new Todo("learn To test", false);
  changeTodo(newItem);
  expect(newItem.done).toBe(true);
});

//  todos.splice(0, todos.length);

test("should remove all todos", () => {
  let todos: Todo[] = [
    { text: "tvätta", done: true },
    { text: "dammsuga", done: true },
  ];
  removeAllTodos(todos);

  expect(todos.length).toBe(0);
});
