import React, { useState } from "react";
import CartData from "./CartData";

const AddToCart = ({ addPlayer, handleDeletePlayer }) => {
  return (
    <div className="sticky top-16 ">
      <div className="overflow-x-auto w-full">
        <h1 className="text-center font-bold my-2 text-xl text-[#9393eb]">
          Add Player Now
        </h1>
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {addPlayer.map((player, i) => (
              <CartData
                player={player}
                index={i}
                handleDeletePlayer={handleDeletePlayer}
                key={player.idPlayer}
              ></CartData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddToCart;
