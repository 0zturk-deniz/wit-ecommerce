import PageContent from "../layout/PageContent";
import CategoryBanners from "../components/CategoryBanner";
import { categoryBannerData } from "../data/categoryBannerData";
import BreadCrumbs from "../components/BreadCrumbs";
import ShopToolbar from "../components/ShopToolbar";
import BestsellerProductCard from "../components/BestsellerProductCard";
import { bestSellerProductData } from "../data/bestsellerProductData";
import Pagination from "../components/Pagination";

const ShopPage = () => {
  return (
    <div>
      <section className="bg-[#FAFAFA] py-8">
        <PageContent>
          <div className="flex justify-between items-center content-center mb-8">
            <h2 className="text-xl font-semibold">Shop</h2>
            <BreadCrumbs />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categoryBannerData.map((item, index) => (
              <CategoryBanners
                key={index}
                image={item.image}
                title={item.title}
                item_count={item.item_count}
              />
            ))}
          </div>
        </PageContent>
      </section>
      <PageContent>
        <ShopToolbar />
      </PageContent>
      <PageContent>
        <div className="grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-2 gap-6">
          {bestSellerProductData.map((card, index) => (
            <BestsellerProductCard key={index} {...card} />
          ))}
        </div>
      </PageContent>
      <PageContent>
        <Pagination />
      </PageContent>
    </div>
  );
};

export default ShopPage;
