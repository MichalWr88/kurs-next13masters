import React from "react";
import style from "./MainLoader.module.scss";
const MainLoader = () => (
	<div
		aria-busy="true"
		className="relative flex flex-col h-full w-full items-center justify-center border-2"
	>
		<div role="status" className={style.loader}></div>
		<span className="text-brand-color-3 text-xl">Loading...</span>
	</div>
);

export default MainLoader;
