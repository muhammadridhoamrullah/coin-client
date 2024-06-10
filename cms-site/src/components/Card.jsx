import { Link } from "react-router-dom";

export default function Card({ coins }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={coins.logo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{coins.symbol}</h5>
        <p className="card-text">{coins.name}</p>
        <p className="card-text">{coins.description}</p>
        <div className="d-flex justify-content-center ">
          <Link
            className="btn btn-info"
            style={{ color: "white", backgroundColor: "blue" }}
          >
            Add
          </Link>
        </div>
      </div>
    </div>
  );
}
