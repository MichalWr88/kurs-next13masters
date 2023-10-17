import React from "react";
import { addReviewToProduct } from "@/api/graphQL/ReviewProvider";
import styles from "./ReviewFrom.module.scss";

const ReviewForm = ({ id }: { id: number }) => {
	console.log("test");

	const sendReview = async (formData: FormData) => {
		"use server";
		console.log(formData.get("headline"));
		const review = {
			headline: formData.get("headline")?.toString() ?? "",
			email: formData.get("email")?.toString() ?? "",
			name: formData.get("name")?.toString() ?? "",
			rating: Number(formData.get("rating")) ?? "",
			content: formData.get("content")?.toString() ?? "",
		};
		return addReviewToProduct({ ...review, productId: id });
	};

	return (
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		<form data-testid="add-review-form" action={sendReview}>
			<div className="mt-8 flex w-full flex-col">
				<h2 className="title-font mb-1 text-lg font-medium text-gray-900">Review</h2>
				<p className="mb-5 leading-relaxed text-gray-600">
					If you&apos;ve used this product, share your thoughts with other customers
				</p>
				<div className="relative mb-4">
					<label htmlFor="name" className="text-sm leading-7 text-gray-600">
						Review title
					</label>
					<input
						type="text"
						id="name"
						name="headline"
						className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
					/>
				</div>
				<div className="relative mb-4">
					<label htmlFor="email" className="text-sm leading-7 text-gray-600">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
					/>
				</div>
				<div className="relative mb-4">
					<label htmlFor="name" className="text-sm leading-7 text-gray-600">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
					/>
				</div>
				<div className={styles.rating}>
					<label>
						<input type="radio" name="rating" value="1" />
						<span className={styles.icon}>★</span>
					</label>
					<label>
						<input type="radio" name="rating" value="2" />
						<span className={styles.icon}>★</span>
						<span className={styles.icon}>★</span>
					</label>
					<label>
						<input type="radio" name="rating" value="3" />
						<span className={styles.icon}>★</span>
						<span className={styles.icon}>★</span>
						<span className={styles.icon}>★</span>
					</label>
					<label>
						<input type="radio" name="rating" value="4" />
						<span className={styles.icon}>★</span>
						<span className={styles.icon}>★</span>
						<span className={styles.icon}>★</span>
						<span className={styles.icon}>★</span>
					</label>
					<label>
						<input type="radio" name="rating" value="5" />
						<span className={styles.icon}>★</span>
						<span className={styles.icon}>★</span>
						<span className={styles.icon}>★</span>
						<span className={styles.icon}>★</span>
						<span className={styles.icon}>★</span>
					</label>
				</div>
				<div className="relative mb-4">
					<label htmlFor="content" className="text-sm leading-7 text-gray-600">
						Review content
					</label>
					<textarea
					typeof="text"
						id="message"
						name="content"
						className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
					></textarea>
				</div>
				<button
					type="submit"
					className="rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
				>
					Submit review
				</button>
			</div>
		</form>
	);
};

export default ReviewForm;
