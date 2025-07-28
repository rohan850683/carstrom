import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Slide from './Slide'
import Cart from './Cart'
import Tata from './Tata'
import Toyta from './Toyta'
import Bmw from './Bmw'
import Mahi from './Mahi'
import Footer from './Footer'
import React from 'react';
import Contact from './Contact';
import Model from './Model'
import Wagnor from './Wagnor'
import Tigor from './Tigor'
import Punch from './Punch'


import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";






import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Alto from './Alto'
import Baleno from './Baleno'
import Xl6 from './Xl6'
import Ertiga from './Ertiga'
import Tiago from './Tiago'
import Safa from './Your'
import Your from './Your'
import Nexon from './Nexon'
import Curvv from './Curvv'
import Fortuner from './Fortuner'
import Glanza from './Glanza'
import Innova from './Innova'
import Supra from './Supra'
import Cross from './Cross'
import Hilux from './Hilux'
import M4 from './M4'
import M5 from './M5'
import M8 from './M8'
import X1 from './X1'
import Ix from './Ix'
import XM from './Top'
import Xm from './Top'
import Top from './Top'
import Xuv700 from './Xuv700'
import Thar from './Thar'
import Scor from './Scor'
import Bolero from './Bolero'
import Bee from './Bee'
import Aluts from './Aluts'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
        <Nav/>
        <Slide/>
        {/* <div className="void-section">
  <h1 className="section-title"></h1>

  <div className="container car-section">
    <Cart Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0ULs5E-JppjB_CuPgkaM79cbhz5yO-VYHg&s" Card="Swift" Some="The Maruti Suzuki Swift is a popular compact hatchback known for its sporty design..." Go="Buy Now" url="http://localhost:5173/model" />
    <Cart Image="https://img.autocarindia.com/ExtraImages/20241218020740_20190131081704_2019_Maruti_Wagon_R_front_1.jpg" Card="Wagnor" Some="This perfect combination of space, fuel efficiency, reliability..." Go="Buy Now" url="http://localhost:5173/wagnor" />
    <Cart Image="https://imgd-ct.aeplcdn.com/664x415/n/xbceora_1420353.jpg?q=80" Card="Alto" Some="The Maruti Suzuki Alto K10 refers to the model generations..." Go="Buy Now" url="http://localhost:5173/alto" />
    <Cart Image="https://imgcdn.sayaratbay.com/large/gallery/exterior/39/1760/suzuki-baleno-front-angle-low-view-830235.jpg" Card="Baleno" Some="The Maruti Suzuki Baleno is a premium hatchback available in India..." Go="Buy Now" url="http://localhost:5173/baleno" />
    <Cart Image="https://cdn1.smartprix.com/rx-icWV0pwfw-w420-h420/maruti-suzuki-xl6-al.webp" Card="XL6" Some="The Maruti Suzuki XL6 is a 6-seater premium MPV..." Go="Buy Now" url="http://localhost:5173/xl6" />
    <Cart Image="https://img.autocarindia.com/Galleries/20181122013407_New-Ertiga-front-static.jpg?w=640&q=75" Card="Ertiga" Some="The Maruti Suzuki Ertiga is a popular 7-seater MPV..." Go="Buy Now" url="http://localhost:5173/ertiga" />
  </div>
</div> */}

