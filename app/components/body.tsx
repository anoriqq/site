import { css } from "styled-system/css";

export const Body: React.FC<React.PropsWithChildren> = ({ children }) => {
	const className = css({
		height: "full",
		width: "full",
		margin: "0",
		lineHeight: "md",
		color: "text",
		backgroundColor: "background",
		fontFamily: "sansserif",
		fontSmoothing: "antialiased",
	});

	return <body className={className}>{children}</body>;
};
