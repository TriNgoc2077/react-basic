import "./components/todo/todo.css";
import TodoNew from "./components/todo/todoNew";
import TodoData from "./components/todo/todoData";
import reactLogo from "./assets/react.svg";
const App = () => {
	return (
		<div className="todo-container">
			<div className="todo-title">Todo List</div>
			<TodoNew />
			<TodoData />
			<div className="todo-image">
				<img src={reactLogo} alt="todo" />
			</div>
		</div>
	);
};

export default App;
