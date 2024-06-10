import { Link, useNavigate } from "react-router-dom";
import instance from "../axiosInstance";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function CardUser({ mycoins, fetchDataMyCoins }) {
  const navigate = useNavigate();
  const deleteHandler = async () => {
    try {
      const { data } = await instance.delete(`/usercoins/${mycoins.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      Swal.fire({
        title: "Good job!",
        text: "Success to delete data!",
        icon: "success",
      });

      fetchDataMyCoins();
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };

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
          <Link
            to={`/update-my-coin/${mycoins.id}`}
            className="btn btn-warning "
          >
            Update
          </Link>
        </div>
        <div className="d-flex justify-content-center ">
          <Link onClick={deleteHandler} className="btn btn-danger">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}
