
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`

const TextContainer = styled.div`
  width: 60rem;
  height: 45rem;
`
const ImgContainer = styled.div`
  width: 50rem;
  height: 45rem;
  background-image: url("/img/description/content2.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
`

const TextTitle = styled.span`
  margin-top: 5rem;
  object-fit: contain;
  text-decoration: underline;
  text-underline-offset: 1.2rem;
  font-family: GmarketSansBold ,Serif;
  font-size: 4.25rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  display: block;
  text-align: right;
  letter-spacing: -0.085rem;
  color: #28a7e1;
`
const TextBase = styled.span`
  object-fit: contain;
  font-family: Noto Sans KR, Serif;
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
				<TextTitle>Health care platform</TextTitle><br/><br/>
				<TextBase><TextBold>Smart insole</TextBold>에<br/>
					foot & ankle health care platform 을 적용<br/>
					<TextBold>일상 생활 및 업무 환경의 건강 관리를 실현</TextBold><br/>
				</TextBase>
				<TextBase float>
					Platform 서비스를 통해<br/>
					<TextBold>적합한 shoe를 권유 및 제공</TextBold>하는 서비스<br/>
				</TextBase>
			</TextContainer>
		</Wrapper>
	);
}

export default Content2;