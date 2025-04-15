import { Button, Result } from "antd";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.log(error);

	return (
		<div>
			<Result
				status={error.status}
				title="Oops!"
				subTitle={error.statusText || error.message}
				extra={
					<Link to="/">
						<Button type="primary">Back to Homepage</Button>
					</Link>
				}
			></Result>
		</div>
	);
}
