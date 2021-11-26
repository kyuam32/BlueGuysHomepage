import styled from "styled-components";
import {useEffect, useState} from "react";


const Wrapper = styled.div`
  width: 120rem;
  position: absolute;
  display: flex;
  z-index: -99;
  top: ${props => `${props.height * 0.9}px`}
`
const Button = styled.div`
  width: 8rem;
  height: 8rem;
  min-width: 36px;
  min-height: 36px;
  margin-left: auto;
  cursor: pointer;
  background: #1460a1;
  text-align: center;
  z-index: 99;
`

const Img = styled.div`
  margin-top: 1.2rem;
  background-image: url("/img/arrow.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 1.2rem;
`

const Text = styled.span`
  display: block;
  font-size: 2.5rem;
  font-family: Noto Sans KR, serif;
  font-weight: 200;
  line-height: 5rem;
  letter-spacing: 0.15rem;
  color: #fff;
  
`

const ScrollTop = ()=>{
	const [winHeight, setWinHeight] = useState(getWindowHeight())
	function getWindowHeight() {
		const { innerHeight: winHeight } = window;
		return winHeight;
	}
	function handleResize() {
		setWinHeight(getWindowHeight());
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			 window.removeEventListener('resize', handleResize);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top:0,
			behavior: "smooth"
		})
	};

	return (
		<Wrapper height={winHeight}>
			<Button onClick={scrollToTop}>
				<Img/>
				<Text>TOP</Text>
			</Button>
		</Wrapper>
	);
}

export default ScrollTop;
