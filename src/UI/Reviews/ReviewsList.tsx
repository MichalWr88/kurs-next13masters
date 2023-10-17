import { getReviewsListByProductId } from "@/api/graphQL/graphQLProvider";

const ReviewsList = async ({ id }: { id: number }) => {
	const reviews = await getReviewsListByProductId(id);
	console.log("id", id, reviews);
	return (
		<section className="body-font w-full text-gray-600 ">
			<div className="container px-5 ">
				<h5 className="title-font mb-9 text-center text-3xl font-medium text-gray-900">Reviews</h5>
				<div className="flex flex-col flex-wrap gap-2">
					{reviews.map((review) => (
						<div className="h-full rounded bg-gray-100 p-8" key={review.id}>
							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										className="mb-4 mr-7 block h-3 w-3 text-gray-400"
										viewBox="0 0 975.036 975.036"
									>
										<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
									</svg>
									<p className="mb-6 ">{review.attributes?.headline}</p>
								</div>
								<p className="mb-6 text-sm">
									{review.attributes?.createdAt
										? new Date(review.attributes?.createdAt).toLocaleDateString()
										: ""}
								</p>
							</div>
							<div className="flex justify-between">
								<div className="flex">
									<img
										alt="testimonial"
										src="https://dummyimage.com/106x106"
										className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-center"
									/>
									<span className="flex flex-grow flex-col pl-4">
										<span className="title-font font-medium text-gray-900">{review.attributes?.name}</span>
										<span className="text-sm text-gray-500">{review.attributes?.email}</span>
									</span>
								</div>
								<p className="mb-6 ">{review.attributes?.content}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ReviewsList;
