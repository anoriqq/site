import {
	defineConfig,
	defineGlobalStyles,
	defineKeyframes,
	defineSemanticTokens,
	defineTokens,
} from "@pandacss/dev";

// https://panda-css.com/docs/theming/tokens#token-types
const tokens = defineTokens({
	colors: {},
	gradients: {},
	sizes: {
		full: { value: "100%" },
	},
	spacing: {
		0: { value: "0" },
	},
	fonts: {
		sansserif: { value: "Inter, sans-serif" },
	},
	fontSizes: {},
	fontWeights: {},
	letterSpacings: {},
	lineHeights: {},
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

const semanticTokens = defineSemanticTokens({});

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
