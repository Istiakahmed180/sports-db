import React, { useEffect, useState } from "react";
import AddToCart from "../AddToCart/AddToCart";
import Player from "../Player/Player";
import { ToastContainer, toast } from "react-toastify";
import ModalPlayer from "../ModalPlayer/ModalPlayer";

const Home = () => {
  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState([]);
  const [addPlayer, setAddPlayer] = useState([]);

  const [modalPlayer, setModalPlayer] = useState({});
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}
    `)
      .then((res) => res.json())
      .then((data) => setPlayers(data.player));
  }, [search]);

  const handleDeletePlayer = (id) => {
    const deleteItem = addPlayer.filter((player) => player.idPlayer !== id);
    setAddPlayer(deleteItem);
    toast(" Player Deleted Successfully!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <div className="grid grid-cols-4 mt-6">
      <div className="col-span-3">
        <div className="text-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg mx-auto"
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-10  grid-cols-1  mt-10">
          {players ? (
            players.map((player) => (
              <Player
                key={player.idPlayer}
                player={player}
                addPlayer={addPlayer}
                setAddPlayer={setAddPlayer}
                setModalPlayer={setModalPlayer}
              ></Player>
            ))
          ) : (
            <span className="text-2xl font-bold flex justify-end text-red-600 ">
              Not Found Any Data
            </span>
          )}
        </div>
      </div>
      <div className="">
        <AddToCart
          addPlayer={addPlayer}
          handleDeletePlayer={handleDeletePlayer}
        ></AddToCart>
      </div>
      <ModalPlayer modalPlayer={modalPlayer}></ModalPlayer>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Home;
