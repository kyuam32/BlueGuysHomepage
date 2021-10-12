import styled from "styled-components";

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.2);
  width: 9.4rem;
  height: 9.4rem;
  text-align: center;
  margin-left: auto;
`
const Cross = styled.span`
  font-family: Noto Sans KR, serif;
  mix-blend-mode: unset;
  font-size: 7.2rem;
  font-weight: bold;
  display: block;
  line-height: 9.4rem;
  color: #ffffff;
`

const PlusButton = () => {
	return (
		<Wrapper>
			<Cross>+</Cross>
		</Wrapper>
	)
}

export default PlusButton;