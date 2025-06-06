import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Beeblio from "./components/Beeblio";
import BeeblioList from "./components/BeeblioList";
import List from "./components/List";
import RouteApp from "./components/RouteApp";
import FormApp from "./components/FormApp";
import BeeblioForm from "./components/BeeblioForm";
import "./index.css";
import BeeblioListDynamic from "./components/BeeblioListDynamic";
import Game from "./components/Game";

const name = "Welcome to Beeblio";
const date = new Date();
const greetsAccordingToPeriodOfDay = () => {
  const hour = date.getHours();
  return hour < 12 ? "Good morning" : "Good afternoon";
};

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <div>
//       <h1>{name}</h1>
//       <h1>{date.toLocaleString()}</h1>
//       <h1>{greetsAccordingToPeriodOfDay()}</h1> {/* <-- Call the function */}
//     </div>
//   </StrictMode>
// );

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Beeblio
//       title="Don Quixote"
//       author="Miguel de Cervantes"
//       year="1605"
//       pages="1032"
//       cover="https://picsum.photos/200/300"
//     />
//     <Beeblio
//       title="Alice"
//       author="Lewis Caroll"
//       year="1865"
//       pages="96"
//       cover="https://picsum.photos/200/301"
//     />
//   </StrictMode>
// );

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <List />
//   </StrictMode>
// );

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BeeblioList />
//   </StrictMode>
// );

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouteApp />
//   </StrictMode>
// );

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <FormApp />
//   </StrictMode>
// );

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BeeblioForm />
//   </StrictMode>
// );

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BeeblioListDynamic />
//   </StrictMode>
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Game />
  </StrictMode>
);
