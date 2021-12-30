
import styled, {css} from "styled-components";

const Wrapper = styled.div`
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
  background-image: url("/img/description/content1.webp");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
`

const TextTitle = styled.span`
  padding-bottom: 5rem;
  font-family: GmarketSansBold, serif;
  font-size: 4.25rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  display: block;
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
  color: #434343;
  ${props => props.float && css`
    line-height: 1.5;
    display: block;
    padding-top: 7rem;
    padding-left: 5rem;
  `}
`
const TextBold = styled.span`
  font-weight: 600;
`


const Content1 = () => {
	return (
		<Wrapper>
			<TextContainer>
				<TextTitle>Foot & Ankle products</TextTitle>
				<TextBase>족부 전문의들이 직접<br/>
					<TextBold>Foot & Ankle Health Care System을 실현</TextBold>하기 위해<br/>
					대중적으로 필요한 제품을 <TextBold>기획 및 제작</TextBold><br/>
				</TextBase>
				<TextBase float>
					<TextBold style={{textDecoration: "underline"}}>
						발에 대한 전문성을 가진 브랜드</TextBold><br/>
					<TextBold>Dr.PODI</TextBold><br/>
					<TextBold>ShuFooter</TextBold><br/>
				</TextBase>
			</TextContainer>
			<ImgContainer/>
		</Wrapper>
	);
}

export default Content1;