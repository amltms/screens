import { FC } from 'react';
import styled from 'styled-components';
import { palette } from '../../styles/palette';

export type FormProps = {
	onSubmit: any;
};

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;

	padding: 4vw;
	position: absolute;
	backdrop-filter: blur(20px);
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 100;
	input {
		background: none;
		font-size: 1.5rem;
		transition: 1s;
		border: none;
		margin-left: 0.8rem;
		width: 100%;
		&:-webkit-autofill,
		&:-webkit-autofill:hover,
		&:-webkit-autofill:focus,
		&:-webkit-autofill:active {
			-webkit-transition: 'color 9999s ease-out, background-color 9999s ease-out';
			-webkit-transition-delay: 9999s;
			transition: 'color 9999s ease-out, background-color 9999s ease-out';
			transition-delay: 9999s;
		}
	}
	h2 {
		font-family: 'Roboto', sans-serif;
		font-weight: 1000;
		font-size: 4.5rem;
		margin-bottom: 1rem;
	}
	p {
		color: #a7a6a6;
		font-size: 1.3rem;
		margin: 1rem 0;
		a {
			color: ${palette.primary};
			vertical-align: baseline;
		}
	}
`;

export const Form: FC<FormProps> = ({ children, onSubmit }) => {
	return <FormContainer onSubmit={onSubmit}>{children}</FormContainer>;
};