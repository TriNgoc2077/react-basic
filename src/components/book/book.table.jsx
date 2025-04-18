import { useState } from "react";
import UpdateBookModal from "./update.book";
import ViewBookDetail from "./view.book.detail";
import { Button, message, notification, Popconfirm, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { deleteBookAPI } from "../../services/api.service";

const BookTable = (props) => {
	const {
		dataSource,
		loadData,
		current,
		pageSize,
		total,
		setCurrent,
		setPageSize,
		isLoading,
	} = props;
	console.log(">>>> check books", dataSource);
	const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
	const [dataUpdate, setDataUpdate] = useState(null);
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const [dataDetail, setDataDetail] = useState(null);

	const handleDeleteBook = async (id) => {
		const res = await deleteBookAPI(id);
		if (res.data) {
			message.success("Đã xóa sách thành công");
			await loadData();
		} else {
			notification.error({
				message: "Xóa sách thất bại !",
				description: res.message,
			});
		}
	};

	const columns = [
		{
			title: "STT",
			render: (_, record, index) => {
				return <>{index + 1 + (current - 1) * pageSize}</>;
			},
		},
		{
			title: "ID",
			dataIndex: "_id",
			render: (_, record) => {
				return (
					<a
						href="#"
						onClick={() => {
							setDataDetail(record);
							setIsDetailOpen(true);
						}}
					>
						{record._id}
					</a>
				);
			},
		},
		{
			title: "Tên",
			dataIndex: "mainText",
		},
		{
			title: "Tác giả",
			dataIndex: "author",
		},
		{
			title: "Giá",
			dataIndex: "price",
			render: (text, record, index, action) => {
				if (text)
					return new Intl.NumberFormat("vi-VN", {
						style: "currency",
						currency: "VND",
					}).format(text);
			},
		},
		{
			title: "Đã bán",
			dataIndex: "sold",
		},
		{
			title: "Số lượng",
			dataIndex: "quantity",
		},
		{
			title: "Thể loại",
			dataIndex: "category",
		},
		{
			title: "Action",
			key: "action",
			render: (_, record) => (
				<div style={{ display: "flex", gap: "20px" }}>
					<EditOutlined
						onClick={() => {
							setDataUpdate(record);
							setIsModalUpdateOpen(true);
						}}
						style={{ color: "#6d28d9", cursor: "pointer" }}
					/>
					<Popconfirm
						title="Xóa người dùng"
						description="Bạn chắc chắn xóa
						người dùng này ?"
						onConfirm={() => handleDeleteBook(record._id)}
						okText="Yes"
						cancelText="No"
						placement="left"
					>
						<DeleteOutlined
							style={{ color: "#dc2626", cursor: "pointer" }}
						/>
					</Popconfirm>
				</div>
			),
		},
	];

	const onChange = (pagination, filters, sorter, extra) => {
		// change cureent
		if (pagination && pagination.current) {
			if (+pagination.current !== +current) {
				setCurrent(+pagination.current);
			}
		}

		//change page size
		if (pagination && pagination.pageSize) {
			if (+pagination.pageSize !== +pageSize) {
				setPageSize(+pagination.pageSize);
			}
		}
		console.log({ pagination, filters, sorter, extra });
	};
	return (
		<>
			<UpdateBookModal
				isModalUpdateOpen={isModalUpdateOpen}
				setIsModalUpdateOpen={setIsModalUpdateOpen}
				dataUpdate={dataUpdate}
				setDataUpdate={setDataUpdate}
				loadData={loadData}
			/>
			{/* <div
				style={{
					marginTop: "10px",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<h3>Table Book</h3>
				<Button type="primary">Create Book</Button>
			</div> */}
			<Table
				columns={columns}
				dataSource={dataSource}
				rowKey="_id"
				pagination={{
					current: current,
					pageSize: pageSize,
					showSizeChanger: true,
					total: total,
					showTotal: (total, range) => {
						return (
							<div>
								{range[0]}-{range[1]} trên {total} rows
							</div>
						);
					},
				}}
				onChange={onChange}
				loading={isLoading}
			/>
			<ViewBookDetail
				dataDetail={dataDetail}
				setDataDetail={setDataDetail}
				isDetailOpen={isDetailOpen}
				setIsDetailOpen={setIsDetailOpen}
				loadData={loadData}
			/>
		</>
	);
};

export default BookTable;
