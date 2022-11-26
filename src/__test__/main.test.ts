/**
 *@jest-environment jsdom
 */
import { Todo } from "../ts/models/Todo";
import { IAddResponse } from "../ts/models/IAddResult";
import * as functions from "./../ts/main";
import * as smallFunctions from "./../ts/functions";

test("should create new todo", () => {
  let spy = jest.spyOn(functions, "createHtml").mockReturnValue();

  document.body.innerHTML = `<input type="text" id="newTodoText" value="clean"/>`;
  let clean = (
    document.getElementById("newTodoText") as HTMLInputElement
  ).value; //fångar värdet som kommer ut av funktionen i en variabel som jag kallar för clean.
  functions.init();
  let listItem: Todo[] = [];

  functions.createNewTodo(clean, listItem);

  expect(spy).toHaveBeenCalled();
});

test("should send error when input value is to short", () => {
  //arrange
  let spy = jest.spyOn(functions, "displayError").mockReturnValue();

  document.body.innerHTML = `<input type="text" id="newTodoText" value="cl"/>`;

  //act
  let errorAnswer = (
    document.getElementById("newTodoText") as HTMLInputElement
  ).value;
  functions.init();
  let listItem: Todo[] = [];

  functions.createNewTodo(errorAnswer, listItem);

  //assert
  expect(spy).toHaveBeenCalled();
});

/* Funkar ej: 
test("should make HTML list with not done tasks", () => {
  //arrange
  let theList: Todo[] = [
    { text: "workout", done: false },
    { text: "shower", done: false },
  ];
  document.body.innerHTML = `<ul id="todos"></ul>`;
  let todosContainer: HTMLUListElement = document.getElementById(
    "todos"
  ) as HTMLUListElement;

  //act
  functions.createHtml(theList);

  //assert
  expect(todosContainer.innerHTML).toBe(
    `<li class="todo__text">workout</li><li class="todo__text">shower</li>`
  );
});
*/
test("should call on function changeTodo", () => {
  //arrange
  let spy = jest
    .spyOn(smallFunctions, "changeTodo")
    .mockReturnValue();

  document.body.innerHTML = `<ul id="todos"></ul>`;
  let listItemInUl = document.getElementById(
    "todos"
  ) as HTMLUListElement;
  const run = new Todo("run", true);
  functions.init();
  //act

  functions.toggleTodo(run);

  //assert
  expect(spy).toHaveBeenCalled();
});

test("should call on function createhtml", () => {
  //arrange
  let spy = jest.spyOn(functions, "createHtml").mockReturnValue();

  document.body.innerHTML = `<ul id="todos"></ul>`;
  let listItemInUl = document.getElementById(
    "todos"
  ) as HTMLUListElement;
  const run = new Todo("run", true);
  functions.init();
  //act

  functions.toggleTodo(run);

  //assert
  expect(spy).toHaveBeenCalled();
});
