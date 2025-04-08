import "./components/todo/todo.css";
import TodoNew from "./components/todo/todoNew";
import TodoData from "./components/todo/todoData";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {
	const [todoList, setTodo] = useState([
		{ id: 1, name: "Learning React" },
		{ id: 2, name: "Watching Ytb" },
	]);
	const cnt = "Cao Tri Ngoc";
	const age = 20;
	const data = {
		address: "Ho Chi Minh",
		phone: "0909090909",
	};
	const addNewTodo = (name) => {
		alert(`Hello ${name}`);
	};
	return (
		<div className="todo-container">
			<div className="todo-title">Todo List</div>
			<TodoNew addNewTodo={addNewTodo} />
			<TodoData name={cnt} age={age} data={data} todoList={todoList} />
			<div className="todo-image">
				<img src={reactLogo} alt="todo" />
			</div>
		</div>
	);
};

export default App;
