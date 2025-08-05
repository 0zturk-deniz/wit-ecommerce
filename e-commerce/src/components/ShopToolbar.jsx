const ShopToolbar = () => {
  return (
    <div className="flex items-center justify-between py-8">
      <p className="text-gray-600 text-sm">Showing all 12 results</p>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Views:</span>
        <button className="bg-gray-100 p-2 rounded">🔲</button>
        <button className="bg-gray-100 p-2 rounded">☰</button>
      </div>
      <div className="flex items-center gap-4">
        <select className="border p-3 rounded text-sm bg-[#F9F9F9] text-[#737373]">
          <option>Popularity</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
        <button className="bg-[#23A6F0] text-white p-3 rounded">Filter</button>
      </div>
    </div>
  );
};

export default ShopToolbar;
