import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export function Home() {
  // const authContext = useAuth()
  const { user } = useAuth();

  return (
    <>
      <h1>Home</h1>
      <Link to={"/login"}>
        <button className="btn btn-primary">LogIn</button>
      </Link>
      <Link to={"/register"}>
        <button className="btn btn-danger">Sign up</button>
      </Link>
    </>
  );
}
