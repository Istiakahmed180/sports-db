import React from "react";

const CartData = ({ player, index, handleDeletePlayer }) => {
  const { strThumb, strPlayer, strPosition, idPlayer } = player;
  return (
    <tr>
      <th>
        <label>{index + 1}</label>
      </th>
      <td className="flex justify-between">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={strThumb} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{strPlayer}</div>
            <div className="text-sm opacity-50">{strPosition}</div>
          </div>
        </div>
        <div className="">
          <button
            onClick={() => handleDeletePlayer(idPlayer)}
            className="btn btn-square btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartData;
