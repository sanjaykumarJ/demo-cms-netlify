import { PrivacyPolicy } from "@components/privacy-policy";
import { fetchEntries } from "utils/contentfulQuery";

export default function Privacy({ privacyInformations }) {
  return (
    <>
      <h1>Privacy Policy</h1>
      {privacyInformations.map((privacyContent) => (
        <PrivacyPolicy privacyInfo={privacyContent} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const privacyPageContentId = "privacypage";
  const res = await fetchEntries(privacyPageContentId);
  const privacyInformations = res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      privacyInformations,
    },
  };
}
