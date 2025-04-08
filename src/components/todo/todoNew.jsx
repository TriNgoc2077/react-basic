const TodoNew = (props) => {
	const { addNewTodo } = props;
	addNewTodo("Ngoc");
	return (
		<div className="todo-new">
			<input type="text" placeholder="Enter your task" />
			<button>Add</button>
		</div>
	);
};

export default TodoNew;
