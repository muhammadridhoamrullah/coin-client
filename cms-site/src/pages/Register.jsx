import { useState } from "react";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [regisForm, setRegisForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setRegisForm({
      ...regisForm,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await instance.post("/register", regisForm);

      Swal.fire({
        title: "Good job!",
        text: "You success to register!",
        icon: "success",
      });

      console.log(data);
      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputfullName1" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputfullName1"
            aria-describedby="fullNameHelp"
            name="fullName"
            value={regisForm.fullName}
            onChange={changeHandler}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={regisForm.email}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={regisForm.password}
            onChange={changeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <p>
          Do you have an account?{" "}
          <Link style={{ color: "blue", textDecoration: "none" }} to={"/login"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
