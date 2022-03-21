import React from "react";
import { Todo } from "./../models/todo";
import "./TodoList.css";

interface Props {
	todos: Todo[];
	onDeleteTodo: (id: string) => void;
}

function TodoList({ todos, onDeleteTodo }: Props) {
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>
					<span>{todo.text}</span>
					<button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
				</li>
			))}
		</ul>
	);
}

export default TodoList;
