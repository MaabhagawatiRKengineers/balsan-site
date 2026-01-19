import React from "react";
import { Helmet } from "react-helmet-async";

const SEO: React.FC = () => {
  return (
    <Helmet>
      <title>BALSAN | Business & Finance Solutions</title>
      <meta
        name="description"
        content="BALSAN provides accounting, taxation, GST, compliance, financial planning and business solutions for growing companies."
      />
      <meta
        name="keywords"
        content="Accounting, GST, Income Tax, Business Compliance, Finance Solutions, Business consultancy"
      />
    </Helmet>
  );
};
export default SEO;
