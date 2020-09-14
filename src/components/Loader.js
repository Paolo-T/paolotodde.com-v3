import styled, { keyframes } from "styled-components";

const spin = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

export const Loader = styled.div`
    border: 10px solid rgba(rgba(129, 230, 217, 1));
    border-top: 3px solid #81e6d9;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spin} 0.6s linear infinite;
`;

export default Loader;
