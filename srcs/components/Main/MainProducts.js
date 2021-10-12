import styled from "styled-components";
import SeeMoreBtn from "../Layout/SeeMoreBtn";

const InfoBox = styled.div`
  margin-top: 15rem;
  width: 120rem;
  height: 52rem;
  background-size : 120rem 52rem;
  background-image: url("/img/main/products.webp");
  display: flex;
  flex-direction: column;
`

const Products = styled.div`
  width: 38rem;
  height: 25rem;
  text-align: right;
  margin-left: 20rem;
  margin-top: 4rem;
  & + & {
    margin-top: 1.5rem;
  }
`

const Title = styled.span`
  font-family: GmarketSansBold, serif;
  font-size: 4rem;
  font-weight: bold;
  line-height: 2;
  color: #ddd;
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

const MainProducts = () => {
	return (
		<div>
			<InfoBox>
				<Products>
					<Title>Doctors Made</Title>
					<br/>
					<TextBold>족부 전문의들이 직접</TextBold><br/>
					<TextBold>Foot & Ankle Health Care System</TextBold>
					<Text>을<br/>실현하기 위해 기획하고 제작한 제품</Text>
				</Products>
				<SeeMoreBtn address="products" align="left"/>
			</InfoBox>
		</div>
	);
}

export default MainProducts;