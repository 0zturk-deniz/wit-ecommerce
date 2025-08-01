import Header from "../layout/Header";
import PageContent from "../layout/PageContent";
import CategoryBanners from "../components/CategoryBanner";

const ShopPage = () => {
  return (
    <div>
      <Header />
      <section>
        <PageContent>
          <CategoryBanners />
        </PageContent>
      </section>
    </div>
  );
};

export default ShopPage;
