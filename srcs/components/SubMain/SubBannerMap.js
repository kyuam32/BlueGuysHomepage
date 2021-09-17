import styled from "styled-components";

const Wrapper = styled.div`
  background: #f4f6f9;

`

const Navi = styled.div`
  height: 6rem;
  margin-left: 15%;
`

const Text = styled.span`
  font-family: Noto Sans KR;
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