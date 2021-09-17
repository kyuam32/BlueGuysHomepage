import Layout from "./Layout/Layout";
import MainContainer from "./Main/MainContainer";
import ScrollTop from "./Layout/ScrollTop";

const MainPage = () => {
	return (
		<>
			<Layout>
				<MainContainer/>
				<ScrollTop/>
			</Layout>
		</>
	);
}

export default MainPage;