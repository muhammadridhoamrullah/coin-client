import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

export default function Coins() {
  const [coins, setCoins] = useState([]);
  const { coinId } = useParams();

  async function fetchData() {
    try {
      const { data } = await instance.get("/coins", {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setCoins(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="row gap-3 justify-content-around">
        {coins.map((el) => {
          return <Card key={el.id} coins={el} />;
        })}
      </div>
    </div>
  );
}
