"use client"; // Marking this file as a Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation for Client-side routing

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the specified URL
    router.push("https://en.zenyer.cn/");
  }, [router]);

  return null; // No need to render anything
}
