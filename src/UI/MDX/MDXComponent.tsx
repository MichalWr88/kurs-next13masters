import { type MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import AppLink from "@/UI/Shared/AppLink";

type Props = {
	obj: { updatedAt?: string | null; desc?: string };
	children: React.ReactNode;
};

const components: MDXComponents | null | undefined = {
	h1: (props: { children: React.ReactNode }) => (
		<h1 {...props} className="p-3 text-center text-3xl underline underline-offset-4">
			{props.children}
		</h1>
	),
	h2: (props: { children: React.ReactNode }) => (
		<h2 {...props} className="p-3  text-xl italic text-brand-color-2">
			{props.children}
		</h2>
	),
	strong: (props: { children: React.ReactNode }) => (
		<strong {...props} className="rounded-lg bg-brand-color-2 p-1 text-xl text-brand-color-4">
			{props.children}
		</strong>
	),
};

const MDXComponent = ({ obj: { updatedAt, desc } }: Props) => (
	<div className="container flex flex-col p-2 ">
		<AppLink route="/">
			<button className="bg-brand-color-3 px-7 py-3 text-brand-bg-color hover:shadow-md">
				Back to Home
			</button>
		</AppLink>
		<div>{updatedAt ? `Updated: ${new Date(updatedAt).toLocaleString()}` : ""}</div>
		<MDXRemote source={desc ?? ""} components={components} />
	</div>
);

export default MDXComponent;
