import {
	defineConfig,
	defineGlobalStyles,
	defineKeyframes,
	defineSemanticTokens,
	defineTokens,
} from "@pandacss/dev";

// https://panda-css.com/docs/theming/tokens#token-types
const tokens = defineTokens({
	colors: {
		blue: { value: "#5FA6FF" },
		black: { value: "#000" },
	},
	gradients: {},
	sizes: {
		full: { value: "100%" },
	},
	spacing: {
		0: { value: "0" },
		xs: { value: "0.25rem" },
		sm: { value: "0.5rem" },
		md: { value: "1rem" },
	},
	fonts: {
		sansserif: { value: "Inter, sans-serif" },
		monospace: { value: "JetBrains Mono, monospace" },
	},
	fontSizes: {},
	fontWeights: {},
	letterSpacings: {},
	lineHeights: {
		md: { value: "1.5" },
	},
	radii: {},
	borders: {},
	borderWidths: {},
	shadows: {},
	easings: {},
	opacity: {},
	blurs: {},
	zIndex: {},
	assets: {},
	durations: {},
	animations: {},
	aspectRatios: {},
	containerNames: {},
});

const semanticTokens = defineSemanticTokens({
	colors: {
		text: { value: "black" },
		link: { value: "blue" },
	},
});

const keyframes = defineKeyframes({});

const globalCss = defineGlobalStyles({
	"*, *::before, *::after": {
		boxSizing: "inherit",
	},
});

export default defineConfig({
	strictTokens: true,
	strictPropertyValues: true,
	shorthands: false,
	jsxFramework: "react",

	minify: true,
	hash: true,
	lightningcss: true,

	outdir: "styled-system",
	include: [
		"./app/root.tsx",
		"./app/routes/**/*.{ts,tsx,js,jsx}",
		"./app/components/**/*.{ts,tsx,js,jsx}",
	],
	exclude: [],

	preflight: true,
	eject: false,
	presets: [],
	theme: {
		tokens,
		semanticTokens,
		keyframes,
	},

	globalCss,
});
