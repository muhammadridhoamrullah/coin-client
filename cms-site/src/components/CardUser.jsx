import { Link } from "react-router-dom";

export default function CardUser({ mycoins }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={mycoins.Coin.logo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{mycoins.Coin.symbol}</h5>
        <p className="card-text">{mycoins.Coin.name}</p>
        <p className="card-text">
          {mycoins.quantity} {mycoins.Coin.name}
        </p>
        <div className="d-flex justify-content-center ">
          <Link className="btn btn-warning ">Update</Link>
        </div>
        <div className="d-flex justify-content-center ">
          <Link className="btn btn-danger">Delete</Link>
        </div>
      </div>
    </div>
  );
}
