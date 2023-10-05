import React from "react";
import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewsList";

type Props = {};

const ReviewsWrapper = (props: Props) => {
	console.log("test");
	return (
		<div className="flex p-4">
			<ReviewForm />
			<ReviewsList />
		</div>
	);
};

export default ReviewsWrapper;
