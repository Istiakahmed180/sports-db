import React from "react";

const ModalPlayer = ({ modalPlayer }) => {
  const { strThumb, strDescriptionEN, strNationality, strPlayer, strPosition } =
    modalPlayer;
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center text-cyan-600">
            {strPlayer}
          </h3>
          <img
            src={strThumb}
            className="rounded-2xl w-96 h-60 mx-auto my-5"
            alt=""
          />
          <div className="card-actions justify-center">
            <div className="badge badge-outline">
              {strNationality ? strNationality : "Not Avaliable"}
            </div>
            <div className="badge badge-outline">
              {strPosition ? strPosition : "Not Avaliable"}
            </div>
          </div>
          <p className="py-4">
            {strDescriptionEN
              ? strDescriptionEN.slice(0, 175)
              : "Not Available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalPlayer;
