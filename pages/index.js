import sanityClient from "../client";
// The import order DOES MATTER here. If you change it, you'll get an error!
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

// components
import Link from "next/link";
import { HeroImageDesktop } from "../src/components/HeroImage/HeroImageDesktop";
import { HeroImageMobile } from "../src/components/HeroImage/HeroImageMobile";
import { PortableText } from "@portabletext/react";
import { generateImgSrc } from "../src/utils/generateImgSrc";
import breakpoint from './../src/utils/breakpoint';

export default function IndexPage({ homeData }) {
  const currentBreakpoint = breakpoint();

  return (
    <>
      <main>
        <h1 className="headline">{homeData[0].headline}</h1>
        {['isMobile', 'isTablet'].includes(currentBreakpoint) ? <HeroImageMobile /> : <HeroImageDesktop />}
        <section>
          {/* <PortableText value={[homeData[0].text1[0].children]} components={components} /> */}
          <p>
            {/* TODO auslagern in eigene funktion (utils) */}
            {homeData[0].text1.map(textblock => {
              return <>{textblock.children.map(textElement => {
                const openingTags = textElement.marks.length > 0 ? textElement.marks.map(mark => `<${mark}>`) : '';
                const textPart = textElement.text;
                const closingTags = textElement.marks.length > 0 ? textElement.marks.map(mark => `</${mark}>`) : '';
                const fullBlock = openingTags + textPart + closingTags;
                return <span dangerouslySetInnerHTML={{ __html: fullBlock }}></span>
              })} <br /></>
            })}
          </p>
          {homeData[0].heroImage &&
            <div className="flyer"><img src={generateImgSrc(homeData[0].heroImage.asset._ref)} /></div>
          }
          <br />
          <h2>{homeData[0].headline2}</h2>
          <p>{homeData[0].text2}</p>
        </section>
      </main>
    </>
  );
}


export async function getStaticProps() {
  const homeData = await sanityClient.fetch(`*[_type == "home"]`);

  return {
    props: {
      homeData,
    }
  };
}