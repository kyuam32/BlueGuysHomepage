import styled from "styled-components";
import MainBanner from "./MainBanner";
import MainAbout from "./MainAbout";
import MainContactUs from "./MainContactus";
import MainProducts from "./MainProducts";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Banner = styled.div`
  width: 120rem;
  height: 75rem;
  background-image: url("/img/main/banner.webp");
  background-size: 90rem 70rem;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: top;
`

const Deco = styled.div`
  width: 100%;
  height: 60rem;
  background-image: url("/img/main/bg.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: end;
  justify-content: center;
`

const MainContainer = () => {
	return (
		<Wrapper>
			<Banner>
				<MainBanner/>
			</Banner>
			<Deco>
				<MainAbout/>
			</Deco>
			<MainProducts/>
			<MainContactUs/>
		</Wrapper>
	);
}

export default MainContainer;