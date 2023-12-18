import React, { useState } from "react";
import io from "socket.io-client";
import Chat from "./Chat";

//const socket = io.connect("http://localhost:3001");
const socket = io.connect("https://health-care-mm6w.onrender.com");


const Textchat = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  return (
    <>
      {!showChat ? (
        <div className="flex items-center justify-center  h-screen bg-gray-200 border-2 border-slate-950 ">
          <div
            className="bg-white rounded shadow-md p-5 "
            style={{ width: "75%" }}
          >
            <h1 className="text-2xl font-bold mb-4">
              Patient Information Form
            </h1>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {" "}
                {/* Updated container for Phone No. and Age */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Phone No.
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    min={1}
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Enter your age"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="problem"
                  className="block text-sm font-medium text-gray-600"
                >
                  Problem
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  rows="3"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Describe your problem"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="roomId"
                  className="block text-sm font-medium text-gray-600"
                >
                  Room ID
                </label>
                <input
                  type="text"
                  id="roomId"
                  name="roomId"
                  onChange={(event) => {
                    setRoom(event.target.value);
                  }}
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your room ID"
                />
              </div>
              <button
                onClick={joinRoom}
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              >
                JOIN ROOM
              </button>
            </form>
          </div>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </>
  );
};

export default Textchat;
