
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 5rem;
  width: 120rem;
  display: flex;
  justify-content: space-between;
`

const TextContainer = styled.div`
  width: 60rem;
  height: 45rem;
`
const ImgContainer = styled.div`
  width: 50rem;
  height: 45rem;
  background-image: url("/img/description/content2.webp");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
`

const TextTitle = styled.span`
  padding-bottom: 5rem;
  margin-top: 5rem;
  font-family: GmarketSansBold ,serif;
  font-size: 4.25rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  display: block;
  text-align: right;
  text-decoration: underline;
  text-underline-offset: 1.2rem;
  letter-spacing: -0.085rem;
  color: #28a7e1;
`
const TextBase = styled.span`
  font-family: Noto Sans KR, serif;
  font-size: 2.4rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.048rem;
  text-align: right;
  display: block;
  color: #434343;
  & + & {
    margin-top: 5rem;
  }
`
const TextBold = styled.span`
  font-weight: 600;
`

const Content2 = () => {
	return (
		<Wrapper>
			<ImgContainer/>
			<TextContainer>
				<TextTitle>Health care platform</TextTitle>
				<TextBase>
					<TextBold>일상 생활과 업무 환경 개선을 위한</TextBold><br/>
					<TextBold>맞춤형 건강 관리</TextBold>
				</TextBase>
			</TextContainer>
		</Wrapper>
	);
}

export default Content2;