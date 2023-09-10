"use client";
import Image from "next/image";
import food from "public/food0.png";
import React, { useEffect, useState } from "react";

export default function List() {
  let 상품 = ["tomatoes", "pasta", "coconut"];
  let [수량, 수량변경] = useState([0, 0, 0]);

  let products = ["A", "B", "C"];
  let [amount, amt_change] = useState([0, 0, 0]);

  return (
    <div>
      <h4 className="title">상품목록</h4>

      <span>{수량[0]}</span>
      <button
        onClick={() => {
          let copy = [...수량]; //독립적인 array 만들어서 복사해줘
          copy[0]++;
          수량변경(copy);
        }}
      >
        +
      </button>

      <span>{수량[1]}</span>
      <button
        onClick={() => {
          let copy = [...수량];
          copy[1]++;
          수량변경(copy);
        }}
      >
        +
      </button>

      <span>{수량[2]}</span>
      <button>+</button>

      {products.map((a, i) => {
        return (
          <div className="food" key={i}>
            <Image
              width={128}
              height={180}
              src={`/food${i}.png`}
              className="food-img"
            />
            <h4>{a} 40$</h4>
            <span> {amount[i]} </span>
            <button
              onClick={() => {
                let copy = [...amount];
                copy[i]++;
                amt_change(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
