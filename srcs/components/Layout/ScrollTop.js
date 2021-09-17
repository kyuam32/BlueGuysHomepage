import React, {useEffect, useState} from "react";
import styled from "styled-components";

const Button = styled.div`
  z-index: 100;
  width: 8rem;
  height: 8rem;
  position: fixed;
  top: 80vh;
  left: 90vw;
  cursor: pointer;
  background: #1460a1;
  text-align: center;
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
	const [visible, setVisivle] = useState(false);
	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 200) {
			setVisivle(true);
		} else if (scrolled <= 200) {
			setVisivle(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top:0,
			behavior: "smooth"
		})
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisible);
		return () => {
			window.removeEventListener("scroll", toggleVisible)
		}
	})

	return (
		<Button onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
			<Img/>
			<Text>TOP</Text>
		</Button>
	);
}


export default ScrollTop;