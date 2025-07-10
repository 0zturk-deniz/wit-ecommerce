import BestsellerProductCard from "../components/BestsellerProductCard";
import Card from "../components/Card";
import Carrousel from "../components/Carrousel";
import CtaSection from "../components/CtaSection";
import EditorsPick from "../components/EditorsPick";
import { bestSellerProductData } from "../data/bestsellerProductData";
import { cardData } from "../data/cardData";
import { heroSlides, promoSlides } from "../data/slidesData";
import PageContent from "../layout/PageContent";

const HomePage = () => {
  return (
    <div>
      <section>
        <Carrousel slides={heroSlides} />
      </section>
      <section className="bg-[#FAFAFA] w-full ">
        <PageContent>
          <EditorsPick />
        </PageContent>
      </section>
      <section>
        <PageContent>
          <div className="flex flex-col items-center py-12 gap-y-4">
            <p className="text-[#737373] font-medium">Featured Products</p>
            <h2 className="text-xl font-bold">BESTSELLER PRODUCTS</h2>
            <p className="text-[#737373] font-medium text-xs">
              Problems trying to resolve the conflict between
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-2 gap-6">
            {bestSellerProductData.map((card, index) => (
              <BestsellerProductCard key={index} {...card} />
            ))}
          </div>
        </PageContent>
      </section>
      <section>
        <Carrousel slides={promoSlides} />
      </section>
      <section>
        <CtaSection />
      </section>
      <section>
        <PageContent>
          <div className="py-20">
            <div className="flex flex-col items-center py-12 gap-y-4">
              <p className="text-[#23A6F0] text-xs font-semibold">
                Practice Advice
              </p>
              <h2 className="text-4xl font-semibold">Featured Posts</h2>
              <p className="text-[#737373] text-xs font-extralight tracking-wider max-w-[50ch] text-center">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            <div className="flex gap-2 pt-4">
              {cardData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </div>
        </PageContent>
      </section>
    </div>
  );
};

export default HomePage;
