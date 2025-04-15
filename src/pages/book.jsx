import { useEffect, useState } from "react";
import { fetchAllBookAPI } from "../services/api.service";
import BookForm from "../components/book/book.form";
import BookTable from "../components/book/book.table";

const BookPage = () => {
	const [books, setBooks] = useState([]);
	const [current, setCurrent] = useState(1);
	const [pageSize, setPageSize] = useState(9);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		loadBooks();
	}, [current, pageSize]);
	const loadBooks = async () => {
		const response = await fetchAllBookAPI();
		if (response.data) {
			setBooks(response.data);
			setCurrent(response.data.meta.current);
			setPageSize(response.data.meta.pageSize);
			setTotal(response.data.meta.total);
		}
	};
	return (
		<div style={{ padding: "20px" }}>
			<BookForm loadData={loadBooks} />
			<BookTable
				dataSource={books}
				loadData={loadBooks}
				current={current}
				pageSize={pageSize}
				total={total}
				setCurrent={setCurrent}
				setPageSize={setPageSize}
			/>
		</div>
	);
};

export default BookPage;
