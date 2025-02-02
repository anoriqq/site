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
		},
	})
	return (
		<div className={className}>
			<div>
				<h1># anoriqq</h1>
				<br/>
				<p>{"shota.yoshikawa[at]{THIS_DOMAIN}"}</p>
				<p>Tokyo, Japan</p>
				<br/>
				<h2>## Link</h2>
				<br/>
				<ul>
					<li>- <a href="https://github.com/anoriqq">GitHub</a>: あらゆるコード</li>
					<li>- <a href="https://x.com/anoriqq">X</a>: ソフトウェア(仕事)とアニメのつぶやき</li>
					<li>- <a href="https://mixi.social/@anoriqq">mixi2</a>: 起きてご飯食べて運動する</li>
					<li>- <a href="https://anoriqq.hateblo.jp">はてなブログ</a>: 頭使って文章を書いたり日記を書いたり</li>
					<li>- <a href="https://myanimelist.net/animelist/anoriqq?order=4&order2=12&status=1">MyAnimeList</a>: みてるアニメ</li>
				</ul>
				<br/>
				<h2>## Work</h2>
				<br/>
				<ul>
					<li>- 2022/01-2024/11: <a href="https://corp.cluster.mu/" target="_blank">クラスター株式会社</a></li>
					<li>- 2020/10-2021/12: <a href="https://corp.cluster.mu/" target="_blank">クラスター株式会社</a> (インターン)</li>
					<li>- 2018/01-2018/11: <a href="https://plaid.co.jp/" target="_blank">株式会社プレイド</a> (インターン)</li>
				</ul>
			</div>
		</div>
	);
}
