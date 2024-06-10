import { FC, useEffect, useState } from "react";
import Image from "next/image";

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

interface ApiResponse {
  data: NewsData[];
}

const NewsCompany: FC = () => {
  const [data, setData] = useState<NewsData[] | null>(null);
  const [loading, setLoading] = useState(true);

  const PUBLIC_API = process.env.NEXT_PUBLIC_URL;
  useEffect(() => {
    const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN;

    fetch(`${PUBLIC_API}/api/news-many?populate=*`, {
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
      .then((data: ApiResponse) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div id="News" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            News
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Berita yang terjadi
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <img src={`${PUBLIC_API}${post.attributes.cover.data.attributes.url}`} alt="cover" className="my-3 w-full" width={400} height={250}/>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.attributes.publishedAt} className="text-gray-500">
                  {post.attributes.publishedAt}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={`/news?id=${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.attributes.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.attributes.descriptions}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={`${PUBLIC_API}${post.attributes.avatar.data.attributes.url}`}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a>
                      <span className="absolute inset-0" />
                      {post.attributes.author}
                    </a>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCompany;
