import styled from "styled-components";
import Profile from "../about/Profile";
import Organization from "../about/Orgaization";
import ProductDrPODI from "../about/ProductDrPODI";
import ProductShuFooter from "../about/ProductShuFooter";
import Map from "../about/Map";

const Wrapper = styled.div`
`

const SubMain = ({curr}) => {
	return (
		<Wrapper>
			{ curr.page === "Profile" &&<Profile/>}
			{ curr.page === "Organization" &&<Organization/>}
			{ curr.page === "Map" && <Map/>}
			{ curr.page === "ProductDrPODI" &&<ProductDrPODI/>}
			{ curr.page === "ProductShuFooter" &&<ProductShuFooter/>}
		</Wrapper>
	);
}

export default SubMain;