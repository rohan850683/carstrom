import './Cart.css'

export default function Cart({ Image, Card, Some, Go }) {
    return (
        <div>
            {/* <h1>Maruti Suzuki</h1> */}
            <div className="card" style={{ width: "500px", height:"600px" }}>
                <img src={Image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{Card}</h5>
                    <p className="card-text">{Some}</p>
                    <a href="#" className="btn btn-primary">{Go}</a>
                </div>
            </div>
          
        </div>
    );
}
