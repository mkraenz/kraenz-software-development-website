import { FC } from "react";
import { content } from "../content";

/** https://en.wikipedia.org/wiki/Schema.org */
const SeoSchemaMarkup: FC = () => {
  const homeJsonld = content.meta.jsonld.home;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": homeJsonld.type,
    name: homeJsonld.name,
    image: homeJsonld.image,
    description: homeJsonld.description,
  };

  return (
    <script
      type={"application/ld+json"}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default SeoSchemaMarkup;
