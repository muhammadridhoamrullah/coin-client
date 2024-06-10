import { useEffect, useState } from "react";
import instance from "../axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function UpdateMyCoin() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editCoin, setEditCoin] = useState({
    quantity: 0,
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setEditCoin({
      ...editCoin,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await instance.put(`/usercoins/${id}`, editCoin, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setEditCoin(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDetailData = async () => {
    try {
      const { data } = await instance.get(`/usercoins/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      console.log(data, "ini data");

      setEditCoin({
        ...editCoin,
        quantity: fetchDetailData.quantity,
      });
      console.log(editCoin, "<< edit");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetailData();
  }, []);
  return (
    <div className="container">
      <div className="text-center">
        <h1>Update MyCoin</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="quantity"
            value={editCoin.quantity}
            onChange={changeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
