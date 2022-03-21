import { RequestHandler } from "express";
import { Todo } from "../models/todo";

let todos: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
	const text = (req.body as { text: string }).text;
	const newTodo = new Todo(`todo-${todos.length + 1}`, text);
	todos = [...todos, newTodo];

	res.status(201).json({
		success: true,
		todos,
	});
};

export const getTodos: RequestHandler = (req, res, next) => {
	res.status(200).json({
		success: true,
		todos,
	});
};

export const updateTodo: RequestHandler = (req, res, next) => {
	const todoId = req.params.id;
	const updatedText = (req.body as { text: string }).text;

	const todoIndex = todos.findIndex((todo) => todo.id === todoId);

	if (todoIndex < 0) {
		throw new Error("Todo not found");
	}

	todos = [
		...todos.slice(0, todoIndex),
		{
			...todos[todoIndex],
			text: updatedText,
		},
		...todos.slice(todoIndex + 1),
	];

	res.status(200).json({
		success: true,
		todos,
	});
};

export const deleteTodo: RequestHandler = (req, res, next) => {
	const todoId = req.params.id;

	const todoIndex = todos.findIndex((todo) => todo.id === todoId);

	if (todoIndex < 0) {
		throw new Error("Todo not found");
	}

	todos = [...todos.slice(0, todoIndex), ...todos.slice(todoIndex + 1)];

	res.status(200).json({
		success: true,
		todos,
	});
};
