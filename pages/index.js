import Link from 'next/link';
import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { AiOutlineShoppingCart} from 'react-icons/ai';
import { AiFillStar } from "react-icons/ai";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { BsFacebook,BsInstagram,BsYoutube } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {FreeMode, Autoplay, Pagination,Navigation } from "swiper";
import ShippingAddress from '../Components/LandingPage/Common/ShippingAddress';

import Order from'/Components/LandingPage/Common/Order'
import Menubar from "../Components/LandingPage/Common/Menubar/Menubar";
import landingImageUrl from "../public/images/landing_14/logo.png";

// ShippingAddress Img
import DelivaryImgUrl1 from '../public/images/landing_14/delivary1.png';
import DelivaryImgUrl2 from '../public/images/landing_14/delivary2.png';
import DelivaryImgUrl3 from '../public/images/landing_14/delivary3.png';
import DelivaryImgUrl4 from '../public/images/landing_14/delivary4.png';



const index = () => {

    const today = new Date();
    const year = today.getFullYear();
    const swiperRef = useRef();

 

    return (

        <div className='Landing__14'>

            {/* ================================================================================================
                Banner
            ====================================================================================================*/}

            <section>

                <Container fluid className="Conpad">

                <img className="BannerAbs1" src="images/landing_14/img1.png" alt="alt" />
                <img className="BannerAbs2" src="images/landing_14/img2.png" alt="alt" />


                    <div  className="BannerBg">

                        <img className="BannerBgAbsImg1" src="images/landing_14/bg1.png" alt="alt" />
                    
                        <div className="BannerToptxt">

                            <h4>Welcome to My Saree House </h4>

                        </div>


                        <Menubar logoImage={landingImageUrl}></Menubar>

                        
                        <div className="BannerToptxtBox">  


                            {/* <img src="images/landing_14/logo.png" alt="img" /> */}

                            <div  className="BannertxtBoxRel">

                                <img src="images/landing_14/img3.svg" alt="img" />

                                    <div className="BannertxtBoxAbs">

                                        <h1 className="BannertxtBoxAbs1" >শাড়িতেই নারী! </h1>

                                        <h1 className="BannertxtBoxAbs2">  এক্সক্লুসিভ মসলিন জামদানি শাড়ি</h1>
        
                                    </div>
                                
                                <p>
                                        শাড়ি কার না ভালো লাগে? বাঙালি মেয়েদের শাড়িতেই সবচেয়ে সুন্দর দেখায় কোটি টাকার
                                        বাড়ির চেয়েও একটি জামদানিতেই অনেক বেশি খুশি হন বেশিরভাগ নারী
                                </p>


                                <Link href='#placeAnOrder' className="bg"> অর্ডার করুন <AiOutlineShoppingCart/> </Link>

                                <Link href='#placeAnOrder' className="bg2"> +8801799733234   </Link>

                                <h2>ডিস্কাউন্ট মূল্যঃ  ১৬৫০ টাকা</h2>


                            
                            </div>   
                            


                        </div>

                        

                    </div>


                </Container>


            </section>

            {/* ================================================================================================
                Sharee House
                ====================================================================================================*/}

            <section >
                <Container>
                    <Row className="Sharee_houseRow">
                        <Col sm={12} md={6}>

                            <div className="Sharee_house">
                                
                                <h2>কেন আপনার জন্য এই রয়্যাল শাড়ি  চয়ন  করবেন ?</h2>

                                <p>কোটি টাকার বাড়ির চেয়েও একটি জামদানিতেই অনেক বেশি খুশি হন বেশিরভাগ নারী।
                                        প্রিয় পোশাকের নাম জানতে চাইলে, সব বাঙালি নারী মূহুর্তেই উত্তর দেবেন ‘শাড়ি’। 
                                        প্রতিটি শাড়িই নারীর কাছে অনেক অনেক প্রিয়। তাই তো বেশ কয়েক বছরও যদি পরা না হয়, 
                                        তবুও শাড়িটি ফেলে দিতে মন চায় না কারোই। হবেই বা না কেন, প্রতিটি শাড়ির সঙ্গে যে জড়িয়ে থাকে উপলক্ষ, 
                                        উৎসব, প্রিয় মানুষের ভালোবাসা, অনেক অনেক স্মৃতি। তাই তো নারীর এত প্রিয় শাড়ি।
                                </p>

                                <br/>

                                <p>
                                    প্রতিটি শাড়ির সঙ্গে যে জড়িয়ে থাকে উপলক্ষ, 
                                    উৎসব, প্রিয় মানুষের ভালোবাসা, অনেক অনেক স্মৃতি। তাই তো নারীর এত প্রিয় শাড়ি।
                                </p>


                                <Link href='#placeAnOrder' className="bg"> অর্ডার করুন <AiOutlineShoppingCart/> </Link>

                                
                            </div>

                        
                        </Col>

                        <Col sm={12} md={6} className="BordarMainDivCol">


                            <div className="BordarMainDiv">
                            
                                    <div className="BordarMainDiv1"></div>
                                    <div className="BordarMainDiv2"></div>
                                    <div className="BordarMainDiv3"></div>
                                    <div className="BordarMainDiv4"></div>

                            </div>

                            

                            <Row className="Sharee_Row">

                                <Col xs={6}>
                                
                                    <img src="images/landing_14/img4.png" alt="img" />

                                </Col>

                                <Col xs={6}>
                                
                                    <img src="images/landing_14/img5.png" alt="img" />

                                </Col>


                            </Row>
                        
                        </Col>

                    </Row>
                </Container>
            </section>
                
            <div className="FloatSolve"></div>
            <div className="section_gap"></div>

            {/* ================================================================================================
                Shipping Icon
            ====================================================================================================*/}

            <section className="BggImg">

                <ShippingAddress
                    DelivaryImage1={DelivaryImgUrl1}
                    DelivaryImage2={DelivaryImgUrl2}
                    DelivaryImage3={DelivaryImgUrl3}
                    DelivaryImage4={DelivaryImgUrl4}
                    DelivaryTitle1="Free 2 Days Shipping" 
                    DelivaryTitle2="Money Back Gurantee" 
                    DelivaryTitle3="Return Upto 30 Days" 
                    DelivaryTitle4="24/7 Customer Support" 
                />

            </section> 


            
            {/* ================================================================================================
                Card
            ====================================================================================================*/}

            <section>
                <Container fluid  className="ConPad  CardConBg">
                    
                    <Container>


                            <h2 className='CardTopH2'>আমাদের প্রিমিয়াম মানের নতুন শাড়ি গুলো সম্পর্কে আরো বিস্তারির জানুন </h2>


                            <Row>

                                <Col sm={12} md={4}>


                                    <Row>

                                        <Col xs={12}>

                                            <div  className='CardImgRel'>

                                            <img className='CardImg' src="images/landing_14/img16.png" alt="" />

                                            <div className='Cardpad'>

                                                    <h4 className='CardImgAbs1' >জামদানি শাড়ি</h4>

                                                    <p className='CardImgAbs2'>ভালোমানের একটি জামদানি শাড়ির দাম প্রায় ১০ হাজার টাকা।
                                                    এত দামি শাড়ি কখনোই বাড়িতে ধোবেন না, লন্ড্রিতে কাটা ওয়াশ করিয়ে নেবেন। 
                                                    জামদানি শাড়ি ভাঁজ করে না রেখে হ্যাঙ্গারে ঝুলিয়ে অথবা রোল করে মুড়িয়ে রাখা ভালো। </p>

                                                </div>

                                            </div>

                                        </Col>

                                        {/* Col---- */}

                                        

                                        <Col xs={12}>

                                            <div  className='CardImgRel'>

                                            <img className='CardImg' src="images/landing_14/img16.png" alt="" />

                                            <div className='Cardpad'>

                                                    <h4 className='CardImgAbs1' >সিল্ক শাড়ি</h4>

                                                    <p className='CardImgAbs2'>ভালোমানের একটি জামদানি শাড়ির দাম প্রায় ১০ হাজার টাকা। 
                                                        এত দামি শাড়ি কখনোই বাড়িতে ধোবেন না, লন্ড্রিতে কাটা ওয়াশ
                                                        করিয়ে নেবেন। জামদানি শাড়ি ভাঁজ করে না
                                                        রেখে হ্যাঙ্গারে ঝুলিয়ে অথবা রোল করে মুড়িয়ে রাখা ভালো।  
                                                    </p>

                                                </div>

                                            </div>

                                        </Col>

                                        {/* Col---- */}


                                        <Col xs={12}>

                                            <div  className='CardImgRel'>

                                            <img className='CardImg' src="images/landing_14/img16.png" alt="" />

                                            <div className='Cardpad'>

                                                    <h4 className='CardImgAbs1' >জরির কাজের শাড়ি</h4>

                                                    <p className='CardImgAbs2'>ভালোমানের একটি জামদানি শাড়ির দাম প্রায় ১০ হাজার টাকা। 
                                                        এত দামি শাড়ি কখনোই বাড়িতে ধোবেন না, লন্ড্রিতে কাটা ওয়াশ করিয়ে নেবেন।
                                                        জামদানি শাড়ি ভাঁজ করে না রেখে হ্যাঙ্গারে ঝুলিয়ে অথবা রোল করে মুড়িয়ে রাখা ভালো। 
                                                </p>

                                                </div>

                                            </div>

                                        </Col>

                                        {/* Col---- */}



                                    </Row>

                                </Col>

                                <Col sm={12} md={4}>

                                    <img className='CardMidImg' src="images/landing_14/img10.png" alt="" />
                                
                                </Col>

                                <Col sm={12} md={4}>

                                    <Row>

                                            
                                                <Col xs={12}>
                                                    

                                                    <div  className='CardImgRel'>

                                                    <img className='CardImg' src="images/landing_14/img16.png" alt="" />

                                                    <div className='Cardpad'>

                                                            <h4 className='CardImgAbs1' >কাতান, বেনারসি</h4>

                                                            <p className='CardImgAbs2'>ভালোমানের একটি জামদানি শাড়ির দাম প্রায় ১০ হাজার টাকা। 
                                                            এত দামি শাড়ি কখনোই বাড়িতে ধোবেন না, লন্ড্রিতে কাটা ওয়াশ করিয়ে নেবেন। 
                                                            জামদানি শাড়ি ভাঁজ করে না রেখে হ্যাঙ্গারে ঝুলিয়ে অথবা রোল করে মুড়িয়ে রাখা ভালো।  </p>

                                                        </div>

                                                    </div>

                                                </Col>

                                                    {/* Col---- */}
                                            
                                                <Col xs={12}>


                                                    <div  className='CardImgRel'>

                                                    <img className='CardImg' src="images/landing_14/img16.png" alt="" />

                                                    <div className='Cardpad'>

                                                            <h4 className='CardImgAbs1' >সুতি-জর্জেট শাড়ি</h4>

                                                            <p className='CardImgAbs2'>

                                                                ভালোমানের একটি জামদানি শাড়ির দাম প্রায় ১০ হাজার টাকা। 
                                                                এত দামি শাড়ি কখনোই বাড়িতে ধোবেন না, লন্ড্রিতে কাটা ওয়াশ করিয়ে নেবেন। জামদানি শাড়ি 
                                                                ভাঁজ করে না রেখে হ্যাঙ্গারে ঝুলিয়ে অথবা রোল করে মুড়িয়ে রাখা ভালো। 
                                                            </p>

                                                        </div>

                                                    </div>

                                                </Col>

                                                    {/* Col---- */}
                                            
                                                <Col xs={12}>


                                                    <div  className='CardImgRel'>

                                                    <img className='CardImg' src="images/landing_14/img16.png" alt="" />

                                                    <div className='Cardpad'>

                                                            <h4 className='CardImgAbs1' >মনিপুরী  তাঁতের শাড়ি</h4>

                                                            <p className='CardImgAbs2'>

                                                                ভালোমানের একটি জামদানি শাড়ির দাম প্রায় ১০ হাজার টাকা। 
                                                                এত দামি শাড়ি কখনোই বাড়িতে ধোবেন না, লন্ড্রিতে কাটা ওয়াশ করিয়ে নেবেন।
                                                                জামদানি শাড়ি ভাঁজ করে না রেখে হ্যাঙ্গারে ঝুলিয়ে অথবা রোল করে মুড়িয়ে রাখা ভালো। 
                                                            </p>

                                                        </div>

                                                    </div>

                                                </Col>

                                                    {/* Col---- */}


                                    </Row>




                                
                                </Col>

                            </Row>




                    </Container>


                </Container>



            </section>





            <div className="section_gap"></div>       
            {/* ================================================================================================
                Price Section 2
            ====================================================================================================*/}

            <Container>

                <div className="BggImg2">

                    <div className="BggImgFlex2">

                        <div>

                            <h3>মুল্য-1,500.00 টাকা</h3>

                            <h5>সারা দেশে ফ্রি হোম ডেলিভারি</h5>

                            <Link href='#placeAnOrder' className="bg bg3"> অর্ডার করতে এখানে ক্লিক করুন<AiOutlineShoppingCart/> </Link>

                        </div>
                    </div>

                </div>

            </Container>


            <div className="section_gap"></div>    
            {/* ================================================================================================
                Video
            ====================================================================================================*/}

            <section>

                <Container>

                    
                <h2 className='VideoDivh2'> আমাদের এই সর্বাধিক প্রিমিয়াম মানের শাড়ি গুলোর ওভারভিউ দেখুন </h2>

                    <div className='VideoDiv'>

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/lB-xm0dBBUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </div>
                    



                </Container>


            </section>


            <div className="section_gap"></div>    
            {/* ================================================================================================
                Slider
            ====================================================================================================*/}

            <section>

                    
            <Container >

                    <Row>
                        
                    <Col>
                        
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}

                                // pagination={{
                                // clickable: true,
                                // }}

                                // navigation={{
                                // clickable: true,
                                // }}
                                
                                onBeforeInit={(swiper) => {
                                        swiperRef.current = swiper;
                                        }}

                                autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                        }}
                                
                                loop={true}

                                breakpoints={{
                                240: {
                                slidesPerView: 2,
                                slidesPerGroup:2,
                                spaceBetween: 10,
                                },
                                768: {
                                slidesPerView: 3,
                                slidesPerGroup:3,
                                spaceBetween: 20,
                                },
                                1024: {
                                slidesPerView: 4,
                                slidesPerGroup:4,
                                spaceBetween: 30,
                                },
                                }}
                                modules={[FreeMode, Autoplay, Pagination]}

                                className="mySwiper"
                            >
                                <SwiperSlide className="SliderImg">

                                        <Link href="#">

                                            <div className='ClipBox'> </div>

                                            <img  className='imgHouse img21' src="images/landing_14/img40.png" alt="" />
                                        
                                        </Link>

                                </SwiperSlide>
                                
                                <SwiperSlide  className="SliderImg">

                                        <Link href="#">

                                            <div className='ClipBox'> </div>

                                            <img className='imgHouse img22' src="images/landing_14/img41.png" alt="" />

                                        </Link>
                                </SwiperSlide>
                                
                                <SwiperSlide  className="SliderImg">
                                        <Link href="#">
                                            <div className='ClipBox'> </div>
                                            <img className='imgHouse img23' src="images/landing_14/img42.png" alt="" />
                                        </Link>
                                </SwiperSlide>
                                
                                <SwiperSlide  className="SliderImg">
                                        <Link href="#">
                                        <div className='ClipBox'> </div>
                                        <img className='imgHouse img24' src="images/landing_14/img43.png" alt="" />
                                        </Link>
                                </SwiperSlide>
                                
                                <SwiperSlide  className="SliderImg">
                                        <Link href="#">
                                        <div className='ClipBox'> </div>
                                        <img className='imgHouse img21' src="images/landing_14/img40.png" alt="" />
                                        </Link>
                                </SwiperSlide>
                                
                                <SwiperSlide  className="SliderImg">
                                        <Link href="#">
                                        <div className='ClipBox'> </div>
                                        <img className='imgHouse img22' src="images/landing_14/img41.png" alt="" />
                                        </Link>
                                </SwiperSlide>
                                
                                <SwiperSlide  className="SliderImg">
                                        <Link href="#">
                                        <div className='ClipBox'> </div>
                                        <img className='imgHouse img21' src="images/landing_14/img42.png" alt="" />
                                        </Link>
                                </SwiperSlide>
                                
                                <SwiperSlide  className="SliderImg">
                                        <Link href="#">
                                        <div className='ClipBox'> </div>
                                        <img className='imgHouse img22' src="images/landing_14/img43.png" alt="" />
                                        </Link>
                                </SwiperSlide>
                                
                                
                                
                            </Swiper>

                            <div className="SliderBtn">

                                <button className="SliderBtn1" onClick={() => swiperRef.current?.slidePrev()}>
                                        01
                                </button>

                                <button className="SliderBtn2" onClick={() => swiperRef.current?.slideNext()}>
                                        02
                                </button>
                                
                                <button className="SliderBtn1" onClick={() => swiperRef.current?.slidePrev()}>
                                        03
                                </button>

                                <button className="SliderBtn2" onClick={() => swiperRef.current?.slideNext()}>
                                        04
                                </button>

                                
                            </div>
                                                        
                    </Col>
                </Row>
            </Container>

            </section>


            <div className="section_gap"></div>    

            {/* ================================================================================================
                Gift Section
            ====================================================================================================*/}
            <section>

                <div className='GiftMain'>

                    <Container>

                        <h2 className="GiftH2">
                            চোখ ধাঁধানো রঙ যেই কোন পার্টি, ওকেশন, বিবাহের পোশাক আপনার প্রিয়জনের জন্য সেরা উপহার!
                        </h2>

                        <Row className='GiftRow'>

                            <Col sm={12} md={12} lg={6}>

                                    <img className="GiftImg" src="images/landing_14/img13.png" alt="img" />

                            </Col>

                            <Col sm={12} md={12} lg={6}>

                                    <div className='GiftUlBox'>

                                        <ul>
                                            <li>
                                                <img src="images/landing_14/check.svg" alt="alt" /> 
                                                <p>কালো এবং সাদা কালার ফ্লোরাল গোটা প্যাটি ভেলভেট শাড়ি</p>
                                            </li>

                                            <li>
                                                <img src="images/landing_14/check.svg" alt="alt" /> 
                                                <p>আমাদের  শাড়ির প্রধান উপাদান ধুপিয়ান</p>
                                            </li>

                                            <li>
                                                <img src="images/landing_14/check.svg" alt="alt" /> 
                                                <p>অতিরিক্ত ব্লাউজ পিস থাকবে</p>
                                            </li>

                                            <li>
                                                <img src="images/landing_14/check.svg" alt="alt" /> 
                                                <p>12 হাট বোহর</p>
                                            </li>

                                            <li>
                                                <img src="images/landing_14/check.svg" alt="alt" /> 
                                                <p>ক্যাজুয়াল , পার্টি , এন্ড ফেস্টিভ্যাল  ওকেশন  পড়ার মত শাড়ি</p>
                                            </li>




                                        </ul>
                            
                                    </div>
                            </Col>


                        </Row>

                        <div className="section_gap"></div>    

                        <h3 className='GiftH3'>আমাদের এই প্রিমিয়াম মানের শাড়ি গুলো  10,000+ পিচ বিক্রি হয়েছে</h3>


                    


                    </Container>

                </div>

                                        

            </section>
            


            {/* ================================================================================================
                Priceing
            ====================================================================================================*/}
            <section>

                <Container>

                <div className='PriceBox'>

                    <img className='priceImgBg' src="images/landing_14/img14.png" alt="" />

                    <div className='PriceBoxTxtDiv'>

                        <h4>451+ রেগুলার ক্রেতা</h4>

                        <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <br />

                        <h3>1,500.00 টাকা</h3>

                        <Link href='#placeAnOrder' className="bg bg4"> অর্ডার করুন </Link>


                    </div>


                </div>

            


                </Container>

            </section>


            <div className="section_gap GapNone"></div>    

            
        <section className=" OrderBg"  >

            <img className='FooterAbs1' src="images/landing_14/img20.png" alt="img" />

            <img className='FooterAbs2' src="images/landing_14/img20.png" alt="img" />

            {/* ================================================================================================
                Order Comfirm 
            ====================================================================================================*/}

                <section id="placeAnOrder">

                    <Order></Order>

                </section>




            <div className="section_gap"></div>    

            {/* ===========================================================================
                    Footer 
            ===============================================================================*/}

            <div className='FooterBg'>

                <Container>

                    <div className='footerLogoDiv'> 

                        <img className='footerLogo' src="images/landing_14/logo2.png" alt="" />


                        <Row>

                            <Col sm={12} md={4}>

                                <div className='FooterUlBox'>
                                    <h4>Contact Us</h4>

                                    <ul>
                                        <li> <IoCall/> <Link href="">+8801894844452</Link></li>
                                        <li> <IoIosMail/> <Link href="">support@funnelliner.com</Link></li>
                                    </ul>

                                </div>
                                

                            </Col>

                            <Col sm={12} md={4}>

                            <div className='FooterUlBox midUl'>

                                <h4>অর্ডার পেতে কল করুন এই নাম্বারে</h4>
                                <h5>+8801894844452</h5>

                                <div className='SocialIconBox'>
                                    
                                    <Link href="#"> <BsFacebook/> </Link>
                                    <Link href="#"> <BsInstagram/> </Link>
                                    <Link href="#"> <BsYoutube/> </Link>
                                    
                                </div>


                            </div>


                            </Col>

                            <Col sm={12} md={4}>

                            <div className='FooterUlBox'>

                                    <h4>Important Link</h4>

                                    <ul>

                                        <li> <img src="images/landing_14/check.svg" alt="alt" />  <Link href=""> Refund Policy </Link></li>
                                        <li> <img src="images/landing_14/check.svg" alt="alt" />  <Link href="">Privacy Policy</Link></li>
                                        <li> <img src="images/landing_14/check.svg" alt="alt" />  <Link href="">Terms and Conditions</Link></li>

                                    </ul>

                                </div>


                            </Col>

                        </Row>

                    </div>


                    <div className='HrTxt'>

                        <span>KEEP IN TOUCH</span>

                    </div>

                    <div className='Hr'>  </div>

                    
                
                    {/* Tiny Footer */}

                    <div className="tinyFooter">
                        
                        <p>@ {year} All Rights Reserved </p>
                        <p>System developed by <Link href='https://funnelliner.com/'>Funnel Liner</Link> </p>

                    </div>


                </Container>


            </div>




            </section>


        
        </div>

    )

}

export default index
