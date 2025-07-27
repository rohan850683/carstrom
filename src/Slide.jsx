import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Slide = () => {
  return (
    // <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
    //   <div className="carousel-inner">
    //     <div className="carousel-item active" >
    //       <img
    //         src="https://www.marutisuzuki.com/assets/Configurator/v2/2d-images/swift/Desktop/Day/sizzling-red-with-black/Angle1.png"
    //         className="d-block w-100"
    //         alt="Slide 1"
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img
    //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRgJJdeBeQB169E4QaRumV-ytwh8j36bQ9g&s"
    //         className="d-block w-100"
    //         alt="Slide 2"
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img
    //         src="https://imgd.aeplcdn.com/1920x1080/n/cw/ec/121943/verna-facelift-exterior-right-front-three-quarter-100.jpeg?isig=0&q=80&q=80"
    //         className="d-block w-100"
    //         alt="Slide 3"
    //       />
    //     </div>
    //   </div>
    // </div>


    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.marutisuzuki.com/assets/Configurator/v2/2d-images/swift/Desktop/Day/sizzling-red-with-black/Angle1.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-862885,resizemode-75,msid-89901647/industry/auto/cars-uvs/tata-motors-launches-four-variants-of-nexon-top-trims.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://imgd.aeplcdn.com/1920x1080/n/cw/ec/121943/verna-facelift-exterior-right-front-three-quarter-100.jpeg?isig=0&q=80&q=80" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

// <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="https://www.marutisuzuki.com/assets/Configurator/v2/2d-images/swift/Desktop/Day/sizzling-red-with-black/Angle1.png" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-862885,resizemode-75,msid-89901647/industry/auto/cars-uvs/tata-motors-launches-four-variants-of-nexon-top-trims.jpg" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="https://imgd.aeplcdn.com/1920x1080/n/cw/ec/121943/verna-facelift-exterior-right-front-three-quarter-100.jpeg?isig=0&q=80&q=80" class="d-block w-100" alt="..."/>
//     </div>
//   </div>
// </div>
  );
};

export default Slide;
