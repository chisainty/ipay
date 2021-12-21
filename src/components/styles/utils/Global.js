import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

		@font-face {
		font-family: "NatoSans";
		src: url("../fonts/NotoSans-Regular.ttf") format("truetype");
		}

		@font-face {
		font-family: "RailwayBold";
		src: url("../fonts/railway/static/Raleway-ExtraBold.ttf") format("truetype");
		}

		@font-face {
		font-family: "Railway";
		src: url("../fonts/railway/static/Raleway-Regular.ttf") format("truetype");
		}

		* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		}

		body {
		font-family: "NotoSans", sans-serif;
		color: var(--primary-dark);
		overflow-x: hidden;
		}
`;
