import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register() {
  let navigate = useNavigate();
  function submitForm(e) {
    setLoading(true);
    e.preventDefault();
    sendDate();
  }
  const [Loading, setLoading] = useState(false);

  const [Error, setError] = useState("");
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    password: "",
  });
  function getUserDate(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    // console.log(myUser)
  }
  async function sendDate() {
    let { data } = await axios.post(
      `https://route-movies-api.vercel.app/signup`,
      user
    );
    if (data.message == "success") {
      setLoading(false);
      navigate("/login");
    } else {
      setLoading(false);

      setError(data.message);
    }

    // console.log(data)
  }

  return (
    <>
      {Error.length > 0 ? (
        <div className="alert alert-info my-2">{Error}</div>
      ) : (
        ""
      )}
      <h3 className="py-2">Register Now</h3>
      <form onSubmit={submitForm} className="py-4">
        <label htmlFor="first_name">FirstName :</label>
        <input
          onChange={getUserDate}
          className="form-control my-3"
          type="text"
          name="first_name"
          id="first_name"
        />
        <label htmlFor="last_name">LastName :</label>
        <input
          onChange={getUserDate}
          className="form-control my-3"
          type="text"
          name="last_name"
          id="last_name"
        />
        <label htmlFor="age">Age :</label>
        <input
          onChange={getUserDate}
          className="form-control my-3"
          type="number"
          name="age"
          id="age"
        />
        <label htmlFor="email">Email :</label>
        <input
          onChange={getUserDate}
          className="form-control my-3"
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password :</label>
        <input
          onChange={getUserDate}
          className="form-control my-3"
          type="password"
          name="password"
          id="password"
        />
        <button className="btn btn-info " type="submit">
          {Loading == true ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            "SignUp"
          )}
        </button>
      </form>
    </>
  );
}