<div className="section-container">
  <h1 className="section-title">Maruti Suzuki</h1>
  <div className="car-section">
  <Cart Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0ULs5E-JppjB_CuPgkaM79cbhz5yO-VYHg&s" Card="Swift" Some="The Maruti Suzuki Swift is a popular compact hatchback known for its sporty design..." Go="Buy Now" url="http://localhost:5173/model" />
    <Cart Image="https://img.autocarindia.com/ExtraImages/20241218020740_20190131081704_2019_Maruti_Wagon_R_front_1.jpg" Card="Wagnor" Some="This perfect combination of space, fuel efficiency, reliability..." Go="Buy Now" url="http://localhost:5173/wagnor" />
    <Cart Image="https://imgd-ct.aeplcdn.com/664x415/n/xbceora_1420353.jpg?q=80" Card="Alto" Some="The Maruti Suzuki Alto K10 refers to the model generations..." Go="Buy Now" url="http://localhost:5173/alto" />
    <Cart Image="https://imgcdn.sayaratbay.com/large/gallery/exterior/39/1760/suzuki-baleno-front-angle-low-view-830235.jpg" Card="Baleno" Some="The Maruti Suzuki Baleno is a premium hatchback available in India..." Go="Buy Now" url="http://localhost:5173/baleno" />
    <Cart Image="https://cdn1.smartprix.com/rx-icWV0pwfw-w420-h420/maruti-suzuki-xl6-al.webp" Card="XL6" Some="The Maruti Suzuki XL6 is a 6-seater premium MPV..." Go="Buy Now" url="http://localhost:5173/xl6" />
    <Cart Image="https://img.autocarindia.com/Galleries/20181122013407_New-Ertiga-front-static.jpg?w=640&q=75" Card="Ertiga" Some="The Maruti Suzuki Ertiga is a popular 7-seater MPV..." Go="Buy Now" url="http://localhost:5173/ertiga" />
  </div>
</div>
{/* 
<div className="brand-section">
  <h1 className="section-title">Tata Motors</h1>

  <div className="container car-grid">
    <Cart Image="https://lh3.googleusercontent.com/proxy/zPRKayY8ajByp1r5XpevlM_ySC_EVJcojyIhYQqH11mw0Bj0YoO-Qtvr3rAUlL6f_uy-kvhrlN40i4QOosV3iR5SLbm87xG8qu3GorZtyXkFT4ETqxsQ2QWV" Card="Tiago" Some="The Tata Tiago is a popular compact hatchback..." Go="Buy Now" url="http://localhost:5173/tiago" />
    <Cart Image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tigor/10670/1738151234612/front-left-side-47.jpg" Card="Tigor" Some="The Tata Tigor is a subcompact sedan known for its stylish design..." Go="Buy Now" url="http://localhost:5173/tigor" />
    <Cart Image="https://www.netcarshow.com/Tata-Punch-2022-Front_Three-Quarter.9cf259a3.jpg" Card="Punch" Some="The Tata Punch is a compact SUV known for its safety..." Go="Buy Now" url="http://localhost:5173/punch" />
    <Cart Image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Safari/9485/1741331784853/front-left-side-47.jpg" Card="Safari" Some="The Tata Safari is a 7-seater SUV known for its spaciousness..." Go="Buy Now" url="http://localhost:5173/safari" />
    <Cart Image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/9675/1751559838445/front-wiper-96.jpg" Card="Nexon" Some="The Tata Nexon is a subcompact SUV offered in petrol, diesel, and electric..." Go="Buy Now" url="http://localhost:5173/nexon" />
    <Cart Image="https://www.spinny.com/blog/wp-content/uploads/2024/02/Tata-Curvv-1.jpg" Card="Curvv" Some="The Tata Curvv is a coupe SUV launched in India in 2024..." Go="Buy Now" url="http://localhost:5173/curvv" />
  </div>
</div> */}


