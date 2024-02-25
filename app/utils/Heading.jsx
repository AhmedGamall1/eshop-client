//FOR SEO
const Heading = ({ title, keywords, description }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, intial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </>
  );
};

export default Heading;
