import styled from "styled-components";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'
// import {useEffect, useState} from "react";

const Wrapper = styled.div`
  width: 100%;
  margin: 20rem auto;
`
const MapContainer = styled.div`
  margin: auto;
  width: 120rem;
  height: 60rem;
`

function NaverMapAPI(){
	const navermaps = window.naver.maps;
	return (
		<NaverMap
			mapDivId={"maps-getting-started-uncontrolled"}
			style={{
				width : "100%",
				height: "100%"
			}}
			defaultCenter={{lat: 37.551229, lng: 126.988205}}
			defaltzoom={13}
		>
			<Marker
				key={1}
				position={new navermaps.LatLng(37.551229, 126.988205)}
				animation={1}
				// onClick={() => {alert('주소 : 서울 강남구 선릉로 627');}}
			/>
		</NaverMap>
	);
}

const Map = ()=>{
	const API_KEY = process.env.NEXT_PUBLIC_API_CLIENT_ID

	return (
		<Wrapper>
			<MapContainer>
				<RenderAfterNavermapsLoaded
					ncpClientId={`${API_KEY}`}
					error={<p>Map Load Error</p>}
					loading={<p>Map Loading...</p>}
				>
					<NaverMapAPI/>
				</RenderAfterNavermapsLoaded>
			</MapContainer>
		</Wrapper>
	);
}

export default Map;