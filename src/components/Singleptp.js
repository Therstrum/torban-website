import React from "react";
import { useGlobalContext } from "../context";

export const Singleptp = ({ ptp }) => {
  const { PtpList } = useGlobalContext();

  const { name, img, items } = PtpList.find(
    (item) => item.id === parseInt(ptp)
  );

  return (
    <div className="ptp-modal">
      <article>
        <img src={img} alt={name} />
        <ul>
          {items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </article>
    </div>
  );
};
