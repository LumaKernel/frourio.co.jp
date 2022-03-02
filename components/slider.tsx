import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

type propsType = {
  info: Array<{
    path: string;
    url: string;
  }>;
};

const Slider = (props: propsType) => {
  const info = props.info;
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      slidesPerView={3}
      spaceBetween={10}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      style={{ maxWidth: "900px", marginTop: "8rem" }}
    >
      {info.map((item, index) => {
        return (
          <SwiperSlide style={{ border: "solid 2px #3AC9D2" }} key={index}>
            <a
              href={`https://github.com/${item.url}`}
              style={{
                display: "flex",
              }}
            >
              <img
                src={`/tumb/${item.path}`}
                style={{
                  height: "180px",
                  width: "330px",
                  objectFit: "contain",
                }}
                alt={item.path}
              />
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
