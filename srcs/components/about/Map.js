import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 20rem auto;
`
const MapContainer = styled.div`
  margin: auto;
  width: 120rem;
  height: 60rem;
`
const Map = ()=>{
	const API_KEY = process.env.NEXT_PUBLIC_API_CLIENT_ID
	let client;
	if (typeof window !== 'undefined') {
		client = require('react-naver-maps')
	}
	function NaverMapAPI() {
		const navermaps = window.naver.maps;
		return (
			<client.NaverMap
				mapDivId={"maps-getting-started-uncontrolled"}
				style={{
					width : "100%",
					height: "100%"
				}}
				defaultCenter={{lat: 36.632866, lng: 127.491833}}
				defaltzoom={13}
			>
				<client.Marker
					key={1}
					position={new navermaps.LatLng(36.632866, 127.491833)}
					animation={1}
					// onClick={() => {alert('주소 : 서울 강남구 선릉로 627');}}
				/>
			</client.NaverMap>
		);
	}

	return (
		<Wrapper>
			<MapContainer>
				<client.RenderAfterNavermapsLoaded
					ncpClientId={`${API_KEY}`}
					error={<p>Map Load Error</p>}
					loading={<p>Map Loading...</p>}
				>
					<NaverMapAPI/>
				</client.RenderAfterNavermapsLoaded>
			</MapContainer>
		</Wrapper>
	);
}

export default Map;