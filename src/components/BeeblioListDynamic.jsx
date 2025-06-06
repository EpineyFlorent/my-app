import { useState, useEffect } from "react";
import BeeblioForm from "./BeeblioForm";

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

function BeeblioListDynamic() {
  const appName = "BeeblioListDynamic";
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    pages: "",
  });

  return (
    <>
      <h1>Demo {appName}</h1>
      <BeeblioForm books={formData} setBooks={setFormData} />
    </>
  );
}

export default BeeblioListDynamic;
