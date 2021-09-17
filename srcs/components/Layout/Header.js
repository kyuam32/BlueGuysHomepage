import Link from "next/link";
import styled from "styled-components";
import { withRouter } from 'next/router';

const NavBar = styled.div`
  width: 100%;
  min-width: 640px;
  height: 12rem;
  background-color: #ffffff;
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  width: 100%;
  margin-left: 15%;
  margin-right: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavMenu = styled.div`
  display: flex;
`

const NavButton = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  margin: 0;
  & + & {
    margin-left: 5rem;
  }

`

const NavText = styled.div`
  font-family: ${({status}) => status ? "GmarketSansBold" : "GmarketSansMedium"};
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  color: ${({status}) => status ? "rgba(38, 99, 160, 0.96)" : "rgba(189, 189, 189, 0.96)"};
  &:hover {
    color: rgba(38, 99, 160, 0.96);
    font-family: GmarketSansBold, serif;
  }
`

const Header = ({router}) => {
	return (
		<NavBar>
			<Wrapper>
				<NavButton>
					<Link href="/">
						<NavText status={router.pathname === "/"}>Home</NavText>
					</Link>
				</NavButton>
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
			</Wrapper>
		</NavBar>
	);
}

export default withRouter(Header);
