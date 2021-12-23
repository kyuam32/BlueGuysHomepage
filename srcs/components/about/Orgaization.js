import styled from "styled-components";

const Wrapper = styled.div`
  width: 150rem;
  display: flex;
  justify-content: center;
`

const OrganImg = styled.div`
  width: 120rem;
  height: 144rem;
  background-image: url("/img/about/organization.webp");
  background-size: cover;
`
const Organization = ()=>{
	return (
		<Wrapper>
			<OrganImg/>
		</Wrapper>
	);
}

export default Organization;