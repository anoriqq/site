import { css } from "styled-system/css";

export const Html: React.FC<React.PropsWithChildren> = ({ children }) => {
	const className = css({
		height: "full",
		width: "full",
		margin: "0",
		boxSizing: "border-box",
		lineHeight: "md",
	});

	return (
		<html lang="en" className={className}>
			{children}
		</html>
	);
};
