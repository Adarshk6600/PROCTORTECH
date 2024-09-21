import { Swiper, SwiperSlide } from 'swiper/react';
import User from './User';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <User

          img='https://randomuser.me/api/portraits/men/71.jpg'
          star={4.5}
          name='Sarah Joe'
          bio='Medical Student'
          about='Sarah has been using our service for years and love it!'
        />
      </SwiperSlide>

      <SwiperSlide>
        <User
          img='https://randomuser.me/api/portraits/men/64.jpg'
          star={4.5}
          name='Sarah Joe'
          bio='Medical Student'
          about='Sarah has been using our service for years and love it!'
        />
      </SwiperSlide>

      <SwiperSlide>
        <User
          img='https://randomuser.me/api/portraits/men/47.jpg'
          star={3.5}
          name='Sarah Joe'
          bio='Medical Student'
          about='Sarah has been using our service for years and love it!'
        />
      </SwiperSlide>

      <SwiperSlide>
        <User
          img='https://picsum.photos/200'
          star={4.5}
          name='Sarah Joe'
          bio='Medical Student'
          about='Sarah has been using our service for years and love it!'
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};