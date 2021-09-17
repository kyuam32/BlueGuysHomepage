import Head from 'next/head'
import GlobalStyle from "../srcs/styles/GlobalStyle";
import GlobalFonts from "../srcs/styles/fonts/fonts";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle/>
            <GlobalFonts/>
            <Head>
                <title>주식회사 푸른청년</title>
                <meta charSet="utf-8"/>
                <meta name="Description" content="일상과 업무환경 속의 건강관리를 실현 정형외과 의료 발전에 기여하는 사람들 우리는 푸른청년입니다"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
