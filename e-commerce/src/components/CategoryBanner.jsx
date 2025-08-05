const CategoryBanners = ({ image, title, item_count }) => {
  return (
    <div className="relative aspect-square overflow-hidden group cursor-pointer">
      <img src={image} alt={title} className="w-full h-full object-cover"></img>
      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-xs text-white text-center font-medium">
        <h2>{title}</h2>
        <p>{item_count} Items</p>
      </div>
    </div>
  );
};

export default CategoryBanners;
