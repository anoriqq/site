import type { MetaFunction } from "@remix-run/node";
import { css } from "styled-system/css";

export const meta: MetaFunction = () => [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
];

export default function Index() {
	const className = css({
		display: "flex",
		justifyContent: "center",
	})
	return (
		<div className={className}>
		# anoriqq<br/>
		<br/>
		shota.yoshikawa[at]anoriqq.com<br/>
		Tokyo, Japan<br/>
		<br/>
		## Work<br/>
		<br/>
		- 2022/01 - Present: クラスター株式会社<br/>
		- 2020/10 - 2021/12: クラスター株式会社 (インターン)<br/>
		- 2018/01 - 2018/11: 株式会社プレイド (インターン)<br/>
		</div>
	);
}
