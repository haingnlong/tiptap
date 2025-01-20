import { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./style.module.css";
import { UseCasesListData } from "../../../../constants";
import { Swiper as SwiperType } from "swiper/types";

export const SliderTab: FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  console.log(currentSlideIndex);
  const swiperRef = useRef<SwiperType>(null);
  const combineData = [
    ...UseCasesListData,
    ...UseCasesListData,
    ...UseCasesListData,
    ...UseCasesListData,
    ...UseCasesListData,
    ...UseCasesListData,
    ...UseCasesListData,
    ...UseCasesListData,
    ...UseCasesListData,
  ];

  const handleSlideChangeManual = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index % UseCasesListData.length);
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlideIndex(swiper.realIndex % UseCasesListData.length);
  };

  return (
    <Swiper
      slidesPerView={9}
      centeredSlides={true}
      className={styles.swiper}
      loop
      // autoplay={{
      //   delay: 500,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true,
      // }}
      // modules={[Autoplay]}
      spaceBetween={40}
      loopAdditionalSlides={10}
      onSwiper={(swiper: SwiperType) =>
        ((swiperRef as React.MutableRefObject<SwiperType | null>).current =
          swiper)
      }
      onSlideChange={handleSlideChange}
    >
      {combineData.map((item, index) => (
        <SwiperSlide
          key={index}
          className={styles["swiper-slide"]}
          onClick={() => handleSlideChangeManual(index)}
        >
          <div className={currentSlideIndex === index % UseCasesListData.length ? styles.item + ' ' + styles.selected : styles.item}>
            <div>
              <img src={item.icon} alt="icon" />
            </div>
            <div>{item.title}</div>
          </div>
        </SwiperSlide>
      ))}
      <div className={styles["image-wrapper"]}>
        {UseCasesListData.map((item, index) => (
          <img key={item.title} src={item.image} style={{ opacity: currentSlideIndex === index ? 1 : 0 }} alt="main-image" />
        ))}
        <div className={styles['bg-gradient']}>
          <img src="https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/6679cdbbd1f78f0917b2053d_gradient-noise-purple-azure-light.jpg" alt="bg-gradient" />
        </div>
      </div>
    </Swiper>
  );
};
