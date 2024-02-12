import Image from "next/image";
import sanityClient from "../../client";

// utils
import { generateImgSrc } from './../../src/utils/generateImgSrc';

export default function ManagementMembers({ overviewPages, management }) {
    const membersOverview = overviewPages.filter(page => page.identifier === 'vorstand');

    return <>
        <h1 className="headline">{membersOverview[0].pageTitle}</h1>
        <section style={{ display: 'flex', gap: '2rem 2rem', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {management.sort((memberA, memberB) => memberA.order - memberB.order).map(member => {
                console.log({ member })
                const imgSrc = generateImgSrc(member.image.asset._ref);

                return <>
                    <div style={{ position: 'relative' }}>
                        <Image alt={member.position} src={imgSrc} width={150} height={200} unoptimized={true} style={{ objectFit: 'cover' }} />
                        <div style={{
                            fontSize: '1.25rem', fontWeight: 700, margin: '0.5rem auto 0.25rem'
                        }}>{member.position}</div>
                        <div>{member.name}</div>
                    </div>
                </>
            })}
        </section >
        <br />
        <hr />
        <br />

        <h2>Beisitzer:</h2>
        <ul >
            <li style={{ fontWeight: 500, margin: 0 }}>
                Steffen Hornstein
            </li>
            <li style={{ fontWeight: 500, margin: 0 }}>
                Ronny Preuß
            </li>
            <li style={{ fontWeight: 500, margin: 0 }}>
                Steffanie Rinderle
            </li>
            <li style={{ fontWeight: 500, margin: 0 }}>
                Manuel Nadler
            </li>
            <li style={{ fontWeight: 500, margin: 0 }}>
                Bastian Preuß
            </li>
            <li style={{ fontWeight: 500, margin: 0 }}>
                Saskia Baiker
            </li>
            <li style={{ fontWeight: 500, margin: 0 }}>
                Simon Eilmus
            </li>
        </ul>
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