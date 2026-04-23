"use client";

import { useTranslations } from "next-intl";

import { Footer, Header } from "@/components/organisms";

export default function Home(): React.ReactElement {
  const tHome = useTranslations("home");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div>{tHome("title")}</div>

      <Footer />
    </div>
  );
}
