import React from 'react'
import Logo from "./../public/assets/logo.svg"
import HeroImg from "./../public/assets/bg_image.svg"
import DownImg from "./../public/assets/down_img.svg"
import Section1Img from "./../public/assets/bg_image2.svg"
import RightIcon from "./../public/assets/right_img.svg"
import Section3 from "./../public/assets/bg_image3.svg"
import Stars from "./../public/assets/star.svg"
import Section4 from "./../public/assets/bg_image4.svg"
import Stories from "./../public/assets/stories.svg"
import Twitter from "./../public/assets/twitter_icon.svg"
import Facebook from "./../public/assets/facebook_icon.svg"
import Instagram  from "./../public/assets/instagram_icon.svg"
import Linkedin from "./../public/assets/linkedin_icon.svg"
import Youtube from "./../public/assets/youtube_icon.svg"


const App = () => {
  return (
    <div>
      <header>
        <div className="container my-0 mx-auto p-6 flex items-center justify-between mb-[52px]">
          <img src={Logo} alt="" className="header_logo " />
          <nav className=' flex items-center gap-5'>
            <ul className="header_list flex items-center gap-10">
              <li className="list_item">
                <a href="" className="item_link text-[#202336] text-lg font-medium leading-5  ">Home</a>
              </li>
              <li className="list_item">
                <a href="" className="item_link text-[#B8BECD] text-lg font-medium leading-5">Destinations</a>
              </li>
              <li className="list_item">
                <a href="" className="item_link text-[#B8BECD] text-lg font-medium leading-5">About</a>
              </li>
              <li className="list_item">
                <a href="" className="item_link text-[#B8BECD] text-lg font-medium leading-5">Partner</a>
              </li>
              <li className="list_item">
                <a href="" className="item_link text-[#FB8F1D] text-lg font-medium leading-[60px] rounded-lg border border-[#FB8F1D] border-solid py-[10px] px-[36px] align-middle ">Login</a>
              </li>
              <li className="list_item">
                <a href="" className="item_link text-[#fff] text-lg font-medium leading-[60px] rounded-lg border bg-[#FB8F1D] border-[#FB8F1D] border-solid py-[10px] px-[36px] align-middle mr-[70px]">Register</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="hero">
          <div className="container my-0 mx-auto flex items-center justify-between ">
            <div className="left_part ml-4">
            <h1 className="hero_title text-[#202336] text-[64px] w-[376px]  font-bold leading-[80px] mb-[74px]">Explore and Travel</h1>
            <p className="hero_text text-[#202336] text-[22px] font-semibold leading-7 mb-[11px]">Holiday finder</p>
            <p className="mb-[48px]">______ </p>
            <div className="dropdowns flex items-center gap-[40px] mb-[35px]">
              <div className="left_dropdown flex items-center gap-[80px]  border-[#AFB0B9] border-[0.8px] border-solid rounded-[6px] py-[10px] px-[38px] mr-[30px]">
              <p className="dropdown_text text-[#4A4C53] text-[14px] font-[400px] leading-[32px] ">Location</p>
              <img src={DownImg} alt="" className="" />
              </div>
              <div className="right_dropdown flex items-center gap-[80px]  border-[#AFB0B9] border-[0.8px] border-solid rounded-[6px] py-[10px] px-[38px]">
              <p className="dropdown_text  text-[#4A4C53] text-[14px] font-[400px] leading-[32px]">Activity</p>
              <img src={DownImg} alt="" className="" />
              </div>
            </div>
            <div className="dropdowns flex items-center gap-[40px] mb-[51px]">
              <div className="left_dropdown flex items-center gap-[80px]  border-[#AFB0B9] border-[0.8px] border-solid rounded-[6px] py-[10px] px-[44px] mr-[30px]">
              <p className="dropdown_text  text-[#4A4C53] text-[14px] font-[400px] leading-[32px] ">Grade</p>
              <img src={DownImg} alt="" className="" />
              </div>
              <div className="right_dropdown flex items-center gap-[80px]  border-[#AFB0B9] border-[0.8px] border-solid rounded-[6px] py-[10px] px-[44px]">
              <p className="dropdown_text  text-[#4A4C53] text-[14px] font-[400px] leading-[32px]">Date</p>
              <img src={DownImg} alt="" className=" mt--10" />
              </div>
            </div>

            <p className="  text-[#fff] text-lg font-medium leading-[60px] rounded-lg border bg-[#FB8F1D] border-[#FB8F1D] border-solid py-[2px] px-[60px] align-middle mr-[70px] w-[180px] mb-[333px]"><a href="">Explore</a></p>

            </div>
            <div className="right_part">
              <img src={HeroImg} alt="" className="hero_img mt-[-250px]" />
            </div>
          </div>
        </div>
        <section>
          <div className="container my-0 mx-auto flex items-center gap-[300px] mb-[298px]">
            <div className="left_part ml-4">
              <img src={Section1Img} alt="" />
            </div>
            <div className="right_part">
              <h2 className='text-[#202336] text-[36px] w-[376px]  font-bold leading-[80px] mb-[20px]'>A new way to explore the world </h2>
              <p className='  text-[#4A4C53] text-[17px] font-[400px] leading-[32px] mb-[39px]'>For decades travellers have reached for Lonely Planet <br /> books when looking to plan and execute their perfect <br /> 
                              trip, but now, they can also let Lonely Planet Experiences <br /> lead the way
              </p>
              <p className="  text-[#fff] text-lg font-medium leading-[60px] rounded-lg border bg-[#FB8F1D] border-[#FB8F1D] border-solid py-[2px] px-[60px] align-middle mr-[70px] w-[250px]"><a href="">Learn more</a></p>

            </div>
          </div>
        </section>
        <section>
          <div className="container my-0 mx-auto">
          <img src={RightIcon} alt="" className=" w-[90%] mb-[237px]" />
          </div>
        </section>
        <section>
          <div className="container my-0 mx-auto flex items-center gap-[300px] mb-[298px]">
            <div className="left_part ml-[100px]">
              <h2 className='text-[#202336] text-[36px] w-[376px]  font-bold leading-[80px] mb-[20px]'>Guides by Thousand Sunny </h2>
              <p className='  text-[#4A4C53] text-[17px] font-[400px] leading-[32px] mb-[39px]'>For decades travellers have reached for Lonely Planet <br /> books when looking to plan and execute their perfect <br /> 
                              trip, but now, they can also let Lonely Planet Experiences <br /> lead the way
              </p>
              <p className="  text-[#fff] text-lg font-medium leading-[60px] rounded-lg border bg-[#FB8F1D] border-[#FB8F1D] border-solid py-[2px] px-[60px] align-middle mr-[70px] w-[250px]"><a href="">Download</a></p>
            </div>
            <div className="right_part">
              <img src={Section3} alt="" />
            </div>
          </div>         
        </section>
        <section>
          <div className="container my-0 mx-auto flex items-center gap-[300px] mb-[298px]">
          <div className="left_part ml-[100px]">
            <h2 className='text-[#202336] text-[36px] w-[376px]  font-bold leading-[80px] mb-[120px]'>Testimonials </h2>
            <img src={Stars} alt="" className=" mb-9" />
            <p className='  text-[#4A4C53] text-[17px] font-[400px] leading-[32px] mb-[40px]'>“Quisque in lacus a urna fermentum  <br />euismod. Integer mi nibh, dapibus ac <br />scelerisque eu, facilisis quis purus. Morbi <br /> blandit sit amet turpis nec”
            </p>
            <p className='text-[#202336] text-[22px] w-[376px]  font-bold leading-[80px] mb-[10px]'>Edward Newgate </p>
            <p className="text-[#4A4C53] text-[18px] font-[400px] leading-[32px] mb-[49px]">Founder Circle</p>
          </div>
          <div className="right_part">
            <img src={Section4} alt="" />
          </div>
        </div>          
        </section>
        <section>
          <div className="container my-0 mx-auto">
          <img src={Stories} alt="" className=" w-[90%] mb-[237px]" />
          </div>         
        </section>
      </main>
      <footer className='bg-[#F9F9FB] pt-[78px] pb-[33px]'>
        <div className=" container my-0 mx-auto flex items-center gap-[200px]  border-b border-[#9fa0a4] border-solid mb-[32px]">
          <div className=" ml-[150px] ">
          <img src={Logo} alt="" className="header_logo mb-[26px] " /> 
          <p className='  text-[#4A4C53] text-[17px] font-[400px] leading-[32px] mb-[55px]'>Plan and book your perfect trip with <br />expert advice, travel tips destination <br /> information from us
          </p>   
          <p className='  text-[#4A4C53] text-[17px] font-[400px] leading-[32px] mb-[81px]'>©2020 Thousand Sunny. All rights reserved
          </p> 
          </div>
          <div className="lists flex items-center gap-[100px] mt-[-70px]">
            <ul className="footer_list">
              <li className="">
                <a href="" className=" text-[#202336] text-[22px] w-[376px]  font-bold leading-[80px] mb-[10px]">Destinations</a>
              </li>
              <li className="">
                <a href="" className="text-[#4A4C53] text-[18px] font-[400px] leading-[32px] mb-[49px]">Africa</a>
              </li>
              <li className="">
                <a href="" className="text-[#4A4C53] text-[18px] font-[400px] leading-[32px] mb-[49px]">Antarctica</a>
              </li>
              <li className="">
                <a href="" className="text-[#4A4C53] text-[18px] font-[400px] leading-[32px] mb-[49px]">Asia</a>
              </li>
              <li className="">
                <a className='text-[#4A4C53] text-[18px] font-[400px] leading-[32px] mb-[49px]' href="">Europe</a>
              </li>
              <li className="">
                <a className='text-[#4A4C53] text-[18px] font-[400px] leading-[32px] mb-[49px]' href="">America</a>
              </li>
            </ul>
            <ul className="footer_list">
              <li className="">
                <a href="" className=" text-[#202336] text-[22px] w-[376px]  font-bold leading-[80px] mb-[10px]">Shop</a>
              </li>
              <li className="">
                <a href="" className="text-[#4A4C53] text-[18px] font-[400px] leading-[32px] mb-[49px]">Destination Guides</a>
              </li>
              <li className="">
                <a href="" className="text-[#4A4C53] text-[18px] font-[400px] leading-[32px] mb-[49px]">Pictorial & Gifts</a>
              </li>
              <li className="">
                <a href="" className="text-[#4A4C53] text-[18px] font-[400px] leading-[32px] mb-[49px]">Special Offers</a>
              </li>
              <li className="">
                <a className='text-[#4A4C53] text-[18px] font-[400px] leading-[32px] mb-[49px]' href="">Delivery Times</a>
              </li>
              <li className="">
                <a className='text-[#4A4C53] text-[18px] font-[400px] leading-[32px] mb-[49px]' href="">FAQs</a>
              </li>
            </ul>
            <ul className="footer_list">
              <li className="">
                <a href="" className=" text-[#202336] text-[22px] w-[376px]  font-bold leading-[80px] mb-[10px]">Interests</a>
              </li>
              <li className="">
                <a href="" className="text-[#4A4C53] text-[18px] font-[400px] leading-[32px] mb-[49px]">Adventure Travel </a>
              </li>
              <li className="">
                <a href="" className="text-[#4A4C53] text-[18px] font-[400px] leading-[32px] mb-[49px]">Art And Culture</a>
              </li>
              <li className="">
                <a href="" className="text-[#4A4C53] text-[18px] font-[400px] leading-[32px] mb-[49px]">Wildlife And Nature</a>
              </li>
              <li className="">
                <a className='text-[#4A4C53] text-[18px] font-[400px] leading-[32px] mb-[49px]' href="">Family Holidays</a>
              </li>
              <li className="">
                <a className='text-[#4A4C53] text-[18px] font-[400px] leading-[32px] mb-[49px]' href="">Food And Drink</a>
              </li>
            </ul>
          </div>
        </div>
          <div className="footer_bottom flex items-center gap-7 container my-0 mx-auto ml-[800px] ">
            <img src={Twitter} alt="" className="" />
            <img src={Facebook} alt="" className="" />
            <img src={Instagram} alt="" className="" />
            <img src={Linkedin} alt="" className="" />
            <img src={Youtube} alt="" className="" />

          </div>
      </footer>
    </div>
  )
}

export default App