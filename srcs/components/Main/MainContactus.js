import styled from "styled-components";
import SeeMoreBtn from "../Layout/SeeMoreBtn";

const InfoBox = styled.div`
  width: 100%;
  background: #ececec;
  position: relative;
  bottom: 10rem;
  display: flex;
`

const InfoImg = styled.div`
  width: 50%;
  height: 49.1rem;
  background-image: url("/img/main/contact.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const InfoDescript = styled.div`
	margin: 5rem 5rem;
`

const Title1 = styled.span`
  font-family: Noto Sans KR, serif;
  font-size: 4.6rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: 0.092rem;
  color: #2b2b2b;

`
const Title2 = styled(Title1)`
  font-weight: 100;
`

const Descript1 = styled.span`
  font-family: Noto Sans KR, serif;
  font-size: 2.1rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.084rem;
  color: #2b2b2b;
`
const Descript2 = styled(Descript1)`
  letter-spacing: 0.042rem;
`

const MainContactUs = () => {
	return (
		<InfoBox>
			<InfoImg/>
			<InfoDescript>
				<Title1>Contact Us</Title1><br/>
				<Title2>Find your Dream</Title2>
				<br/>
				<Descript1>주식회사 푸른청년은<br/>
					<Descript2>Foot & Ankle Health Care System</Descript2>
					에<br/>
					함께하고자 하는 모든분께 열려 있습니다
				</Descript1>
			</InfoDescript>
			<SeeMoreBtn address={"contact"} style={{position: "relative"}}/>
		</InfoBox>
	);
}

export default MainContactUs;