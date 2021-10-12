import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  width: 14rem;
  height: 3.6rem;
  margin-top: auto;
  margin-bottom: 5rem;
  margin-left: ${props => props.align === "right" ? "auto" : "7rem"};
  margin-right: ${props => props.align === "right" ? "7rem" : "auto"};
`

const Button = styled.div`
  width: 14rem;
  height: 3.6rem;
  background-image: url("/img/main/see-more.webp");
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`


const SeeMoreBtn = ({address, align}) => {
	return (
		<Wrapper align={align}>
			<Link href={`/${address}`}>
				<Button/>
			</Link>
		</Wrapper>
	);
}

export default SeeMoreBtn;