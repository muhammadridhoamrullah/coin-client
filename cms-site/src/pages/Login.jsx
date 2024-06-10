import { useState } from "react";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await instance.post("/login", loginForm);

      localStorage.access_token = data.access_token;

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
    <div className="row justify-content-center align-items-center mt-5">
      <div className="col d-flex justify-content-end ">
        <img src={"https://account.asus.com/img/login_img02.png"} alt="" />
      </div>
      <div className="col d-flex justify-content-start">
        <div className="d-flex justify-content-center align-items-center mt-5">
          <form onSubmit={submitHandler}>
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
                value={loginForm.email}
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
                value={loginForm.password}
                onChange={changeHandler}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>

            <p>
              Don't have an account yet?{" "}
              <Link
                style={{ color: "blue", textDecoration: "none" }}
                to={"/register"}
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
