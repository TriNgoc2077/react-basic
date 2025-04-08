const TodoData = (props) => {
	const { name, age, data, todoList } = props;
	return (
		<div className="todo-data">
			<div>My name is {props.name}</div>
			<div>Learning React</div>
			<div>Watching Youtube</div>
			<div>{JSON.stringify(todoList)}</div>
		</div>
	);
};

export default TodoData;
