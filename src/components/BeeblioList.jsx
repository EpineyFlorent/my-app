import { useState, useEffect } from "react";

function Beeblio({ beeblio }) {
  return (
    <div>
      <p>{beeblio.title}</p>
      <p>{beeblio.author}</p>
      <p>{beeblio.year}</p>
      <p>{beeblio.pages}</p>
      <img src={beeblio.cover} />
    </div>
  );
}

function BeeblioList() {
  const beeblioList = [
    {
      id: 1,
      title: "Don Quixote",
      author: "Miguel de Cervantes",
      year: "1605",
      pages: "1032",
      cover: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "Alice",
      author: "Lewis Caroll",
      year: "1865",
      pages: "96",
      cover: "https://picsum.photos/200/301",
    },
  ];

  return (
    <>
      <h1>Demo BeeblioList</h1>
      {beeblioList.map((beeblio) => (
        <Beeblio beeblio={beeblio} key={beeblio.id} />
      ))}
    </>
  );
}

export default BeeblioList;
