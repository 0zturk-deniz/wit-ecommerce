const CategoryBanners = ({ image, title, item_count }) => {
  return (
    <div className="aspect-square">
      <img src={image}></img>
      <h2>{title}</h2>
      <p>{item_count} Items</p>
    </div>
  );
};

export default CategoryBanners;
