import BestsellerProducts from "../components/BestsellerProducts";
import Carrousel from "../components/Carrousel";
import EditorsPick from "../components/EditorsPick";
import PageContent from "../layout/PageContent";

const HomePage = () => {
  return (
    <div>
      <Carrousel />
      <section className="bg-[#FAFAFA] w-full ">
        <PageContent>
          <EditorsPick />
        </PageContent>
      </section>
      <PageContent>
        <BestsellerProducts />
      </PageContent>
      <Carrousel />
    </div>
  );
};

export default HomePage;