<div className="section-container">
  <h1 className="section-title">Tata Motors</h1>
  <div className="car-section">
  <Cart Image="https://lh3.googleusercontent.com/proxy/zPRKayY8ajByp1r5XpevlM_ySC_EVJcojyIhYQqH11mw0Bj0YoO-Qtvr3rAUlL6f_uy-kvhrlN40i4QOosV3iR5SLbm87xG8qu3GorZtyXkFT4ETqxsQ2QWV" Card="Tiago" Some="The Tata Tiago is a popular compact hatchback..." Go="Buy Now" url="http://localhost:5173/tiago" />
    <Cart Image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tigor/10670/1738151234612/front-left-side-47.jpg" Card="Tigor" Some="The Tata Tigor is a subcompact sedan known for its stylish design..." Go="Buy Now" url="http://localhost:5173/tigor" />
    <Cart Image="https://www.netcarshow.com/Tata-Punch-2022-Front_Three-Quarter.9cf259a3.jpg" Card="Punch" Some="The Tata Punch is a compact SUV known for its safety..." Go="Buy Now" url="http://localhost:5173/punch" />
    <Cart Image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Safari/9485/1741331784853/front-left-side-47.jpg" Card="Safari" Some="The Tata Safari is a 7-seater SUV known for its spaciousness..." Go="Buy Now" url="http://localhost:5173/safari" />
    <Cart Image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/9675/1751559838445/front-wiper-96.jpg" Card="Nexon" Some="The Tata Nexon is a subcompact SUV offered in petrol, diesel, and electric..." Go="Buy Now" url="http://localhost:5173/nexon" />
    <Cart Image="https://www.spinny.com/blog/wp-content/uploads/2024/02/Tata-Curvv-1.jpg" Card="Curvv" Some="The Tata Curvv is a coupe SUV launched in India in 2024..." Go="Buy Now" url="http://localhost:5173/curvv" />
  </div>
</div>

{/* 
<div className="brand-section">
  <h1 className="section-title">Toyota</h1>

  <div className="car-grid">
    <Cart Image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner-Legender/10229/1749726924621/front-left-side-47.jpg" Card="Fortuner" Some="The Toyota Fortuner is a popular, robust SUV known for its reliability and powerful engine options..." Go="Buy Now" url="http://localhost:5173/fortuner" />
    <Cart Image="https://www.tyremarket.com/tyremantra/wp-content/uploads/2020/04/toyota-glanza.jpg" Card="Glanza" Some="The Toyota Glanza is a premium hatchback, essentially a rebadged Maruti Suzuki Baleno..." Go="Buy Now" url="http://localhost:5173/glanza" />
    <Cart Image="https://imagecdnsa.zigwheels.ae/large/gallery/exterior/40/1867/toyota-innova-hycross-front-angle-low-view-446020.jpg" Card="Innova" Some="The Toyota Innova is a popular MPV known for its reliability and spaciousness..." Go="Buy Now" url="http://localhost:5173/innova" />
    <Cart Image="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/64725b6d365a8f001d7f50a1.jpg" Card="Supra" Some="The Toyota Supra MK4 is a legendary sports car known for its powerful turbocharged engine..." Go="Buy Now" url="http://localhost:5173/supra" />
    <Cart Image="https://media.ed.edmunds-media.com/toyota/corolla-cross/2025/oem/2025_toyota_corolla-cross_4dr-suv_l_fq_oem_1_1280.jpg" Card="Corolla-Cross" Some="The Toyota Corolla Cross is a compact crossover offering versatility and space..." Go="Buy Now" url="http://localhost:5173/cross" />
    <Cart Image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Hilux/10924/1691990326111/front-left-side-47.jpg" Card="Hilux" Some="The Toyota Hilux is a tough pickup truck known for its off-road capabilities and durability..." Go="Buy Now" url="http://localhost:5173/hilux" />
  </div>
</div> */}



