import { useState } from "react";

const TodoNew = (props) => {
	// useState hook (getter, setter)
	const [valueInput, setvalueInput] = useState("Watching Ytb");
	const { addNewTodo } = props;
	// addNewTodo("Ngoc");
	const handleClick = () => {
		console.log(">> check value", valueInput);
	};
	const handleOnChange = (name) => {
		setvalueInput(name);
	};
	return (
		<div className="todo-new">
			<input
				type="text"
				placeholder="Enter your task"
				onChange={(event) => handleOnChange(event.target.value)}
			/>
			<button onClick={handleClick}>Add</button>
			<div>My task is {valueInput}</div>
		</div>
	);
};

export default TodoNew;
