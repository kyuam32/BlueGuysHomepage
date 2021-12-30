import styled from "styled-components";
import Link from "next/link";
import PlusButton from "./PlusButton";

const InfoBox = styled.div`
  width: 120rem;
  height: 49rem;
  display: flex;
`

const InfoProduct = styled.div`
  width: 60rem;
  height: 49rem;
  background-image: url("/img/products/${props => props.img}");
  background-size : 60rem 49.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const InfoDescript = styled.div`
  margin-top: 6.1rem;
  margin-left: 5.7rem;
`

const Title = styled.span`
  font-family: Noto Sans KR, serif;
  font-size: 7.2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.144rem;
  color: #fff;
`

const Descript1 = styled.span`
  font-family: Noto Sans KR, serif;
  font-size: 3.05rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`
const Descript2 = styled.span`
  font-weight: bold;
`

const ProductLink = () => {
	return (
		<InfoBox>
			<Link href="/products">
				<InfoProduct img="frame1.webp">
					<InfoDescript>
						<Title>Dr.PODI</Title>
						<br/>
						<Descript1>Make a
							<Descript2> Comfortable Step</Descript2>
						</Descript1>
					</InfoDescript>
					<PlusButton/>
				</InfoProduct>
			</Link>
			<Link href="/products">
				<InfoProduct img="frame2.webp">
					<InfoDescript>
						<Title>ShuFooter</Title>
						<br/>
						<Descript1>Make
							<Descript2> You Spurt</Descript2>
						</Descript1>
					</InfoDescript>
					<PlusButton/>
				</InfoProduct>
			</Link>
		</InfoBox>
	);
}

export default ProductLink;