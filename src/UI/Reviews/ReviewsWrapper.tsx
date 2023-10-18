import React from "react";
import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewsList";

const ReviewsWrapper = ({ id }: { id: number }) => (
		<div className="flex p-4 container">
			<ReviewForm id={id} />
			<ReviewsList id={id} />
		</div>
	);

export default ReviewsWrapper;
