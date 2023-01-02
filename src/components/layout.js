import sanityClient from "../../client";
import useSWR from "swr";
import groq from "groq";

import Navi from "./Navi/Navi";
// import Footer from './footer'

export default function Layout({ children }) {
    const { data: navData, error } = useSWR(groq`*[_type == "NaviEntry"]`, query =>
        sanityClient.fetch(query)
    );

    // TODO error handling + loading
    if (error) return <div>Failed</div>
    if (!navData) return <div>Loading...</div>;

    return (
        <>
            <Navi naviItems={navData} />
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    )
}

export async function getStaticProps() {
    const animals = await sanityClient.fetch(`*[_type == "animal"]`);
    const navigation = await sanityClient.fetch(`*[_type == "NaviEntry"]`);

    return {
        props: {
            animals,
            navigation,
        }
    };
}

