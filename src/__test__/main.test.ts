/**
 *@jest-environment jsdom
 */
import { Todo } from "../ts/models/Todo";
import { IAddResponse } from "../ts/models/IAddResult";
import * as functions from "./../ts/main";
import * as easyFunctions from "./../ts/functions";

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

test("should send error message", () => {
  let spy = jest.spyOn(functions, "displayError").mockReturnValue();

  document.body.innerHTML = `<div id="error"></div>`;
  let errorAnswer = (
    document.getElementById("error") as HTMLInputElement
  ).value;
  functions.init();
  let listItem: Todo[] = [];

  functions.createNewTodo(errorAnswer, listItem);

  expect(spy).toHaveBeenCalled();
});
