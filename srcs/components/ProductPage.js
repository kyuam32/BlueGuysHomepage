import Layout from "./Layout/Layout";
import SubBanner from "./SubMain/SubBanner";
import Products from "./product/Products";

const ProductPage = () => {
	return (
		<Layout>
			<SubBanner/>
			<Products/>
		</Layout>
	);
}

export default ProductPage;