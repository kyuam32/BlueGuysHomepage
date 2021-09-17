import MainPage from "../srcs/components/MainPage";
import React from "react";
import { useRouter} from "next/router";

export default function Home() {
    const router = useRouter();
    const [pageLoading, setPageLoading] = React.useState(false);
    React.useEffect(() => {
        const handleStart = () => {
            setPageLoading(true);
        };
        const handleComplete = () => {
            setPageLoading(false);
        };
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
    }, [router]);
    return (
        <>
            {pageLoading ? (<div>Loading...</div>) : <MainPage/>}
        </>
    );
}
