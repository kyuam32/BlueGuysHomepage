import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div + div {
    margin-top: 10rem;
  }
`
const Introduce = styled.div`
  width: 120rem;
  height: 75.2rem;
  background-image: url("/img/about/profile.png");
  background-size: cover;
  background-repeat: no-repeat;
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
  letter-spacing: -0.96px;
  color: #434343;
`

const IntorSmalllight = styled.span`
  margin-top: 18rem;
  font-family: Noto Sans KR, Serif;
  display: block;
  margin-left: 3.2rem;
  font-size: 2.4rem;
  font-weight: 0;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #434343;
  & + & {
    margin-top: 3rem;
  }
`

const IntorSmallbold = styled.span`
  font-weight: bold;
`

const IntorBiglight = styled.span`
  font-size: 6rem;
  font-weight: lighter;
`
const IntorBigBold = styled.span`
  font-size: 6rem;
  font-weight: bold;
  line-height: 2;
`

const Profile = ()=>{
	return (
		<Wrapper>
			<Introduce>
				<IntorSmalllight>
					<IntorBigBold>㈜푸른청년</IntorBigBold>
					<IntorBiglight>은<br/></IntorBiglight>
					진료와 수술을 통해 떠오른 아이디어를<br/>
					하나씩 하나씩 실현해 나가기 위해<br/>
					족부 전문 정형외과 의사들이 만든 회사 입니다.<br/>
				</IntorSmalllight>
				<IntorSmalllight>
					누구나 쉽게 접근할 수 있는 제품들을 만들고,<br/>
					Smart health care platform을 구축하여<br/>
					<IntorSmallbold>일상과 업무 환경 속의 건강관리를 실현,<br/>
						정형외과 의료 발전에 기여 하는 것</IntorSmallbold>
					이 우리의 비전입니다<br/>
				</IntorSmalllight>
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