import styled from "styled-components";
import ProductLink from "./ProductLink";

const Wrapper = styled.div`
  width: 150rem;
  height: 60rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Products = ()=> {
	return (
		<Wrapper>
			<ProductLink/>
		</Wrapper>
	)
}

export default Products;