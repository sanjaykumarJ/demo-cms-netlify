import Footer from "@components/Footer";
import { fetchEntries } from "utils/contentfulQuery";
import { Navbar } from "@components/navbar";
import { HeadComponent } from "@components/head";

export default function Home({ homePageContents = [] }) {
  return (
    <div className="container">
      <HeadComponent/>
      <Navbar />
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
