/* eslint-disable react/display-name */
import { type ComponentType } from "react";

type IconColor = "currentColor" | "none";
// Define a type for the props of the returned component
interface wIthColoredIconsProps {
	fill: IconColor;
	stroke: IconColor;
}

// This is a Higher Order Component that wraps the passed component in a div with a class name
const wIthColoredIcons = <P extends object>(
	WrappedComponent: ComponentType<P>,
	fill: IconColor,
	stroke: IconColor,
) => {
	return (props: P & wIthColoredIconsProps) => (
		<WrappedComponent {...(props as P)} fill={fill ?? "none"} stroke={stroke ?? "none"} />
	);
};

export default wIthColoredIcons;
