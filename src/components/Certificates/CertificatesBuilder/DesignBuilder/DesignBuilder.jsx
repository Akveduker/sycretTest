import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { certificateDesignArr } from "constants/certificate/design/certificateDesign";
import DesignSwitch from "ui/switch/DesignSwitch/DesignSwitch";
import s from "./DesignBuilder.module.scss";
import BaseSkeleton from "ui/skeleton/BaseSkeleton/BaseSkeleton";
import { useCheckIsLoading } from "hooks/certificateContext/useCheckIsLoading";
const DesignBuilder = () => {
  const isDataLoading = useCheckIsLoading();
  return (
    <div className={s["container"]}>
      <div className={s["title"]}>
        {isDataLoading ? (
          <BaseSkeleton className={s["title--skeleton"]} />
        ) : (
          <h3 className={s["container__title"]}>Дизайн сертификата</h3>
        )}
      </div>
      <div className={s["slider"]}>
        {isDataLoading ? (
          <BaseSkeleton className={s["slider--skeleton"]} />
        ) : (
          <Swiper slidesPerView={"auto"}>
            {certificateDesignArr.map((banners, i) => {
              return (
                <SwiperSlide key={i} className={s["slider__slide"]}>
                  <DesignSwitch banners={banners} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default DesignBuilder;
