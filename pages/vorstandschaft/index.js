import Image from "next/image";
import sanityClient from "../../client";

// utils
import { generateImgSrc } from './../../src/utils/generateImgSrc';

export default function ManagementMembers({ overviewPages, management }) {
    const membersOverview = overviewPages.filter(page => page.identifier === 'vorstand');

    return <>
        <h1 className="headline">{membersOverview[0].pageTitle}</h1>
        <section style={{ display: 'flex', gap: '2rem 2rem', flexDirection: 'row', flexWrap: 'wrap' }}>
            {management.sort((memberA, memberB) => memberA.order - memberB.order).map(member => {
                console.log({ member })
                const imgSrc = generateImgSrc(member.image.asset._ref);

                return <>
                    <div style={{ width: '300px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '2.5rem', top: '3.5rem', backgroundColor: 'black', fontWeight: '700', color: 'white', padding: '0.25rem' }}>comming soon</span>
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