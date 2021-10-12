import styled from "styled-components";

const Wrapper = styled.div`
  width: 150rem;
  height: 6rem;
  background: #f4f6f9;
  margin: auto;
  display: flex;
  justify-content: center;
`

const Navi = styled.div`
  width: 120rem;
`

const Text = styled.span`
  font-family: Noto Sans KR, serif;
  font-size: 1.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 6rem;
  letter-spacing: normal;
  color: rgba(47, 47, 47, 0.96);
  & + & {
	  margin-left: 8rem;
	}
`

const SubBannerMap = ({title, subtitle}) =>{
	return (
		<Wrapper>
			<Navi>
				<Text>{title}</Text>&nbsp;
				<Text>{subtitle ? "|" : ""}</Text>
				<Text>{subtitle ? subtitle : ""}</Text>
			</Navi>
		</Wrapper>
	);
}

export default SubBannerMap;