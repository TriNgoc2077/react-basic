import TodoNew from "./todoNew";
import TodoData from "./todoData";
import reactLogo from "../../assets/react.svg";
import { useState } from "react";
const TodoApp = () => {
	const [todoList, setTodoList] = useState([
		// { id: 1, name: "Learning React" },
		// { id: 2, name: "Watching Ytb" },
	]);

	const addNewTodo = (name) => {
		const newTodo = {
			id: randomIntFromInterval(1, 100000),
			name: name,
		};

		setTodoList([...todoList, newTodo]);
	};
	const deleteTodo = (id) => {
		const newTodoList = todoList.filter((item) => item.id !== id);
		console.log(newTodoList);
		setTodoList([...newTodoList]);
	};
	const randomIntFromInterval = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};
	return (
		<div className="todo-container">
			<div className="todo-title">Todo List</div>
			<TodoNew addNewTodo={addNewTodo} />

			{todoList.length === 0 ? (
				<div className="todo-image">
					<img src={reactLogo} alt="todo" />
				</div>
			) : (
				<TodoData todoList={todoList} deleteTodo={deleteTodo} />
			)}
		</div>
	);
};
export default TodoApp;
