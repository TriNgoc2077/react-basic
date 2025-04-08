const TodoData = (props) => {
	const { todoList, deleteTodo } = props;
	const handleDelete = (id) => {
		deleteTodo(id);
	};
	return (
		<div className="todo-data">
			{todoList.map((item, index) => {
				return (
					<div>
						<div className="todo-item" key={item.id}>
							{item.name}
						</div>
						<button
							className="delete-item"
							onClick={() => handleDelete(item.id)}
						>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default TodoData;
