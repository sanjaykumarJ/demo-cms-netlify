import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { fetchEntries } from "utils/contentfulQuery";

export default function Home({ homePageContents }) {
  return (
    <div className="container">
      <Head>
        <title>Next Contentful App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title={"Contentful Next app"} />
      <ul>
        <li>
          <a href={"/"}>Home</a>
        </li>
        <li>
          <a href={"/contact"}>Contact</a>
        </li>
        <li>
          <a href={"/privacy"}>Privacy Policy</a>
        </li>
      </ul>
      <main>
        {homePageContents.map((content) => {
          return (
            <>
              <p className="text-overlay">
                {content?.richText?.content[0]?.content[0]?.value}
              </p>
              <img
                className={"home-page-img"}
                src={`https:${content?.backgroundImage?.fields?.file.url}`}
              />
            </>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const homePageContentTypeId = "homePageTitle";
  const res = await fetchEntries(homePageContentTypeId);
  const homePageContents = res
    .map((p) => {
      return p.fields;
    })
    .filter((content) => content !== undefined);

  return {
    props: {
      homePageContents,
    },
  };
}
