import React, { useRef } from "react";

interface Props {
	onAddTodo: (todoText: string) => void;
}

function NewTodo({ onAddTodo }: Props) {
	const inputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const enteredText = inputRef.current?.value;
		console.log(enteredText);
		onAddTodo(enteredText!);
	};

	return (
		<form onSubmit={submitHandler}>
			<div>
				<label htmlFor="todo-text">Todo</label>
				<input type="text" id="todo-text" ref={inputRef} />
			</div>
			<button type="submit">Add Todo</button>
		</form>
	);
}

export default NewTodo;
