import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Volume() {
  const router = useRouter();
  const { dynamicSlug } = router.query;

  const currentVolume = volumes.find((volume) => {
    return volume.slug === dynamicSlug;
  });

  if (!currentVolume) {
    return null;
  }

  const { slug, title, description, cover, books } = currentVolume;

  return (
    <>
      <Head>
        <title>{currentVolume.title}</title>
      </Head>
      <h1>{title}</h1>
      <p>{currentVolume.description}</p>
      <Image src={cover} alt={title} width="400" height="300" />
    </>
  );
}
