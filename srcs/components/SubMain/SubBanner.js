import styled from "styled-components";
import { withRouter } from 'next/router';
import UrlMap from "../function/UrlMap";
import SubBannerMap from "./SubBannerMap";

const SubB = styled.div`
  height: 23rem;
  background: #e0e3ea;
  display: flex;
  justify-content: center;
`

const Banner = styled.div`
  height: 23rem;
  width: 150rem;
  mix-blend-mode: multiply;
  background-image: url("/img/subbanner${(props) => props.path}.png");
  background-repeat: no-repeat;
  background-position: center;
`

const Text = styled.span`
  position: absolute;
  text-align: center;
  font-family: GmarketSansBold, Serif;
  font-size: 3.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 23rem;
  letter-spacing: normal;
  color: #fff;
`

const SubBanner = ({router, subtitle}) => {
	const title = UrlMap(router.pathname);
	return (
		<div>
			<SubB>
				<Banner path={router.pathname}>
				</Banner>
				<Text>{title}</Text>
			</SubB>
			<SubBannerMap title={title} subtitle={subtitle}/>
		</div>
	);
}

export default withRouter(SubBanner);