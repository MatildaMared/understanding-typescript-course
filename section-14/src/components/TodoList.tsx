import React from "react";
import { Todo } from "./../models/todo";

interface Props {
	todos: Todo[];
}

function TodoList({ todos }: Props) {
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>{todo.text}</li>
			))}
		</ul>
	);
}

export default TodoList;
