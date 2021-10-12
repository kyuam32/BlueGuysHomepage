import styled from "styled-components";
import Profile from "../about/Profile";
import Organization from "../about/Orgaization";
import Map from "../about/Map";

const Wrapper = styled.div`
	width: 150rem;
`

const SubMain = ({curr}) => {
	return (
		<Wrapper>
			{ curr.page === "Profile" &&<Profile/>}
			{ curr.page === "Organization" &&<Organization/>}
			{ curr.page === "Map" && <Map/>}
		</Wrapper>
	);
}

export default SubMain;