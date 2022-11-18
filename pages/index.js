import sanityClient from "../client";

// components
import HeroImage from "../src/components/HeroImage/HeroImage";
import Navi from "../src/components/Navi/Navi";

export default function IndexPage({ animals, navigation }) {
  return (
    <>
      <Navi naviItems={navigation} />
      <main>
        <HeroImage></HeroImage>
      </main>
    </>
  );
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
