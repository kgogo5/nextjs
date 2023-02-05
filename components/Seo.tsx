import Head from "next/head";

export default function Seo({ title }: { title: string }) {
  return (
    <Head>
      <title>{title} | Mext Movies</title>
    </Head>
  );
}
