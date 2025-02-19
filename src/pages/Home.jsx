import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { getFood } from "../api/Index";

const Home = () => {
  useEffect(() => {
    getFood().then((food) => console.log(food));
  }, []);

  return <h1>Muestra algo por favor</h1>;
};

export default Home;
