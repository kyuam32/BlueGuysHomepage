import styled from "styled-components";
import Link from "next/link";

const InfoBox = styled.div`
  width: 112rem;
  height: 48rem;
  box-shadow: 6px 6px 12px 0 rgba(0,0,0,0.4);
  display: flex;
`

const InfoProduct = styled.div`
  width: 56rem;
  height: 48rem;
  background-image: url("/img/main/${props => props.img}");
  background-size : 56rem 48rem;
  cursor: pointer;
`

const InfoDescript = styled.div`
  margin-top: 6.1rem;
  margin-left: 5.7rem;
`

const Title = styled.span`
  font-family: Noto Sans KR, Serif;
  font-size: 7.2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.144rem;
  color: #fff;
`

const Descript1 = styled.span`
  font-family: Noto Sans KR, Serif;
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

const MainProduct = () => {
	return (
		<InfoBox>
			<Link href="/products">
				<InfoProduct img="frame1.png">
					<InfoDescript>
						<Title>Dr.FODI</Title>
						<br/>
						<Descript1>Make a
							<Descript2> Comfortable Step</Descript2>
						</Descript1>
					</InfoDescript>
				</InfoProduct>
			</Link>
			<Link href="/products">
				<InfoProduct img="frame2.png">
					<InfoDescript>
						<Title>ShuFooter</Title>
						<br/>
						<Descript1>Make
							<Descript2> You Spurt</Descript2>
						</Descript1>
					</InfoDescript>
				</InfoProduct>
			</Link>
		</InfoBox>
	);
}

export default MainProduct;