import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 8rem;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  top: 45rem;
`

const Button = styled.div`
  width: 25rem;
  height: 5rem;
  border: solid 1px #366ba4;
  opacity: 0.96;
  font-family: Noto Sans KR;
  font-size: 1.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 5rem;
  letter-spacing: normal;
  text-align: center;
  background-color: ${ props => props.idx === props.curr ? "#1460a1" : "#fff"};
  color: ${ props => props.idx === props.curr ? "rgba(255, 255, 255, 0.96)" : "rgba(47, 47, 47, 0.96)"};
`

function MakeButton(list, currPage) {
	return (
		<Button curr={currPage}>{list.string}</Button>
	)
}

const SubNavi = ({list, curr, change}) => {
	return (
		<Wrapper>
			{list.map((page, index) =>
				<Button
					key={index}
					idx={index}
					curr={curr}
					onClick={()=> change(index)}
				>
					{page.string}
				</Button>)}
		</Wrapper>
	);
};

export default SubNavi;