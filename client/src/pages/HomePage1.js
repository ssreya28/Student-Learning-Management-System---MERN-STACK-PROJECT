import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios, { Axios } from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Homepage.css";
import "../styles/TestMe.css";

const HomePage1 = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Layout title={"Student Learning Management System"}>
    <section id="banner">
      <section className='firstSection'>
        <div className='left'>
         <b>Student Learning 
          <div> Management System </div></b>
          
          <div className="purple"><h4> <i>Teach the way your Students Learn Best!</i></h4></div>
          
          <div className="colr">
            
            <button class="button" onClick={() => navigate('/browse')}><span><i>Let's Learn! </i></span></button></div>
          </div>
        
        {/* banner image */}
        <div className='right'>
        <img
        src="/images/slms2.png"
        className="banner-img"
        alt="bannerimage"
        height="500px"
      />
      </div>
      
      {/* banner image */}
      </section>
      </section>
      
      <section className='secondSection'>
      <div className='left'>
        <div className="new-left">
          <div className="image-container">
          <h3><b>Easy To Learn</b></h3>
            <img src="/images/easy.png" />
            
            <p>Simple to set up and use. Our LMS automates your routine tasks, so you can focus on teaching.</p>
          </div>
          
          <div className="image-container">
            <h3><b>Efficient</b></h3>
            <img src="/images/efficient.png" />
            <p>From plans to assignments and reports, connect seamlessly in one LMS platform.</p>
          </div>
          
          <div className="image-container">
            <h3><b>Empowering</b></h3>
            <img src="/images/empower1.png" />
            <p>Connect with your students. Keep them engaged with positive feedback and personalized education.</p>
          </div>
          
        </div>
        

     </div>
  </section>
  <section className='secondSection'>
    {/* Add your carousel component here */}
    <Slider {...settings}>
  <div>
    <div className="slide-container">
      <div className="image-container1">
        <img src="/images/testing.webp" alt="Easy to Learn" />
      </div>
      <div className="content-container1">
        <h3>
          <b>Test Your Knowledge</b>
        </h3>
        <p>
          Access to assesments to check your technical knowledge 
        </p>
        <button class="button" onClick={() => navigate('/browse')}><span><i>Let's Learn! </i></span></button>
      </div>
    </div>
  </div>
  <div>
    <div className="slide-container">
      <div className="image-container1">
        <img src="/images/student.webp" alt="Efficient" />
      </div>
      <div className="content-container1">
        <h3>
          <b>Clear Your Doubts</b>
        </h3>
        <p>
          For any queries check out the Ask-Me-Any Board 
        </p>
        <button class="button" onClick={() => navigate('/browse')}><span><i>Let's Learn! </i></span></button>
      </div>
    </div>
  </div>
  <div>
    <div className="slide-container">
      <div className="image-container1">
        <img src="/images/notes.webp" alt="Empowering" />
      </div>
      <div className="content-container1">
        <h3>
          <b>Access all the study materials</b>
        </h3>
        <p>
          You can view and download all the required materials from here
        </p>
        <div><button class="button" onClick={() => navigate('/browse')}><span><i>Let's Learn! </i></span></button></div>
      </div>
    </div>
  </div>
</Slider>
<br/>

  </section>
  <br/>
    </Layout>
  );
};

export default HomePage1






