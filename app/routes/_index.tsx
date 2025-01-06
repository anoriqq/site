import type { MetaFunction } from "@remix-run/node";
import { css } from "styled-system/css";

export const meta: MetaFunction = () => [
		{ title: "anoriqq" },
];

export default function Index() {
	const className = css({
		display: "flex",
		justifyContent: "center",
		height: "full",
		"& > div": {
			padding: "sm",
			"& > a": {
				color: "link",
				_hover: {
					textDecoration: "underline",
				},
			},
		},
	})
	return (
		<div className={className}>
			<div>
				<h1># anoriqq</h1>
				<br/>
				{"shota.yoshikawa[at]{THIS_DOMAIN}"}<br/>
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
				- 2022/01-2024/11: <a href="https://corp.cluster.mu/" target="_blank">クラスター株式会社</a><br/>
				- 2020/10-2021/12: <a href="https://corp.cluster.mu/" target="_blank">クラスター株式会社</a> (インターン)<br/>
				- 2018/01-2018/11: <a href="https://plaid.co.jp/" target="_blank">株式会社プレイド</a> (インターン)<br/>
			</div>
		</div>
	);
}
