import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./style.module.css";
import { AnimationButton } from "../../common";
import { TemplateListData } from "../../../constants";

export const Templates: FC = () => {
  return (
    <section className={styles["templates-section"]}>
      <div className={styles["heading-content"]}>
        <span>Templates</span>
        <span>Set up your editor</span>
        <span>with React templates</span>
        <span>
          Get to market in the fast lane with our front-end templates.
          Customize, combine, and adapt them to your UX.
        </span>
        <AnimationButton url="/" title="Explore templates" isTransparent />
      </div>
      <Swiper
        slidesPerView={4.4}
        centeredSlides={true}
        className={styles.swiper}
        spaceBetween={40}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
      >
        {[...TemplateListData, ...TemplateListData].map((item, index) => (
          <SwiperSlide key={index} className={styles["swiper-slide"]}>
            <div className={styles.item}>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles["item-content"]}>
                <div className={styles["item-info"]}>
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                </div>
                {item.inDevelop ? (
                  <div className={styles["in-develop"]}>In development</div>
                ) : (
                  <AnimationButton
                    url="/"
                    title="Preview"
                    isTransparent
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
