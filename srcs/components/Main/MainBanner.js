import styled from "styled-components";

const Wrapper = styled.div`
	margin-top: 11rem;
`

const Title1 = styled.span`
  opacity: 0.96;
  font-family: GmarketSansMedium, serif;
  font-size: 5rem;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  color: rgba(15, 135, 199, 0.96);
`

const Title2 = styled(Title1)`
	font-family: GmarketSansBold, serif;
`

const Company1 = styled.span`
  opacity: 0.96;
  font-family: Noto Sans KR, serif;
  font-size: 6rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-overflow: unset;
  color: rgba(20, 96, 161, 0.96);
`
const Company2 = styled(Company1)`
  font-family: Noto Sans KR, serif;
  font-weight: 700;
`

const Dots = styled.div`
  width: 10rem;
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
`

const Dot = styled.div`
  background-color: ${props => props.color};
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
`

const MainBanner = () => {
	return (
		<Wrapper>
			<Title1>
				<Title2>Foot&Ankle</Title2><br/>
				Health Care<br/>
				Company<br/>
			</Title1>
			<Company1>주식회사 <Company2>푸른청년</Company2></Company1>
			<Dots>
				<Dot color={"#d4d4d4"}/>
				<Dot color={"#ebebeb"}/>
				<Dot color={"#ebebeb"}/>
			</Dots>
		</Wrapper>
	);
}

export default MainBanner;