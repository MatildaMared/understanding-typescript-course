import React from "react";

interface Todo {
	id: string;
	text: string;
}

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