<div className="section-container">
  <h1 className="section-title">Toyota</h1>
  <div className="car-section">
    <Cart Image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner-Legender/10229/1749726924621/front-left-side-47.jpg" Card="Fortuner" Some="The Fortuner is a popular Car. Manufactured by the Japanese automaker Toyota since 2004.." Go="Buy Now" url="http://localhost:5173/xuv700" />
    <Cart Image="https://www.tyremarket.com/tyremantra/wp-content/uploads/2020/04/toyota-glanza.jpg" Card="Glanza" Some="The Glanza is a rugged and powerful Car. Its is under budget car" Go="Buy Now" url="http://localhost:5173/thar" />
    <Cart Image="https://imagecdnsa.zigwheels.ae/large/gallery/exterior/40/1867/toyota-innova-hycross-front-angle-low-view-446020.jpg" Card="Innova" Some="The Innova Classic is a rugged and powerful SUV. Large in Space" Go="Buy Now" url="http://localhost:5173/scorpio" />
    <Cart Image="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/64725b6d365a8f001d7f50a1.jpg" Card="Supra" Some="The Supra is a popular utility vehicle in India.Most famous Vehicle in India" Go="Buy Now" url="http://localhost:5173/bolero" />
    <Cart Image="https://media.ed.edmunds-media.com/toyota/corolla-cross/2025/oem/2025_toyota_corolla-cross_4dr-suv_l_fq_oem_1_1280.jpg" Card="Corolla-Cross" Some="The Corolla-Cross is an upcoming powerful SUV. This is powerful" Go="Buy Now" url="http://localhost:5173/be-6" />
    <Cart Image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Hilux/10924/1691990326111/front-left-side-47.jpg" Card="Hilux" Some="The Hilux 4x4 is a large, 7-seate SUV. the use of four-wheel drive. It solid front axle suspension. " Go="Buy Now" url="http://localhost:5173/alturas" />
  </div>
</div>


<div className="brand-section">
  <h1 className="section-title">BMW</h1>

  <div className="car-grid">
    <Cart Image="https://www.completecar.ie/img/news/13283_large.jpg" Card="M4" Some="The BMW M4 is a high-performance coupe and convertible..." Go="Buy Now" url="http://localhost:5173/m4" />
    <Cart Image="https://carindia.in/wp-content/uploads/2021/07/P90391325_highRes_the-new-bmw-m5-compe-798x532.jpg" Card="M5" Some="The BMW M5 is a high-performance version of the BMW 5 Series sedan..." Go="Buy Now" url="http://localhost:5173/m5" />
    <Cart Image="https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m8-competition-coupe-101-663a3bf57a59c.jpg?crop=0.771xw:0.291xh;0.189xw,0.542xh&resize=2048:*" Card="M8" Some="The BMW 8 Series is a line of luxury grand tourers..." Go="Buy Now" url="http://localhost:5173/m8" />
    <Cart Image="https://cdn.prod.website-files.com/658041bea130e32d347c0f3e/658041bea130e32d347c1280_test-bmw-x1-sdrive-18d%20(1).webp" Card="X1" Some="The BMW X1 is a subcompact luxury crossover SUV..." Go="Buy Now" url="http://localhost:5173/x1" />
    <Cart Image="https://www.bowkermotorgroup.co.uk/wp-content/uploads/2025/04/P90585145_highRes_the-new-bmw-ix-xdriv-scaled.jpg" Card="IX" Some="The BMW iX is a fully electric luxury SUV. Most Famous car" Go="Buy Now" url="http://localhost:5173/IX" />
    <Cart Image="https://namastecar.com/wp-content/uploads/2024/09/Luxury-on-Wheels-Indias-Only-BMW-XM-Label-Edition-Sells-for-INR-3.15-Crore.jpeg" Card="XM" Some="The BMW XM is a plug-in hybrid SUV and the first standalone M model since the M1..." Go="Buy Now" url="http://localhost:5173/xm" />
  </div>
