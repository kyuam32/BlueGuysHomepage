import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  div + div {
    margin-top: 10rem;
  }
`
const Introduce = styled.div`
  width: 120rem;
  height: 68rem;
  background-image: url("/img/about/profile.webp");
  background-size: 62rem 68rem;
  background-repeat: no-repeat;
  background-position-x: right;
`

const IntroSmalllight = styled.span`
  font-family: Noto Sans KR, serif;
  display: block;
  font-size: 2.4rem;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #434343;
  & + & {
    margin-top: 3rem;
  }
`

const IntroSmallbold = styled.span`
  font-weight: bold;
`

const IntroBiglight = styled.span`
  font-size: 6rem;
  font-weight: lighter;
`
const IntroBigBold = styled.span`
  font-size: 6rem;
  font-weight: bold;
  line-height: 2;
`

const UnderBar = styled.div`
  margin-top: 10rem;
  width: 60rem;
  border: solid 0.2rem #d7d7d7;
`

const Prize = styled.div`
  @import url(//fonts.googleapis.com/earlyaccess/kopubbatang.css);
  margin-bottom: 10rem;
  text-align: center;
  font-family: 'KoPub Batang', serif;
  font-size: 2.4rem;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: -0.96px;
  color: #434343;
`

const Profile = ()=>{
	return (
		<Wrapper>
			<Introduce>
				<IntroSmalllight>
					<IntroBigBold>㈜푸른청년</IntroBigBold>
					<IntroBiglight>은<br/></IntroBiglight>
					진료와 수술을 통해 떠오른 아이디어를<br/>
					하나씩 하나씩 실현해 나가기 위해<br/>
					족부 전문 정형외과 의사들이 만든 회사 입니다.<br/>
				</IntroSmalllight>
				<IntroSmalllight>
					누구나 쉽게 접근할 수 있는 제품들을 만들고,<br/>
					Smart health care platform을 구축하여<br/>
					<IntroSmallbold>일상과 업무 환경 속의 건강관리를 실현,<br/>
						정형외과 의료 발전에 기여 하는 것</IntroSmallbold>
					이<br/>우리의 비전입니다<br/>
				</IntroSmalllight>
				<IntroSmalllight style={{paddingTop: "12rem"}}>
					정형외과 전문의, ㈜푸른청년 대표 박은수
				</IntroSmalllight>
			</Introduce>
			<UnderBar/>
			<Prize>
				2021 한국 보건산업 진흥원 ‘의사 창업 연구회‘ 선정<br/>
				2021 창업 진흥원 K-start up ‘초기 창업 패키지’ 선정
			</Prize>
		</Wrapper>
	);
}

export default Profile;