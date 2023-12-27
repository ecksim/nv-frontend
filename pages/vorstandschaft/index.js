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
        <section style={{ display: 'flex', gap: '2rem 2rem', flexDirection: 'row', flexWrap: 'wrap' }}>
            {management.sort((memberA, memberB) => memberA.order - memberB.order).map(member => {
                console.log({ member })
                const imgSrc = generateImgSrc(member.image.asset._ref);

                return <>
                    <div style={{ width: '300px' }}>
                        <Image alt={member.position} src={imgSrc} width={200} height={200} unoptimized={true} style={{ objectFit: 'cover' }} />
                        <div style={{
                            fontSize: '1.25rem', fontWeight: 700, margin: '0.5rem auto 0.25rem'
                        }}>{member.position}</div>
                        <div>{member.name}</div>
                    </div>
                </>
            })}
        </section>
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