</div>



    
    <div className="section-container">
  <h1 className="section-title">Mahindra</h1>
  <div className="car-section">
    <Cart Image="https://media.assettype.com/evoindia/2021-08/1c32d636-7de7-4af3-a631-3a89fa2bbba1/xuv700hero.jpeg" Card="XUV700" Some="The Mahindra XUV700 is a popular SUV. This new model SUV" Go="Buy Now" url="http://localhost:5173/xuv700" />
    <Cart Image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar/10743/1690192572470/front-view-118.jpg" Card="Thar" Some="The Mahindra Thar is a rugged and powerful SUV..." Go="Buy Now" url="http://localhost:5173/thar" />
    <Cart Image="https://media.zigcdn.com/media/content/2023/Mar/cover_63ff11009a034.jpg" Card="Scorpio" Some="The Mahindra Scorpio Classic is a rugged and powerful SUV..." Go="Buy Now" url="http://localhost:5173/scorpio" />
    <Cart Image="https://media.zigcdn.com/media/model/2025/Apr/model-extimg-1115094884_930x620.jpg" Card="Bolero" Some="The Mahindra Bolero is a popular utility vehicle in India..." Go="Buy Now" url="http://localhost:5173/bolero" />
    <Cart Image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/BE-6/9263/1739189295831/front-left-side-47.jpg" Card="BE-6" Some="The Mahindra BE 6 is an upcoming electric SUV..." Go="Buy Now" url="http://localhost:5173/be-6" />
    <Cart Image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Alturas-G4/7796/1637149131222/front-left-side-47.jpg" Card="Alturas-G4" Some="The Mahindra Alturas G4 is a large, 7-seater SUV..." Go="Buy Now" url="http://localhost:5173/alturas" />
  </div>
</div>

    <Footer/>
        </div>
      
      ),
    },
    {
      path: "contact",
      element: <div>
<Contact/>
      </div>,
    },

    {
      path: "model",
      element: <div>
<Model/>
      </div>,
    },
    {
      path: "wagnor",
      element: <div>
<Wagnor/>
      </div>,
    },
    {
      path: "alto",
      element: <div>
<Alto/>
      </div>,
    },
    {
      path: "baleno",
      element: <div>
<Baleno/>
      </div>,
    },
    {
      path: "xl6",
      element: <div>
<Xl6/>
      </div>,
    }, {
      path: "ertiga",
      element: <div>
<Ertiga/>
      </div>,
    },
    {
      path: "tiago",
      element: <div>
<Tiago/>
      </div>,
    },
    {
      path: "tigor",
      element: <div>
<Tigor/>
      </div>,
    },
    {
      path: "punch",
      element: <div>
<Punch/>
      </div>,
    },
    {
      path: "safari",
      element: <div>
<Your/>
      </div>,
    },
    {
      path: "nexon",
      element: <div>
<Nexon/>
      </div>,
    },
    
    {
      path: "fortuner",
      element: <div>
<Fortuner/>
      </div>,
    },
    {
      path: "glanza",
      element: <div>
<Glanza/>
      </div>,
    },
    {
      path: "innova",
      element: <div>
<Innova/>
      </div>,
    },
    {
      path: "supra",
      element: <div>
<Supra/>
      </div>,
    },
    {
      path: "cross",
      element: <div>
<Cross/>
      </div>,
    },
    {
      path: "hilux",
      element: <div>
<Hilux/>
      </div>,
    },
    {
      path: "m4",
      element: <div>
<M4/>
      </div>,
    },
    {
      path: "m5",
      element: <div>
<M5/>
      </div>,
    },
    {
      path: "m8",
      element: <div>
<M8/>
      </div>,
    },
    {
      path: "x1",
      element: <div>
<X1/>
      </div>,
    },
    {
      path: "ix",
      element: <div>
<Ix/>
      </div>,
    },
    {
      path: "xm",
      element: <div>
<Top/>
      </div>,
    },
    {
      path: "xuv700",
      element: <div>
<Xuv700/>
      </div>,
    },
    {
      path: "thar",
      element: <div>
<Thar/>
      </div>,
    },
    {
      path: "scorpio",
      element: <div>
<Scor/>
      </div>,
    },
    {
      path: "bolero",
      element: <div>
<Bolero/>
      </div>,
    },
    {
      path: "be-6",
      element: <div>
<Bee/>
      </div>,
    },
    {
      path: "alturas",
      element: <div>
<Aluts/>
      </div>,
    },
  
  
  
  ]);

  return (
    <>
   
    


   
   <RouterProvider router={router} />
    

    




    </>
  )
}

export default App
