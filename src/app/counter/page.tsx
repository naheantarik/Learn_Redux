"use client";
import React from "react";
import Counter from "../components/counter/Counter";

const CounterPage = () => {
  return (
    <section>
      <div className="flex items-center justify-center mt-10">
        <Counter />
      </div>
    </section>
  );
};

export default CounterPage;
