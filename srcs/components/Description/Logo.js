import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`

const LogoImg = styled.div`
  width: 26.9rem;
  height: 17.6rem;
  margin: 0 auto 4rem;
  background-image: url("/img/description/logo.png");
  background-size: cover;
  background-repeat: no-repeat;
`

const TextBase = styled.span`
  font-family: Noto Sans KR, Serif	;
  font-size: 2.4rem;
  font-weight: lighter;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #434343;
`
const HighLight1 = styled.span`
  font-weight: bold;
`
const HighLight2 = styled.span`
  font-weight: bold;
  color: #0d6fb8;
`


const Logo = ()=>{
	return (
		<Wrapper>
			<LogoImg/>
			<TextBase>
				㈜푸른청년의 <HighLight1>바른의사연구소에서는</HighLight1><br/>
				<HighLight2>Foot & ankle Health care system</HighLight2>을  만들어 나갑니다
			</TextBase>
		</Wrapper>
	);
}

export default Logo;