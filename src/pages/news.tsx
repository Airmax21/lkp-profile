import { NewsLayout } from "@/layouts";
import { useRouter } from "next/router";

export default function News() {
  const router = useRouter();
  return (
    <>
      <NewsLayout id={router.query.id}/>
    </>
  );
}
