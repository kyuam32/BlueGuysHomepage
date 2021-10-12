import Link from "next/link";
import styled from "styled-components";
import { withRouter } from 'next/router';
import dynamic from "next/dynamic";

const ScrollTop = dynamic(
	() => {
		return import("./ScrollTop");
	},
	{ ssr: false }
);

const Wrapper = styled.div`
  width: 100%;
  height: 12rem;
  background-color: #ffffff;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
`

const NavBar = styled.div`
  width: 120rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`


const NavMenu = styled.div`
  display: flex;
`

const HomeButton = styled.div`
  width: auto;
  text-align: center;
`
const NavButton = styled(HomeButton)`
  & + & {
    margin-left: 5rem;
  }
`

const NavText = styled.span`
  font-family: GmarketSansMedium ,serif;
  font-size: 2rem;
  cursor: pointer;
  color: ${({status}) => status ? "rgba(38, 99, 160, 0.96)" : "rgba(189, 189, 189, 0.96)"};
  &:hover {
    color: rgba(38, 99, 160, 0.96);
  }
`

const Header = ({router}) => {
	return (
		<Wrapper>
			<NavBar>
				<HomeButton>
					<Link href="/">
						<NavText status={router.pathname === "/"}>Home</NavText>
					</Link>
				</HomeButton>
				<NavMenu>
					<NavButton>
						<Link href="/about">
							<NavText status={router.pathname === "/about"}>About Us</NavText>
						</Link>
					</NavButton>
					<NavButton>
						<Link href="/description">
							<NavText status={router.pathname === "/description"}>바른의사 연구소</NavText>
						</Link>
					</NavButton>
					<NavButton>
						<Link href="/products">
							<NavText status={router.pathname === "/products"}>Doctors Made</NavText>
						</Link>
					</NavButton>
					<NavButton>
						<Link href="/contact">
							<NavText status={router.pathname === "/contact"}>Contact Us</NavText>
						</Link>
					</NavButton>
				</NavMenu>
			</NavBar>
			<ScrollTop/>
		</Wrapper>
	);
}

export default withRouter(Header);
