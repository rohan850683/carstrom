// export default function Cart({Image,Card,Some,Go}){
//     return(
//         <div>
//             <div class="card" style="width: 18rem;">
//   <img src={Image} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">{Card}</h5>
//     <p class="card-text">{Some}</p>
//     <a href="#" class="btn btn-primary">{Go}</a>
//   </div>
// </div>
//         </div>
//     )
// }
// import './Cart.css'
// import Model from './Model';

// export default function Cart({ Image, Card, Some, Go ,url}) {
//     return (
//         <div>
//             {/* <h1>Maruti Suzuki</h1> */}
//             <a href={url} style={{textDecoration:"none"}} className='call'>
//             <div className="card" style={{ width: "500px", height:"600px" }}>
//                 <img src={Image} className="card-img-top" alt="..."/>
//                 <div className="card-body">
//                     <h5 className="card-title">{Card}</h5>
//                     <p className="card-text">{Some}</p>
//                     <a href="#" className="btn btn-primary">{Go}</a>
//                 </div>
//             </div>
          
//             </a>
            
//         </div>
//     );
// }

import './Cart.css';
import Model from './Model';

export default function Cart({ Image, Card, Some, Go, url }) {
  return (
    <div className="cart-container">
      <a href={url} style={{ textDecoration: "none" }} className="card-link">
        <div className="custom-card">
          <img src={Image} className="card-img-top" alt={Card} />
          <div className="card-body">
            <h5 className="card-title">{Card}</h5>
            <p className="card-text">{Some}</p>
            <a href={url} className="btn btn-primary">{Go}</a>
          </div>
        </div>
      </a>
    </div>
  );
}

