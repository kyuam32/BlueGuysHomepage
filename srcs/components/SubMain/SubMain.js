import styled from "styled-components";
import Profile from "../about/Profile";
import Organization from "../about/Orgaization";
import Map from "../about/Map";
import ProductDrPODI from "../about/ProductDrPODI";
import ProductShuFooter from "../about/ProductShuFooter";

const Wrapper = styled.div`
`

const SubMain = ({curr}) => {
	return (
		<Wrapper>
			{ curr.page === "Profile" &&<Profile/>}
			{ curr.page === "Organization" &&<Organization/>}
			{ curr.page === "Map" &&<Map/>}
			{ curr.page === "ProductDrPODI" &&<Map/>}
			{ curr.page === "ProductShuFooter" &&<Map/>}
		</Wrapper>
	);
}

export default SubMain;