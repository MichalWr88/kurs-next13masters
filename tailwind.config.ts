/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/UI/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		darkMode: false,
		colors: {
			zinc: colors.zinc,
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			red: colors.red,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			neutral: colors.neutral,
			"brand-font-color": "#120203",
			"brand-color-2": "#EA2428",
			"brand-color-3": "#FF7D67",
			"brand-color-4": "#FFF2ED",
			"brand-bg-color": "#ffffff",
		},
		fontFamily: {
			archivo: [
				"__Archivo_Narrow_838412",
				"__Archivo_Narrow_Fallback_838412",
				"ui-sans-serif",
				"system-ui",
			],
			nanum: ["__Pacifico_eb57e9", "cursive", "ui-serif", "Georgia"],
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;

/* 
    "brand-font-color": "#590118",
      "brand-color-2": "#BF9E60",
      "brand-color-3": "#D9D8D7",
      "brand-color-4": "#CCC3C6",
      "brand-bg-color": "#EEF2F3",
*/
