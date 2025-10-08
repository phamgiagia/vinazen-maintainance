import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the specified URL
    router.push("https://en.zenyer.cn/");
  }, [router]);

  return null; // No need to render anything
}
