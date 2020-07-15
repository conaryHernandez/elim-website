import Head from 'next/head';

const Meta = (props) => (
  <Head>
    <title key="title">{props.seoData.title}</title>

    <meta
      key="description"
      name="description"
      content={props.seoData.description}
    />
    <meta key="og:type" name="og:type" content={props.seoData.openGraph.type} />
    <meta
      key="og:title"
      name="og:title"
      content={props.seoData.openGraph.title}
    />
    <meta
      key="og:description"
      name="og:description"
      content={props.seoData.openGraph.description}
    />
    <meta key="og:url" name="og:url" content={props.seoData.openGraph.url} />
    <meta
      key="og:image"
      name="og:image"
      content={props.seoData.openGraph.image}
    />
  </Head>
);

export default Meta;
