import Image from "next/image";
import styles from "./page.module.css";
import { Submenu } from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/actions/home.type";
import Hero from "@/components/hero";
import { Phone } from "lucide-react";
import Container from "@/components/container";
import Services from "@/components/home/services";
import Footer from "@/components/home/footer";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  return (
    <main>
      <Submenu />
      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <Services object={object} />
        <Footer object={object} />
      </Container>
    </main>
  );
}
