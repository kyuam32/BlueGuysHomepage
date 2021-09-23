import styled from "styled-components";
import {useEffect, useState} from "react";

const Button = styled.div`
  width: 8rem;
  height: 8rem;
  min-width: 36px;
  min-height: 36px;
  position: relative;
  cursor: pointer;
  background: #1460a1;
  text-align: center;
  right: 2%;
  top: ${props => `${props.height * 0.9}px`}
`

const Img = styled.div`
  margin-top: 1.2rem;
  background-image: url("/img/arrow.png");
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
		<Button height={winHeight} onClick={scrollToTop}>
			<Img/>
			<Text>TOP</Text>
		</Button>
	);
}

export default ScrollTop;
