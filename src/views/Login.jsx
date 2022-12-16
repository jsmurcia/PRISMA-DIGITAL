import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { prismaDigitalApi } from "../api/prismaDigitalApi";
import { Button } from "../components/button";
import { Header } from "../components/header";
import { Input } from "../components/input";

export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    password: "",
    email: "",
  });
  const { password, email } = user;
  const [error, setError] = useState(false);
  const [InvalidData, setInvalidData] = useState(false);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setError(false);
    if (!password || !email) return setError(true);

    const { data } = await prismaDigitalApi.post("/login", {
      clave: password,
      username: email,
    });

    if (data.login) return navigate(`/Movimientos/${data.username}`);
    if (!data.login) return setInvalidData(true);
  };

  return (
    <div className="w-screen h-full">
      <Header />
      <form className="w-11/12 sm:w-6/12 lg:w-4/12 mx-auto h-3/6 mt-12 flex flex-col gap-3">
        <Input
          label="User"
          type="email"
          name="email"
          onChange={handleInputChange}
          error={error && !email}
          value={email}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          onChange={handleInputChange}
          error={error && !password}
          value={password}
        />
        {
          InvalidData&&<h2 className="font-bold text-red-700">Usuario o contraseña invalido</h2>
        }
        <Button text="Login" onClick={submit} />
      </form>
    </div>
  );
};
