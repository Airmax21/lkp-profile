import { FC } from "react";
import Image from "next/image";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

type Props = {
  content: BlocksContent;
};

const BlockRendererClient: FC<Props> = ({ content }) => {
  if (!content) return null;
  return (
    <>
      <BlocksRenderer
        content={content}
        blocks={{
          image: ({ image }) => {
            return (
              <Image
                src={image.url}
                width={image.width}
                height={image.height}
                alt={image.alternativeText || ""}
              />
            );
          },
        }}
      ></BlocksRenderer>
    </>
  );
};

export default BlockRendererClient;
