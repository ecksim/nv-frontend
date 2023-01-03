import Image from "next/image";
import sanityClient from "../../client";

export default function ManagementMembers({ overviewPages, management }) {
    const membersOverview = overviewPages.filter(page => page.identifier === 'vorstand');

    const generateImgSrc = (imgRef) => {
        const refWithoutImgPre = imgRef.slice(6);
        const lastIndex = refWithoutImgPre.lastIndexOf('-');
        const refForUrl = `${refWithoutImgPre.slice(0, lastIndex)}.${refWithoutImgPre.slice(lastIndex + 1)}`;
        const finalImgSrc = `https://cdn.sanity.io/images/hxf7pr1f/production/${refForUrl}`;
        return finalImgSrc;
    }

    return <>
        <h1 className="headline">{membersOverview[0].pageTitle}</h1>
        {management.map(member => {
            const imgSrc = generateImgSrc(member.image.asset._ref);

            return <>
                <Image alt={member.position} src={imgSrc} width={200} height={200} unoptimized={true} />
                <h3>{member.position}</h3>
                <h4>{member.name}</h4>
            </>
        })}
    </>;
}

export async function getStaticProps() {
    const overviewPages = await sanityClient.fetch(`*[_type == "overviewPage"]`);
    const management = await sanityClient.fetch(`*[_type == "managementMembers"]`);

    return {
        props: {
            overviewPages,
            management,
        }
    };
}