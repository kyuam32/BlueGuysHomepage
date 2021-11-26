import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 42.5rem;
  display: flex;
  justify-content: center;
  background-color: #ececec;
`
const Box = styled.div`
  width: 120rem;
  margin-top: 8.5rem;
`
const FooterText = styled.p`
  & + & {
    margin-top: 2.5rem;
  }
  font-family: Noto Sans KR, serif;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: 0.051rem;
  text-align: left;
  color: rgba(84, 84, 84, 0.96);
`

const Footer = () => {
	return (
		<Wrapper>
			<Box>
				<FooterText>
					<span>(주)푸른청년</span>
				</FooterText>
				<FooterText>
					<span>대표이사 : 박은수</span>
					<br/>
					<span>주소 : 서울 강남구 선릉로 627 FAX : 02-123-4566 </span>
					<span>E-mail: asd@mdkjwq.com</span><br/>
					<span>Copyright 2021 ALL Rights Reserved 푸른청년</span>
				</FooterText>
			</Box>
		</Wrapper>
	);
}
export default Footer;