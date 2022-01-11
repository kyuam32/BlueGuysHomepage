import styled from "styled-components";
import SeeMoreBtn from "../Layout/SeeMoreBtn";

const InfoBox = styled.div`
  margin-top: 8rem;
  width: 120rem;
  height: 52rem;
  background-image: url("/img/main/aboutus.webp");
  background-size : 120rem 52.5rem;
  display: flex;
  flex-direction: column;
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
		<InfoBox>
			<AboutUs>
				<Text1>About Us</Text1>
				<br/>
				<Text2>일상과 업무환경 속의 건강관리를 실현 <br/>정형외과 의료 발전에 기여하는 사람들</Text2>
				<br/>
				<Text3>우리는 <Text4>푸른청년</Text4>입니다</Text3>
			</AboutUs>
			<SeeMoreBtn address="about" align="right"/>
		</InfoBox>
	);
}

export default MainAbout;