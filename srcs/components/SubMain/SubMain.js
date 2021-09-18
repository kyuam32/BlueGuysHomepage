import styled from "styled-components";
import Profile from "../about/Profile";
import Organization from "../about/Orgaization";
import ProductDrPODI from "../about/ProductDrPODI";
import ProductShuFooter from "../about/ProductShuFooter";

import dynamic from 'next/dynamic'


const MapComponent = dynamic(
	import('../about/Map'), {
		loading: () => (<div>Map Loading</div>),
		ssr: false,
	},
);


const Wrapper = styled.div`
`

const SubMain = ({curr}) => {
	return (
		<Wrapper>
			{ curr.page === "Profile" &&<Profile/>}
			{ curr.page === "Organization" &&<Organization/>}
			{ curr.page === "Map" &&<MapComponent/>}
			{ curr.page === "ProductDrPODI" &&<ProductDrPODI/>}
			{ curr.page === "ProductShuFooter" &&<ProductShuFooter/>}
		</Wrapper>
	);
}

export default SubMain;