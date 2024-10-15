import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import type { FC, PropsWithChildren } from "react";

import styles from "./root.css?url"

import { Body } from "./components/body";
import { Html } from "./components/html";

export const meta: MetaFunction = () => [
	{ title: "Remix" },
];


export const links: LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
	{ rel: "stylesheet", href: styles },
];

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Html>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<Body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</Body>
		</Html>
	);
};

const App: FC = () => {
	return <Outlet />;
};
export default App;

export function HydrateFallback() {
	return <p>Loading...</p>;
}
