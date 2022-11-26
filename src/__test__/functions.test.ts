import { changeTodo } from "../ts/functions";
import { addTodo } from "../ts/functions";
import { removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

test("should add a todo to list", () => {
  //arrange
  let todos: Todo[] = [
    { text: "tvätta", done: true },
    { text: "dammsuga", done: true },
  ];
  //act
  let result = addTodo("New todo", todos);

  //assert
  expect(result.success).toBe(true);
});

test("should change the todos", () => {
  let newItem = new Todo("learn To test", false);
  changeTodo(newItem);
  expect(newItem.done).toBe(true);
});

test("should remove all todos", () => {
  let todos: Todo[] = [
    { text: "tvätta", done: true },
    { text: "dammsuga", done: true },
  ];
  removeAllTodos(todos);

  expect(todos.length).toBe(0);
});
//  toggleToDo och clearTodos
