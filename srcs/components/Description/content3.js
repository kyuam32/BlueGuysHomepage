
import styled, {css} from "styled-components";

const Wrapper = styled.div`
  margin-top: 5rem;
  width: 120rem;
  display: flex;
  justify-content: space-between;
`

const TextContainer = styled.div`
  margin-top: 5rem;
  width: 70rem;
  height: 45rem;
`
const ImgContainer = styled.div`
  width: 40rem;
  height: 45rem;
  background-image: url("/img/description/content3.webp");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
`

const TextTitle = styled.span`
  padding-bottom: 5rem;
  font-family: GmarketSansBold, serif;
  text-decoration: underline;
  text-underline-offset: 1.2rem;
  font-size: 4.25rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  display: block;
  letter-spacing: -0.085rem;
  color: #28a7e1;
`
const TextBase = styled.span`
  display: block;
  font-family: Noto Sans KR, serif;
  font-size: 2.4rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.048rem;
  color: #434343;
  ${props => props.sub && css`
    font-size: 1.8rem;
    font-weight: 300;
    letter-spacing: -0.036rem;
    margin-top: 0;
  `}
  & + & {
    margin-top: 3rem;
  }
`
const TextSub = styled.span`
  margin-top: 1rem;
  display: block;
  object-fit: contain;
  font-family: Noto Sans KR, serif;
  font-size: 1.8rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.036rem;
  color: #434343;
`


const Content3 = () => {
	return (
		<Wrapper>
			<TextContainer>
				<TextTitle>Big data research</TextTitle>
				<TextBase>족부 DATA기반 논문 연구
					<TextSub>- 국내외 및 SCI journal 등재와 학회 발표</TextSub>
				</TextBase>
				<TextBase>Foot & ankle health care platform을 통해 측정된 DATA 분석
					<TextSub>- 발에 대한 활동 로그 ; 근골격계 진단 및 치료의 기준</TextSub>
					<TextSub>- 만성 질환 모니터링 </TextSub>
				</TextBase>
				<TextBase>DATA 기반 신규 제품의 연구</TextBase>
			</TextContainer>
			<ImgContainer/>
		</Wrapper>
	);
}

export default Content3;