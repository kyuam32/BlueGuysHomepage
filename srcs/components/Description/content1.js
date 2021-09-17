
import styled, {css} from "styled-components";

const Wrapper = styled.div`
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
  background-image: url("/img/description/content1.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
`

const TextTitle = styled.span`
  object-fit: contain;
  font-family: GmarketSansBold, Serif;
  font-size: 4.25rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  text-decoration: underline;
  text-underline-offset: 1.2rem;
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
				<TextTitle>Foot & Ankle products</TextTitle><br/><br/>
				<TextBase>족부 전문의들이 직접<br/>
					<TextBold>Foot & Ankle Health Care System을 실현</TextBold>하기 위해<br/>
					대중적으로 필요한 제품을 <TextBold>기획하고 제작합니다</TextBold><br/>
				</TextBase>
				<TextBase float>
					<TextBold style={{textDecoration: "underline"}}>
						발에 대한 전문성을 가진 브랜드</TextBold><br/>
					족부 보조 제품 : <TextBold>Dr.PODI</TextBold><br/>
					깔창 및 신발 제품 : <TextBold>ShuFooter</TextBold><br/>
				</TextBase>
			</TextContainer>
			<ImgContainer/>
		</Wrapper>
	);
}

export default Content1;