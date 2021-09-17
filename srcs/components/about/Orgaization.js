import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 90rem;
`

const OrganImg = styled.div`
  width: 120rem;
  height: 75.2rem;
  margin: 20rem auto;
  background-image: url("/img/about/organization.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

`
const Organization = ()=>{
	return (
		<Wrapper>
			<OrganImg/>
		</Wrapper>
	);
}

export default Organization;