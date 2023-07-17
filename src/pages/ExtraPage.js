import React, { useEffect, useState } from "react";
import { Main, Header, Footer } from "../components/import";
import { Nav } from "../components/Header";
import axios from "axios";

const Phyton = () => {
  return (
    <>
      <Nav />
      <Pro />
      <Footer />
    </>
  );
};

function Pro() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return <>fgfgf</>;
}

export default Phyton;
