import { Link, useNavigate, useParams } from "react-router-dom";
import instance from "../axiosInstance";
import Swal from "sweetalert2";
import { useState } from "react";

export default function Card({ coins }) {
  const navigate = useNavigate();
  const { coinId } = useParams();
  const [addCoin, setAddCoin] = useState([]);
  // POST /usercoins/:coinId

  const addData = async () => {
    try {
      const { data } = await instance.post(`/usercoins/${coins.id}`, addCoin, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      Swal.fire({
        title: "Good job!",
        text: "Success to add data!",
        icon: "success",
      });

      setAddCoin(data);
      navigate("/my-coins");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={coins.logo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{coins.symbol}</h5>
        <p className="card-text">{coins.name}</p>
        <p className="card-text">{coins.description}</p>
        <div className="d-flex justify-content-center ">
          <Link
            onClick={addData}
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
