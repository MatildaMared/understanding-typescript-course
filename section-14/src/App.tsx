import React from "react";
import TodoList from "./components/TodoList";

function App() {
  	const todos = [
			{ id: "1", text: "Learn React" },
			{ id: "2", text: "Learn Redux" },
			{ id: "3", text: "Learn TypeScript" },
    ];
  
	return (
		<div className="App">
			<TodoList todos={todos} />
		</div>
	);
}

export default App;
