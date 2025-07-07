import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import carouselItem from "../assets/images/carousel-item.png";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    image: carouselItem,
    /*title: "SUMMER 2020",
    headline: "NEW COLLECTION",
    text: "We know how large objects will act, but things on a small scale.",
    cta: "SHOP NOW",*/
  },
];

const Carrousel = () => {
  return (
    <div>
      <div className="absolute inset-0 z-10 flex items-center justify-between">
        <button>
          <ChevronLeft strokeWidth="{1}" color="white" className="w-14 h-14" />
        </button>
        <button>
          <ChevronRight strokeWidth="{1}" color="white" className="w-14 h-14" />
        </button>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={false}
        className="w-full h-[700px] relative"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                className="w-full h-full object-cover"
                alt="{slide.headline}"
              />
              <div>
                <p>{slide.title}</p>
                <h2>{slide.headline}</h2>
                <p>{slide.text}</p>
                <button>{slide.cta}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    /*<div>
      <div className="relative w-full h-[700px] overflow-hidden">
        <img src={carouselItem} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button>
          <ChevronLeft strokeWidth="{1}" color="white" className="w-14 h-14" />
        </button>
        <button>
          <ChevronRight strokeWidth="{1}" color="white" className="w-14 h-14" />
        </button>
      </div>
      <button></button>
    </div>*/
  );
};

export default Carrousel;
