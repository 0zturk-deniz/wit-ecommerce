const BestsellerProductCard = ({ image, name, category, price, sale }) => {
  return (
    <div className="flex flex-col text-center pb-20">
      <div className="aspect-[3/5] overflow-hidden">
        <img src={image} className="w-full h-full object-cover pb-2" />
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="font-semibold text-sm py-2">{name}</p>
        <p className="text-[#737373] text-sm font-medium">{category}</p>
        <div className="flex justify-center items-center flex-row py-2 gap-1">
          <p className="text-[#BDBDBD] font-semibold text-sm">{price}</p>
          <p className="text-[#23856D] font-semibold text-sm">{sale}</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          <div className="w-4 h-4 rounded-full bg-green-600"></div>
          <div className="w-4 h-4 rounded-full bg-orange-500"></div>
          <div className="w-4 h-4 rounded-full bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default BestsellerProductCard;
