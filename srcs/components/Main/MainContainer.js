import styled from "styled-components";
import MainBanner from "./MainBanner";
import MainAbout from "./MainAbout";
import MainContactUs from "./MainContactus";
import MainProduct from "./MainProduct"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center
`

const Banner = styled.div`
  width: 150rem;
  height: 75rem;
  background-image: url("/img/main/banner.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const Deco = styled.div`
  width: 150rem;
  height: 50rem;
  background-image: url("/img/main/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const InfoBoxes = styled.div`
  width: 112rem;
  height: 110rem;
  position: relative;
  bottom: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const MainContainer = () => {
	return (
		<Wrapper>
			<Banner>
				<MainBanner/>
			</Banner>
			<Deco/>
			<InfoBoxes>
				<MainAbout/>
				<MainProduct/>
			</InfoBoxes>
			<MainContactUs/>
		</Wrapper>
	);
}

export default MainContainer;