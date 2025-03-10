import { FC } from "react";
import { content } from "../content";

/** https://en.wikipedia.org/wiki/Schema.org */
const SeoSchemaMarkup: FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    ...content.meta.jsonld.home,
  };

  return (
    <script
      type={"application/ld+json"}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default SeoSchemaMarkup;
