import React from "react";
import { getItemBySlug } from "@/utils/actions/get-data";
import { PostProps } from "@/utils/actions/post.type";
import Hero from "@/components/hero";
import { Phone } from "lucide-react";
import Container from "@/components/container";
import styles from "./styles.module.scss";
import Image from "next/image";
export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { object }: PostProps = await getItemBySlug(slug);
  return (
    <>
      <Hero
        heading={object[0].title}
        buttonTitle={object[0].metadata.button.title}
        buttonUrl={object[0].metadata.button.url}
        bannerUrl={object[0].metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>
              {object[0].metadata.description.title}
            </h1>
            <p>{object[0].metadata.description.text}</p>

            {object[0].metadata.description.button_active && (
              <a
                className={styles.link}
                target="_blank"
                href={object[0].metadata.description.button_url as string}
              >
                {object[0].metadata.description.button_title}
              </a>
            )}
          </article>

          <div>
            <Image
              className={styles.imageAbout}
              alt={object[0].title}
              quality={100}
              fill={true}
              src={object[0].metadata.description.banner.url}
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
            />
          </div>
        </section>
      </Container>
    </>
  );
}
