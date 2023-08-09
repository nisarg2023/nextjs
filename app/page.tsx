"use client";
import Image from "next/image";
import { json } from "sequelize";

export default function Home() {
  const addUser = () => {
    fetch("api/user/", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={() => {
          addUser();
        }}>
        {" "}
        add user
      </button>
    </main>
  );
}




