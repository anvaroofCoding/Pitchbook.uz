import styled from 'styled-components'
import { useTranslations } from 'use-intl'

const Button = () => {
	const t = useTranslations()
	return (
		<StyledWrapper>
			<button>{t('download')}</button>
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
	button {
		font-size: 16px;
		padding: 1em 3.3em;
		cursor: pointer;
		transform: perspective(200px) rotateX(15deg);
		color: white;
		font-weight: 900;
		border: none;
		border-radius: 5px;
		background: linear-gradient(
			0deg,
			rgba(34, 197, 94, 1) 0%,
			/* Yashil (#22C55E) */ rgba(16, 185, 129, 1) 100%
				/* Yashil-yumshoqroq (#10B981) */
		);
		box-shadow: rgba(63, 94, 251, 0.2) 0px 40px 29px 0px;
		will-change: transform;
		transition: all 0.3s;
		border-bottom: 2px solid rgba(34, 197, 94, 1); /* Yashil (#22C55E) */
	}

	button:hover {
		transform: perspective(180px) rotateX(30deg) translateY(2px);
	}

	button:active {
		transform: perspective(170px) rotateX(36deg) translateY(5px);
	}
`

export default Button
