import React from "react";

const Player = ({ player, setAddPlayer, addPlayer }) => {
  const {
    strThumb,
    strDescriptionEN,
    strNationality,
    strPlayer,
    strPosition,
    idPlayer,
  } = player;

  const handleAddPlayer = () => {
    const info = {
      strThumb,
      strNationality,
      strPlayer,
      strPosition,
      idPlayer,
    };
    if (addPlayer) {
      const newInfo = [...addPlayer, info];
      setAddPlayer(newInfo);
    }
  };
  return (
    <div>
      <div className="card w-[85%] h-[90%] bg-base-100 shadow-xl mx-auto">
        <figure>
          <img
            src={
              strThumb
                ? strThumb
                : "https://cdn.resfu.com/media/img_news/agencia-efe_multimedia_55009258138.multimedia.photos.55009258138003.file.jpg?size=1000x&lossy=1"
            }
            alt="Shoes"
            className="w-full h-80"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {strPlayer ? strPlayer : "Not Avaliable"}
          </h2>
          <p>
            {strDescriptionEN
              ? strDescriptionEN.slice(0, 100)
              : "Not Avaliable"}
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              {strNationality ? strNationality : "Not Avaliable"}
            </div>
            <div className="badge badge-outline">
              {strPosition ? strPosition : "Not Avaliable"}
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <button
              onClick={handleAddPlayer}
              className="btn btn-outline btn-sm btn-primary"
            >
              Add Player
            </button>
            <button className="btn btn-outline btn-sm btn-neutral">
              Details
            </button>
            <button className="btn btn-outline btn-sm btn-error">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
