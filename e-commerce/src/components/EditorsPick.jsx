import ep1 from "../assets/images/ep1.png";
import ep2 from "../assets/images/ep2.png";
import ep3 from "../assets/images/ep3.png";
import ep4 from "../assets/images/ep4.png";

const EditorsPick = () => {
  return (
    <section className="flex flex-col items-center py-12">
      <h2 className="text-lg font-medium tracking-wider">EDITOR'S PICK</h2>
      <p className="text-[#737373] font-extralight tracking-wider">
        Problems trying to resolve the conflict between
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-8">
        <div className="relative aspect-[2/3] md:aspect-auto w-full">
          <img src={ep1} className="w-full h-full object-cover" />
          <button className="absolute bottom-4 left-4  bg-white text-[#252B42] font-bold px-4 py-2 text-sm">
            MEN
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="relative aspect-[2/3] md:aspect-auto w-full">
            <img src={ep2} className="w-full h-full object-cover" />
            <button className="absolute bottom-4 left-4  bg-white text-[#252B42] font-bold px-4 py-2 text-sm">
              WOMEN
            </button>
          </div>

          <div className="grid grid-rows-2 gap-3">
            <div className="relative aspect-[2/3] md:aspect-auto w-full">
              <img src={ep3} className="h-full object-cover" />
              <button className="absolute bottom-4 left-4  bg-white text-[#252B42] font-bold px-4 py-2 text-sm">
                ACCESSORIES
              </button>
            </div>

            <div className="relative aspect-[2/3] md:aspect-auto w-full">
              <img src={ep4} className="h-full object-cover" />
              <button className="absolute bottom-4 left-4  bg-white text-[#252B42] font-bold px-4 py-2 text-sm">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;
