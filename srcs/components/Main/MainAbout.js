import styled from "styled-components";
import SeeMoreBtn from "../Layout/SeeMoreBtn";

const InfoBox = styled.div`
  width: 112rem;
  height: 48rem;
  background-image: url("/img/main/aboutus.png");
  background-size : 112rem 50rem;
  box-shadow: 0.6rem 0.6rem 1.2rem 0 rgba(0,0,0,0.4);
  display: flex;
`

const AboutUs = styled.div`
  width: 38rem;
  height: 25rem;
  margin-left: 57rem;
  margin-top: 4rem;
  & + & {
    margin-top: 1.5rem;
  }
`

const Text1 = styled.span`
  font-family: GmarketSansBold, serif;
  font-size: 4rem;
  font-weight: bold;
  line-height: 2;
  color: #ddd;
`

const Text2 = styled.span`
  font-family: Noto Sans KR, serif;
  font-weight: 300;
  font-size: 2.3rem;
  line-height: 1.5;
  letter-spacing: -0.147rem;
  color: #808080;
`
const Text3 = styled.span`
  line-height: 3;
  font-family: Noto Sans KR, serif;
  font-weight: 300;
  font-size: 3rem;
  letter-spacing: -0.345rem;
  color: #2d2d2d;`

const Text4 = styled.span`
  font-weight: bold;
  color: #1d55b3;
`

const MainAbout = () => {
	return (
		<div>
			<InfoBox>
				<AboutUs>
					<Text1>About US</Text1>
					<br/>
					<Text2>일상과 업무환경 속의 건강관리를 실현 <br/>정형외과 의료 발전에 기여하는 사람들</Text2>
					<br/>
					<Text3>우리는 <Text4>푸른청년</Text4>입니다</Text3>
				</AboutUs>
				<SeeMoreBtn address="about"/>
			</InfoBox>
		</div>
	);
}

export default MainAbout;