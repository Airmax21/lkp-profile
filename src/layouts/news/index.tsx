// components/NewsLayout.js
import { FC, useEffect, useState } from "react";
import { BlockRendererClient, NavbarComponent } from "@/components";
import { type BlocksContent } from "@strapi/blocks-react-renderer";

interface NewsData {
  id: number;
  attributes: {
    title: string;
    created: string;
    descriptions: string;
    author: string;
    avatar: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
    cover: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
    publishedAt: string;
  };
}

type Props = {
  id: any;
}

const NewsLayout: FC<Props> = ({ id }) => {
  const [data, setData] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);

  const PUBLIC_API = process.env.NEXT_PUBLIC_URL;

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN;
    fetch(`${PUBLIC_API}/api/news-many/${id}?populate=*`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const content: BlocksContent = data.data.attributes.news;

  return (
    <>
      <NavbarComponent />
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white text-center">{data.data.attributes.title}</h1>
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img className="mr-4 w-16 h-16 rounded-full" src={`${PUBLIC_API}${data.data.attributes.avatar.data.attributes.url}`} alt="Jese Leos" />
                  <div className="ml-6">
                    <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{data.data.attributes.author}</a>
                    <p className="text-base text-gray-500 dark:text-gray-400">{data.data.attributes.publishedAt}</p>
                  </div>
                </div>
              </address>
              <img src={PUBLIC_API + data.data.attributes.cover.data.attributes.url} className="w-full flex mx-auto my-6" />
            </header>
            <BlockRendererClient content={content} />
          </article>
        </div>
      </main>
    </>
  );
};

export default NewsLayout;
