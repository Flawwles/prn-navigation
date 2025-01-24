import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>PRN Navigation demo</title>
        <meta name="title" content="PRN Navigation demo" />
        <meta name="description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prn-navigation.vercel.app/" />
        <meta property="og:title" content="PRN Navigation demo" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://prn-navigation.vercel.app/cover.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://prn-navigation.vercel.app/" />
        <meta property="twitter:title" content="PRN Navigation demo" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="https://prn-navigation.vercel.app/cover.png" />
      </Head>
      <div className="flex flex-1 flex-col gap-4 p-8">
        <h1 className="text-2xl font-bold">Dashboard here</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-muted/50 p-4 aspect-square" />
          <div className="rounded-xl bg-muted/50 p-4 aspect-square" />
          <div className="rounded-xl bg-muted/50 p-4 aspect-square" />
          <div className="rounded-xl bg-muted/50 p-4 aspect-square" />
        </div>
      </div>
    </>
  );
}

