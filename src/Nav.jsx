import './index.css';
// import logo from './bg.png';

export default function Nav() {
  return (
    <div  className="container-fluid lol navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          {/* <img src="" alt="Logo" height="50" width="50" className="me-2" /> */}
          <span style={{ fontFamily: 'Monaco', fontWeight: 'bold' }}>CarStrom</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <form className="d-flex ms-auto me-4" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center gap-3">
            {[
              { label: "Home's", icon: 'fa-house', link: '#' },
              { label: "Cart's", icon: 'fa-cart-shopping', link: '#' },
              { label: "Wishlist's", icon: 'fa-bag-shopping', link: '#' },
              { label: "Offer's", icon: 'fa-percent', link: '#' },
              { label: "Deal's", icon: 'fa-handshake', link: '#' },
              { label: 'About us', icon: 'fa-earth-americas', link: '#' },
              { label: "Service's", icon: 'fa-screwdriver-wrench', link: '#' },
              { label: "Contact us", icon: 'fa-solid fa-phone', link: 'contact' },
            ].map(({ label, icon, link }) => (
              <li className="nav-item" key={label}>
                <a className="nav-link" href={link}>
                  <i className={`fa-solid ${icon}`} />
                  <span className="ms-2">{label}</span>
                </a>
              </li>
            ))}

           

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-bell" />
                <span className="ms-2">Information</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-cart-shopping" />
                    <span className="ms-2">Buy</span>
                  </a>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-credit-card" />
                    <span className="ms-2">Sell</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
}
