import React from "react";
import { Hero } from "./_components/hero";
import PriceList from "./_components/price";
import Realised from "./_components/realised";
import About from "./_components/about";
import Form from "@/components/form";

const Homepage = () => {
  return (
    <>
      <div className="">
        <Hero />
        <About/>
        <PriceList />
        <Realised/>
        <Form/>
      </div>
    </>
  );
};

export default Homepage;
