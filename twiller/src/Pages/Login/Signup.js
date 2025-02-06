import React from "react";
import { Link, useNavigate } from "react-router-dom";
import twitterimg from "../../image/twitter.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleButton from "react-google-button";
import { useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import "./login.css";

const Signup = () => {
  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [error, seterror] = useState("");
  const [password, setpassword] = useState("");
  const { Signup } = useUserAuth();
  const { googlesignin } = useUserAuth();
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await Signup(email, password);
      const user = {
        username: username,
        name: name,
        email: email,
      };
      await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            console.log(data);
          }
        });
    } catch (error) {
      seterror(error.message);
      window.alert(error.message);
      navigate('/')
    }
  };
  const hanglegooglesignin = async (e) => {
    e.preventDefault();
    try {
      await googlesignin();
      navigate("/");
    } catch (error) {
      console.log(error.message);
      window.alert(error.message);
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="image-container">
          <img src={twitterimg} className="image" alt="twitterimage" />
        </div>
        <div className="form-container"></div>
        <div className="">
          <TwitterIcon className="Twittericon" style={{ color: "skyblue" }} />
          <h2 className="heading">Happenig now </h2>
          <div className="d-flex align-items-sm-center">
            <h3 className="heading1">Join twiller today </h3>
          </div>
          {error && <p className="errorMessage">{error}</p>}
          <form onSubmit={handlesubmit}>
            <input
              className="display-name"
              style={{ backgroundColor: "red" }}
              type="username"
              placeholder="@username"
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              className="display-name"
              style={{ backgroundColor: "red" }}
              type="name"
              placeholder="Enter full Name"
              onChange={(e) => setname(e.target.value)}
            />
            <input
              className="email"
              style={{ backgroundColor: "red" }}
              type="Email Address"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              className="password"
              style={{ backgroundColor: "red" }}
              type="password"
              placeholder="password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <div className="btn-login">
              <button type="submit" className="btn">
                Sign Up
              </button>
            </div>
          </form>
          <hr />
          <div className="google-button">
            <GoogleButton
              className="g-btn"
              type="light"
              onClick={hanglegooglesignin}
            />
          </div>
        </div>
        <div>
          Already have an account
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "var(--twitter--color)",
              fontWeight: "600",
              marginLeft: "5px",
            }}
          >
            {" "}
            log In{" "}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Signup;
