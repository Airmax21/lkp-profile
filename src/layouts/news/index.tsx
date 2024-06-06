import { FC, useEffect, useState } from "react";
import { BlockRendererClient, NavbarComponent } from "@/components";
import { type BlocksContent } from "@strapi/blocks-react-renderer";

interface NewsData {
  data: {
    id: number;
    attributes: {
      title: string;
      news: BlocksContent;
      created: string;
      descriptions: string;
      cover: {
        data: {
          attributes: {
            url: string;
          }
        }
      }
    };
  };
}

const NewsLayout: FC<any> = () => {
  const [data, setData] = useState<NewsData | null>(null);

  useEffect(() => {
    const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN;
    fetch("http://127.0.0.1:1337/api/news-many/1?populate=*", {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  } else {
    const content: BlocksContent = data.data.attributes.news;
    return (
      <>
        <NavbarComponent/>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos"/>
                      <div className="ml-6">
                          <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                          <p className="text-base text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                          <p className="text-base text-gray-500 dark:text-gray-400">Feb. 8, 2022</p>
                      </div>
                  </div>
              </address>
              <img src={'http://127.0.0.1:1337'+data.data.attributes.cover.data.attributes.url} className="w-full flex mx-auto my-6"  />
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{data.data.attributes.title}</h1>
          </header>
              <BlockRendererClient content={content}/>
            </article>
          </div>
        </main>
      </>
    );
  }
};

export default NewsLayout;
