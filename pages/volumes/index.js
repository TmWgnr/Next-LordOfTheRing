import Link from "next/link";
import { volumes } from "../../lib/data";
import { introduction } from "../../lib/data";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  function handleRandomVolume() {
    const handleVolume = getRandomElement(volumes);
    router.push(`/volumes/${handleVolume.slug}`);
  }
  return (
    <>
      <Head>
        <title>Lord of the Ring</title>
      </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}> {volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolume}>Random Volume</button>
    </>
  );
}
