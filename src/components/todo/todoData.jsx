const TodoData = (props) => {
	const { todoList } = props;
	return (
		<div className="todo-data">
			{todoList.map((item, index) => {
				return (
					<div>
						<div className="todo-item" key={item.id}>
							{item.name}
						</div>
						<button className="delete-item">Delete</button>
					</div>
				);
			})}
		</div>
	);
};

export default TodoData;
