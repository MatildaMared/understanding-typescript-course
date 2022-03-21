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
		console.log(text);
		const id = "todo-" + todos.length + 1;
		setTodos([...todos, { id, text }]);
	};

	return (
		<div className="App">
			<NewTodo onAddTodo={todoAddHandler} />
			<TodoList todos={todos} />
		</div>
	);
}

export default App;
