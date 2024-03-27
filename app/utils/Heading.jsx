//FOR SEO
const Heading = ({ title, keywords, description }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </>
  );
};

export default Heading;
