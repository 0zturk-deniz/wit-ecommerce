import carouselItem from "../assets/images/carousel-item.png";

const CtaSection = () => {
  return (
    <section className="grid grid-cols-2 gap-24 px-20">
      <div className="aspect-square w-full">
        <img src={carouselItem} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-[#BDBDBD] py-3">SUMMER 2020</p>
        <h2 className="text-4xl text-[#252B42] py-3 max-w-[20ch] font-bold break-words">
          Part of the Neural Universe
        </h2>
        <p className="text-[#737373] py-3 max-w-[30ch] break-words">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="inline-flex gap-4">
          <button className="bg-[#2DC071] font-bold text-white px-8 py-4 text-xs rounded box-border leading-none">
            BUY NOW
          </button>
          <button className="text-[#2DC071] font-bold text-xs rounded border-[#2DC071] border box-border leading-none px-8 py-4">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
