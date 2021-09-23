
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const LayoutFrame = styled.div`
  margin: 0 auto;
`

const Main = styled.div`
  padding-top: 12rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`

const Layout = (props) => {
	return (
		<LayoutFrame>
			<Header/>
			<Main>
				{props.children}
			</Main>
			<Footer/>
		</LayoutFrame>
	)
}

export default Layout;