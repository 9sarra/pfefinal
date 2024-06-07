import Section1 from "../components/home-1/Section1";

import Section12 from "../components/home-1/Section12";

import AppLayout from "../components/layout/AppLayout";

const IndexPage = () => {
  return (
    <main>
      <Section1 />

      <Section12 />
    </main>
  );
};

IndexPage.layout = AppLayout;

export default IndexPage;
