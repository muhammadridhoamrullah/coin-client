import { useEffect, useState } from "react";
import CardUser from "../components/CardUser";
import instance from "../axiosInstance";

export default function MyCoins() {
  const [mycoins, setMyCoins] = useState([]);

  async function fetchDataMyCoins() {
    try {
      const { data } = await instance.get("/usercoins", {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setMyCoins(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    fetchDataMyCoins();
  }, []);
  return (
    <div className="container">
      <div className="row gap-3 justify-content-around">
        {mycoins.map((el) => {
          return (
            <CardUser
              key={el.id}
              mycoins={el}
              fetchDataMyCoins={fetchDataMyCoins}
            />
          );
        })}
      </div>
    </div>
  );
}
