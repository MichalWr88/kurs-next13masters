"use client";
/* eslint-disable no-unused-vars */


import {  usePathname } from "next/navigation";
import { useState } from "react";
import { usePagination, DOTS } from "../Pagination/usePagination";
import PaginationItem from "./PaginationItem";
import type { Route } from "next";

type Props= {
	basePath: Route;
	onPageChange?: (page: number) => void;
	totalCount: number;
	siblingCount?: number;
	currentPage: number;
	pageSize: number;

};
const RoutePagination = (props: Props) => {
	
	const pathName = usePathname();
	const {  totalCount, siblingCount = 1, pageSize, basePath } = props;
	const [currentPage] = useState(Number([...pathName.split("/")].reverse()[0]));
	const paginationRange = usePagination({
		currentPage: currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});
	console.log(paginationRange);
	// If there are less than 2 times in pagination range we shall not render the component
	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}



	// const lastPage = paginationRange[paginationRange.length - 1];
	return (
		<ul className="flex h-20 justify-around p-3">
			{/* Left navigation arrow */}
			<PaginationItem href={`${basePath}/${currentPage.toString()}` as Route}>
				{"Prev"}
			</PaginationItem>
			{/* <li
				className={clsx("", {
					disabled: currentPage === 1,
				})}
				onClick={() => onPrevious}
			>
				<div className="arrow left" />
			</li> */}
			{paginationRange.map((pageNumber,index) => {
				// If the pageItem is a DOT, render the DOTS unicode character
				if (pageNumber === DOTS) {
					return (
						<PaginationItem
							key={`pagination-${pageNumber}-${index}`}
							href={`${basePath}/${currentPage.toString()}` as Route}
							blocked
						>
							<span className="tracking-widest	">{"..."}</span>
						</PaginationItem>
					);
				}

				// Render our Page Pills
				return (<PaginationItem key={`pagination-${pageNumber}`} href={`${basePath}/${pageNumber.toString()}` as Route} selected={pageNumber === currentPage}>
				{pageNumber}
			</PaginationItem>

				);
			})}
			{/*  Right Navigation arrow */}
			<PaginationItem href={`${basePath}/${(currentPage +1).toString()}` as Route}>
				{"Next"}
			</PaginationItem>
			{/* <li
				className={clsx("", {
					disabled: currentPage === lastPage,
				})}
				onClick={() => onNext}
			>
				<div className={clsx("")} />
			</li> */}
		</ul>
	);
};

export default RoutePagination;
