import { createClient } from "next-sanity";

// components
import HeroImage from "../src/components/heroImage/HeroImage";

export default function IndexPage({ animals }) {
  return (
    <>
      <header>
        <h1>Narrenverein Bodemännle</h1>
      </header>

      <main>
        <HeroImage></HeroImage>
        <h2>animals</h2>
        {animals.length > 0 && (
          <ul>
            {animals.map((animal) => (
              <li key={animal._id}>{animal?.name}</li>
            ))}
          </ul>
        )}
        {!animals.length > 0 && <p>No animals to show</p>}
        {animals.length > 0 && (
          <div>
            <h1>data</h1>
            <pre>{JSON.stringify(animals, null, 2)}</pre>
          </div>
        )}
        {!animals.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )}
      </main>
    </>
  );
}

const client = createClient({
  projectId: "hxf7pr1f",
  dataset: "production",
  apiVersion: "2022-11-13",
  useCdn: false
});

export async function getStaticProps() {
  const animals = await client.fetch(`*[_type == "animal"]`);

  return {
    props: {
      animals
    }
  };
}
