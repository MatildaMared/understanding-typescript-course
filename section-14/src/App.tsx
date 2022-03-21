import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./models/todo";

function App() {
	const [todos, setTodos] = useState<Todo[]>([
		{ id: "todo-1", text: "Learn React" },
		{ id: "todo-2", text: "Learn Redux" },
		{ id: "todo-3", text: "Learn TypeScript" },
	]);

	const todoAddHandler = (text: string) => {
		const id = "todo-" + todos.length + 1;
		setTodos((prevTodos) => {
			return [...prevTodos, { id, text }];
		});
	};

	const todoDeleteHandler = (id: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== id);
		});
	};

	return (
		<div className="App">
			<NewTodo onAddTodo={todoAddHandler} />
			<TodoList todos={todos} onDeleteTodo={todoDeleteHandler} />
		</div>
	);
}

export default App;
