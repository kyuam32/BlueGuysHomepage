import styled,{css} from "styled-components";
import Layout from "./Layout/Layout";
import SubBanner from "./SubMain/SubBanner";

const Wrapper = styled.div`
  width: 80rem;
  margin: 5rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Bg = styled.div`
  z-index: -1;
  width: 80rem;
  height: 30rem;
  position: relative;
  bottom: -10rem;
  background-image: url("/img/contact/bg.png");
  background-repeat: no-repeat;
  background-size: contain;
`

const TextBase = styled.span`
  display: block;
  object-fit: contain;
  font-family: Noto Sans KR, serif;
  font-size: 2.4rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #434343;
  ${props => props.bold && css`
  `}
  & + & {
    margin-top: 5rem;
  }
`

const TextBold = styled(TextBase)`
  font-weight: 600;
  display: inline;
  ${props => props.colored && css`
    color: #1460a1;
  `}
`

const ContactPage = ( )=> {
	return (
		<Layout>
			<SubBanner/>
			<Wrapper>
				<TextBase>주식회사 푸른청년은<br/>
					<TextBold>Foot & Ankle Health Care System을 함께하고자 하는<br/>
						모든분께 열려 있습니다
					</TextBold>
				</TextBase>
				<TextBase>제품문의, 기술문의<br/>
					회사소개 관련 추가자료 요청 및 제휴 문의 등<br/>
					관련 문의사항은 <TextBold colored>abcde12345@qwerty.com</TextBold> 으로 보내주시길 바랍니다.
				</TextBase>
				<Bg/>
			</Wrapper>
		</Layout>
	);
}

export default ContactPage;