import {useState} from "react";
import Layout from "./Layout/Layout";
import SubBanner from "./SubMain/SubBanner";
import SubMain from "./SubMain/SubMain";
import SubNavi from "./SubMain/SubNavi";


const AboutPage = () => {
	const list = [
		{
			page:"Profile",
			string:"(주)푸른청년",
		},
		{
			page:"Organization",
			string:"조직도"
		},
		{
			page:"Map",
			string:"오시는 길"
		},
		// {
		// 	key: 3,
		// 	page:"ProductDrPODI",
		// 	string:"Dr.PODI"
		// },
		// {
		// 	key: 4,
		// 	page:"ProductShuFooter",
		// 	string:"ShuFooter"
		// },
	]

	const [currPage, setCurrPage] = useState(0);

	return (
		<Layout>
			<SubBanner subtitle={list[currPage].string}/>
			<SubNavi list={list} curr={currPage} change={setCurrPage}/>
			<SubMain curr={list[currPage]}/>
		</Layout>
	);
}

export default AboutPage;