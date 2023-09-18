import clsx from "clsx";
import React from "react";

type Props = {
	rating: number | null;
};
const startsNumber = 5;

const Rating = ({ rating }: Props) => {
	if (!rating) return null;
	const ratingStarsArray = Array.from(
		{ length: startsNumber },
		(_, i) => i + 1 <= Number(((rating * 5) / 100).toFixed(2)),
	);

	return (
		<div className="flex items-center">
			<ul
				className="my-1 flex list-none gap-1 p-0"
				data-te-rating-init
				data-te-readonly="true"
				data-te-value="3"
			>
				{ratingStarsArray.map((fill,i) => (
					<li key={`rating-star-${fill}-${i}`}>
						<span
							className={clsx("[&>svg]:h-5 [&>svg]:w-5", fill && "bg-indigo-600")}
							data-te-rating-icon-ref
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill={fill ? "currentColor" : "none"}
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
								/>
							</svg>
						</span>
					</li>
				))}
			</ul>
			<span className="ml-2">{((rating * 5) / 100).toFixed(2)}</span>
		</div>
	);
};

export default Rating;
