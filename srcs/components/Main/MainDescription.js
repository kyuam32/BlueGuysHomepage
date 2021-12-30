import styled from "styled-components";
import SeeMoreBtn from "../Layout/SeeMoreBtn";

const InfoBox = styled.div`
  margin-top: 15rem;
  width: 120rem;
  height: 38rem;
  background-size : 120rem 38rem;
  background-image: url("/img/main/description.webp");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  text-align: center;
  & + & {
    margin-top: 5rem;
  }
`

const Text = styled.span`
  font-family: Noto Sans KR, serif;
  font-weight: 300;
  font-size: 2.3rem;
  line-height: 1.5;
  letter-spacing: -0.147rem;
  color: #808080;
`

const TextBold = styled(Text)`
  font-weight: 500;
  color: #3d3d3d;
`

const MainDescription = () => {
	return (
		<div>
			<InfoBox>
				<Container>
					<Text>㈜푸른청년의 바른의사 연구소에서는<br/>
						<TextBold>Foot & Ankle Health Care System</TextBold>을 만들어 나갑니다</Text>
				</Container>
				<Container>
					<SeeMoreBtn address="description" align="middle"/>
				</Container>
			</InfoBox>
		</div>
	);
}

export default MainDescription;