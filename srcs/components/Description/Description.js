import styled from "styled-components";
import Logo from "./Logo";
import Content1 from "./content1";
import Content2 from "./content2";
import Content3 from "./content3";
const Wrapper = styled.div`
  width: 120rem;
  margin: 8rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const UnderBar = styled.div`
  margin-top: 5rem;
  margin-bottom: 10rem;
  width: 60rem;
  border: solid 0.2rem #d7d7d7;
`

const Description = () => {
	return (
		<Wrapper>
			<Logo/>
			<UnderBar/>
			<Content1/>
			<Content2/>
			<Content3/>
		</Wrapper>
	);
}

export default Description;