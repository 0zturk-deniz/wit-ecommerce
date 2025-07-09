import { AlarmCheck, ChartArea, ChevronRight } from "lucide-react";
import carouselItem from "../assets/images/carousel-item.png";

const Card = () => {
  return (
    <div className="flex flex-col border shadow-md w-1/3 overflow-hidden">
      <div className="relative aspect-[4/3] w-full">
        <img src={carouselItem} className="w-full h-full object-cover" />
        <p className="absolute top-6 left-6 text-white bg-[#E74040] font-bold py-1 px-3 rounded text-xs">
          NEW
        </p>
      </div>
      <div className="flex flex-col p-6 gap-y-4 text-sm">
        <div className="flex gap-8">
          <p className="text-xs text-[#8EC2F2]">Google</p>
          <p className="text-xs text-[#737373]">Trending</p>
          <p className="text-xs text-[#737373]">New</p>
        </div>
        <h2 className="max-w-[25ch] break-words text-xl font-medium">
          Loudest à la Madison #1 (L'integral)
        </h2>
        <p className="max-w-[30ch] break-words text-xs text-[#737373]">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <AlarmCheck color="#23A6F0" className="h-4 w-4" />
            <p className="text-xs text-[#737373]">22 April 2021</p>
          </div>
          <div className="flex gap-2">
            <ChartArea color="#23856D" className="h-4 w-4" />
            <p className="text-xs text-[#737373]">10 comments</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-xs font-semibold text-[#737373]">Learn More</p>
          <ChevronRight color="#23A6F0" />
        </div>
      </div>
    </div>
  );
};

export default Card;
