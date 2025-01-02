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
		height: "full",
		"& > div > a": {
			color: "link",
			_hover: {
				textDecoration: "underline",
			},
		},
	})
	return (
		<div className={className}>
			<div>
				<h1># anoriqq</h1>
				<br/>
				shota.yoshikawa[at]anoriqq.com<br/>
				Tokyo, Japan<br/>
				<br/>
				<h2>## Link</h2>
				<br/>
				- <a href="https://github.com/anoriqq">GitHub</a>: あらゆるコード<br/>
				- <a href="https://x.com/anoriqq">X</a>: プログラミング(仕事)とアニメのつぶやき<br/>
				- <a href="https://mixi.social/@anoriqq">mixi2</a>: 起きてご飯食べて運動する<br/>
				- <a href="https://anoriqq.hateblo.jp">はてなブログ</a>: 頭使って文章を書いたり日記を書いたり<br/>
				<br/>
				<h2>## Work</h2>
				<br/>
				- 2022/01-2024/11: クラスター株式会社<br/>
				- 2020/10-2021/12: クラスター株式会社 (インターン)<br/>
				- 2018/01-2018/11: 株式会社プレイド (インターン)<br/>
			</div>
		</div>
	);
}
