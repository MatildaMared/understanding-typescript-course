import React, { useRef } from "react";
import "./NewTodo.css";

interface Props {
	onAddTodo: (todoText: string) => void;
}

function NewTodo({ onAddTodo }: Props) {
	const inputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const enteredText = inputRef.current?.value;
		onAddTodo(enteredText!);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="form-control">
				<label htmlFor="todo-text">Todo</label>
				<input type="text" id="todo-text" ref={inputRef} />
			</div>
			<button type="submit">Add Todo</button>
		</form>
	);
}

export default NewTodo;
