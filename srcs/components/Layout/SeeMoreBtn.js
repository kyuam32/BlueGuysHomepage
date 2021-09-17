import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  width: 14rem;
  height: 3.6rem;
  margin-top: auto;
  margin-right: 7rem;
  margin-bottom: 7rem;
`

const Button = styled.div`
  width: 14rem;
  height: 3.6rem;
  background-image: url("/img/main/see-more.png");
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`


const SeeMoreBtn = ({address}) => {
	return (
		<Wrapper>
			<Link href={`/${address}`}>
				<Button/>
			</Link>
		</Wrapper>
	);
}

export default SeeMoreBtn;