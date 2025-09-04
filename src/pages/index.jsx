// nextjs page router 사용 시, pages 내의 index.** 를 가장 먼저 찾아감

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  //
  const router = useRouter();

  useEffect(() => {
    console.log(router.isReady);
    if (!router.isReady) return;
    router.replace("/login");
  }, [router.isReady]);

  return <div>Home</div>;
}
