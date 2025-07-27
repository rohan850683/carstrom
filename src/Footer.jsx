// import './Cart.css'
// export default function Footer(){
//     return(
//         <div>
            
// <footer class="footer">
//   <div class="footer-container">
//     <div class="footer-column">
//         <a href="#"><img src="carstrom.jpeg" alt="" className='st'/></a>
//      <div className="nom">
//      <h3>CarStrom</h3>
//      <p>Your trusted platform to buy and sell cars with confidence and ease.</p>
//      </div>
//     </div>

//     <div className="non">
//     <div class="footer-columns">
//       <h4>Quick Links</h4>
//       <ul>
//         <li><a href="/buy">Buy a Car</a></li>
//         <li><a href="/sell">Sell a Car</a></li>
//         <li><a href="/about">About Us</a></li>
//         <li><a href="/contact">Contact</a></li>
//       </ul>
//     </div>

//     <div class="footer-columns">
//       <h4>Contact</h4>
//       <p>Email: support@carstrom123.com</p>
//       <p>Phone: +91 800 123 4567</p>
//       <p>Location: 123 Auto Plaza, New York, NY</p>
//     </div>
//     </div>

//   <div className="moon">
//   <div class="footer-columns">
//       <h4>Follow Us</h4>
//       <div class="social-icons">
//         <a href="#"><i class="fab fa-facebook-f"></i></a>
//         <a href="#"><i class="fab fa-twitter"></i></a>
//         <a href="#"><i class="fab fa-instagram"></i></a>
//         <a href="#"><i class="fab fa-youtube"></i></a>
//       </div>
//     </div>
//   </div>
//   </div>
//   <div class="footer-bottom">
//     <p>&copy; 2025 CarStrom. All rights reserved.</p>
//   </div>
// </footer>

//         </div>
//     )
// }

import './Cart.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column brand">
          <a href="#"><img src="carstrom.jpeg" alt="CarStrom Logo" className="st" /></a>
          <div className="nom">
            <h3>CarStrom</h3>
            <p>Your trusted platform to buy and sell cars with confidence and ease.</p>
          </div>
        </div>

        <div className="footer-column quick-contact">
          <div className="footer-columns">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/buy">Buy a Car</a></li>
              <li><a href="/sell">Sell a Car</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-columns">
            <h4>Contact</h4>
            <p>Email: support@carstrom123.com</p>
            <p>Phone: +91 800 123 4567</p>
            <p>Location: 123 Auto Plaza, New York, NY</p>
          </div>
        </div>

        <div className="footer-column social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 CarStrom. All rights reserved.</p>
      </div>
    </footer>
  );
}
