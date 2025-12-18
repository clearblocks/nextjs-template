"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";

import {
  ContactSection,
  Footer,
  Header,
  HeroSection,
  ImageGallery,
  MethodSection,
  PricingSection,
  SectionHeader,
  ServiceCard,
  TextSection,
  WhatsAppCTA,
} from "@/components/organisms";

/*
TODO:
- Bigger logo
- Smaller/less images 
- wider priceTables
*/

export default function Home(): React.ReactElement {
  const tServices = useTranslations("services");
  const tAbout = useTranslations("about");
  const tMethod = useTranslations("method");
  const tContact = useTranslations("contact");
  const tPricing = useTranslations("pricing");

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <HeroSection />

      {/* Services */}
      <section id="services" className="py-6 px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center max-w-7xl mx-auto">
        <ServiceCard
          title={tServices("washing.title")}
          iconSrc="/images/icon-washing.png"
          iconAlt={tServices("washing.title")}
          iconWidth={42}
          iconHeight={46}
          description={tServices("washing.description")}
          buttonLabel={tServices("washing.buttonLabel")}
          onClick={() => {
            scrollToSection("method");
          }}
        />
        <ServiceCard
          title={tServices("ironing.title")}
          iconSrc="/images/icon-ironing.png"
          iconAlt={tServices("ironing.title")}
          iconWidth={57}
          iconHeight={57}
          description={tServices("ironing.description")}
          buttonLabel={tServices("ironing.buttonLabel")}
          onClick={() => {
            scrollToSection("method");
          }}
        />
        <ServiceCard
          title={tServices("contact.title")}
          iconSrc="/images/icon-contact.png"
          iconAlt={tServices("contact.title")}
          iconWidth={44}
          iconHeight={44}
          description={tServices("contact.description")}
          buttonLabel={tServices("contact.buttonLabel")}
          onClick={() => {
            scrollToSection("contact");
          }}
        />
        <ServiceCard
          title={tServices("pricing.title")}
          iconSrc="/images/icon-pricing.png"
          iconAlt={tServices("pricing.title")}
          iconWidth={53}
          iconHeight={53}
          description={tServices("pricing.description")}
          buttonLabel={tServices("pricing.buttonLabel")}
          onClick={() => {
            scrollToSection("pricing");
          }}
        />
      </section>

      <WhatsAppCTA />

      <SectionHeader title={tAbout("header")} id="about" hasShadow />

      {/* Mobile: stacked layout */}
      <div className="md:hidden">
        <TextSection
          paragraphs={[
            tAbout("intro1"),
            tAbout("intro2"),
            tAbout("intro3"),
            tAbout("intro4"),
            tAbout("intro5"),
            tAbout("intro6"),
          ]}
        />

        <ImageGallery
          className="px-5"
          images={[
            { src: "/images/ironing-board-pink.jpg", alt: "Service", aspectRatio: "aspect-[400/203]" },
            { src: "/images/image-2.png", alt: "Service", aspectRatio: "aspect-[400/281]" },
          ]}
        />

        <SectionHeader title={tMethod("header")} id="method" />

        <MethodSection />
      </div>

      {/* Desktop: two-column layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 px-8 lg:px-16 py-6 max-w-7xl mx-auto">
        {/* Left column: intro + images */}
        <div className="flex flex-col gap-6">
          <TextSection
            className="px-0 py-0"
            paragraphs={[
              tAbout("intro1"),
              tAbout("intro2"),
              tAbout("intro3"),
              tAbout("intro4"),
              tAbout("intro5"),
              tAbout("intro6"),
            ]}
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[400/281]">
              <Image src="/images/ironing-board-pink.jpg" alt="Service" fill className="object-cover rounded-lg" />
            </div>
            <div className="relative aspect-[400/281]">
              <Image src="/images/image-2.png" alt="Service" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>

        {/* Right column: method */}
        <div id="method" className="flex flex-col gap-4">
          <h2 className="font-family-sans font-bold text-2xl text-gray-800">{tMethod("header")}</h2>
          <MethodSection />
        </div>
      </div>

      <ImageGallery
        images={[
          { src: "/images/woman-steam-shirt.jpg", alt: "Service", width: 800, height: 400 },
          { src: "/images/image-4.png", alt: "Service", width: 800, height: 400 },
          { src: "/images/image-5.png", alt: "Service", width: 800, height: 400 },
        ]}
      />

      <SectionHeader title={tContact("header")} id="contact" />

      <ContactSection />

      <ImageGallery
        images={[
          { src: "/images/image-6.png", alt: "Service", width: 800, height: 400 },
          { src: "/images/steamer-pink-shirt-cropped.jpg", alt: "Service", width: 800, height: 400 },
        ]}
      />

      <SectionHeader
        title={tPricing("header")}
        subtitle={tPricing("paymentNote")}
        id="pricing"
        height="h-[200px]"
        className="px-5 sm:px-20 py-11 gap-4"
      />

      <PricingSection />

      <ImageGallery
        images={[
          { src: "/images/image-8.png", alt: "Service", width: 800, height: 400 },
          { src: "/images/image-9.png", alt: "Service", width: 800, height: 400 },
        ]}
      />

      <Footer />
    </div>
  );
}
