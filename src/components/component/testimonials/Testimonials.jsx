import React from "react";
import AVTR1 from '../../../assets/avatar1.jpg'
import AVTR2 from '../../../assets/avatar2.jpg'
import AVTR3 from '../../../assets/avatar3.jpg'
import AVTR4 from '../../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: AVTR1,
    name: "Tina Snow",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit similique quod a ratione sunt aspernatur sint repellendus. Magnam officiis rerum, doloremque iure culpa perspiciatis ab quas incidunt obcaecati ex.Nesciunt odit similique quod a ratione sunt aspernatur sint repellendus. Magnam officiis rerum, doloremque iure culpa perspiciatis ab quas incidunt obcaecati ex."
  },
  {
    image: AVTR2,
    name: "Shatta Wale",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit similique quod a ratione sunt aspernatur sint repellendus. Magnam officiis rerum, doloremque iure culpa perspiciatis ab quas incidunt obcaecati ex.Nesciunt odit similique quod a ratione sunt aspernatur sint repellendus. Magnam officiis rerum, doloremque iure culpa perspiciatis ab quas incidunt obcaecati ex."
  },
  {
    image: AVTR3,
    name: "Kwame Despite",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit similique quod a ratione sunt aspernatur sint repellendus. Magnam officiis rerum, doloremque iure culpa perspiciatis ab quas incidunt obcaecati ex.Nesciunt odit similique quod a ratione sunt aspernatur sint repellendus. Magnam officiis rerum, doloremque iure culpa perspiciatis ab quas incidunt obcaecati ex."
  },
  {
    image: AVTR4,
    name: "Nana Ama McBrown",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit similique quod a ratione sunt aspernatur sint repellendus. Magnam officiis rerum, doloremque iure culpa perspiciatis ab quas incidunt obcaecati ex.Nesciunt odit similique quod a ratione sunt aspernatur sint repellendus. Magnam officiis rerum, doloremque iure culpa perspiciatis ab quas incidunt obcaecati ex."
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({image, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={image} />
                </div>
                  <h5 className='client_name'>{name}</h5>
                  <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials