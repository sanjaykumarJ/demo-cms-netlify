const nodeTypeH2 = "heading-2";
const contentTypeUl = "unordered-list";

export function PrivacyPolicy({ privacyInfo }) {
  const getPolicyTerms = () => {
    return privacyInfo.policyterms;
  };
  const renderH2 = (content) => {
    return content?.map((content) => <h2>{content.value}</h2>);
  };
  const renderUl = (listContent) => {
    return (
      <ul>
        {listContent?.map((list) =>
          list?.content?.map((contentValue) => (
            <li>{contentValue.content[0].value}</li>
          ))
        )}
      </ul>
    );
  };
  return getPolicyTerms().content.map((contentVal) => {
    if (contentVal.nodeType === nodeTypeH2 && contentVal.content) {
      return renderH2(contentVal.content);
    }
    if (contentVal.nodeType === contentTypeUl && contentVal.content) {
      return renderUl(contentVal.content);
    }
  });
}
