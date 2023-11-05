import React from "react";
import PersonItem, { type Person } from "./PersonItem";

const cooks: Array<Person> = [
	{
		id: 1,
		name: "Alice Williams",
		position: "Head Chef",
		desc: "Specializes in Italian cuisine",
		img: "/person1.jpg",
	},
	{
		id: 2,
		name: "Jane Smith",
		position: "Sous Chef",
		desc: "Expert in pastry and baking",
		img: "/person2.jpg",
	},
	{
		id: 3,
		name: "Bob Johnson",
		position: "Line Cook",
		desc: "Experienced in grilling and roasting",
		img: "/person3.jpg",
	},
	{
		id: 4,
		name: "John Doe",
		position: "Prep Cook",
		desc: "Responsible for preparing ingredients",
		img: "/person4.jpg",
	},
];

const TeamLIst = () => {
	return (
		<section className="body-font text-gray-600">
			<div className="container mx-auto">
				<div className="mb-20 flex w-full flex-col text-center">
					<h1 className=" mb-4 text-2xl font-medium text-gray-900">OUR TEAM</h1>
					<p className="mx-auto text-base leading-relaxed lg:w-2/3">
						Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
						farm-to-table. Franzen you probably heard of them.
					</p>
				</div>
				<div className="grid  grid-cols-1 items-center gap-4 md:grid-cols-4">
					{cooks.map((person) => (
						<PersonItem key={person.id} person={person} />
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamLIst;
