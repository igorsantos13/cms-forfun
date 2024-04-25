import React from "react";
import { getItemBySlug } from "@/utils/actions/get-data";
import { PostProps } from "@/utils/actions/post.type";
import Hero from "@/components/hero";
import { Phone } from "lucide-react";
import Container from "@/components/container";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { objects }: PostProps = await getItemBySlug(slug).catch(() => {
      return {
        title: "Dev Motors - Sua oficina especializada!",
        description: "A melhor oficina de São Paulo, segundo nós mesmos =)",
      };
    });

    return {
      title: `DevMotors - ${objects[0].title}`,
      description: `${objects[0].metadata.description.text}`,
      keywords: ["devmotors", objects[0].title],
      openGraph: {
        title: `DevMotors - ${objects[0].title}`,
        images: [objects[0].metadata.banner?.url],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (err) {
    console.log(err);
    return {
      title: "Dev Motors - Sua oficina especializada!",
      description: "A melhor oficina de São Paulo, segundo nós mesmos =)",
    };
  }
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { objects }: PostProps = await getItemBySlug(slug);
  console.log(objects[0].metadata);
  return (
    <>
      <Hero
        heading={objects[0].title}
        buttonTitle={objects[0].metadata.button.title}
        buttonUrl={objects[0].metadata.button.url}
        bannerUrl={objects[0].metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>
              {objects[0].metadata.description.title}
            </h1>
            <p>{objects[0].metadata.description.text}</p>

            {objects[0].metadata.description.button_active && (
              <a
                className={styles.link}
                target="_blank"
                href={objects[0].metadata.description.button_url as string}
              >
                {objects[0].metadata.description.button_title}
              </a>
            )}
          </article>

          <div>
            <Image
              className={styles.imageAbout}
              alt={objects[0].title}
              quality={100}
              fill={true}
              src={objects[0].metadata.description.banner?.url}
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
            />
          </div>
        </section>
      </Container>
    </>
  );
}
