// // import React from 'react'
// // import Movie from './Movie'

// // const App = () => {
// //   return (
// //     <div>
// //     <Movie />
// //     </div>
// //   )
// // }

// // export default App

// //Adding Events
// // import React from "react";

// // function Football(){

// //   const shoot(){
// //     alert("Goal")
// //   }
// //   return(
// // <button onClick={shoot}>Hit the Goal</button>
// //   );
// // }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Football />);

// // import { useState } from "react";
// // import { sculptureList } from "./data.js";

// // export default function Gallery() {
// //   const [index, setIndex] = useState(0);

// //   function handleClicknxt() {
// //     if (index === sculptureList.length - 1) {,
// //       setIndex(sculptureList.length - 1);
// //     } else {
// //       setIndex(index + 1);
// //     }
// //   }
// //   function handleClickPre() {
// //     if( index<= 0) {
// //      setIndex(0);
// //     } else {
// //       setIndex(index - 1);
// //     }
// //   }

// //   let sculpture = sculptureList[index];
// //   return (
// //     <>
// //       <button onClick={handleClicknxt}>Next</button>
// //       <button onClick={handleClickPre}>Previous</button>
// //       <h2>
// //         <i>{sculpture.name} </i>
// //         by {sculpture.artist}
// //       </h2>
// //       <h3>
// //         ({index + 1} of {sculptureList.length})
// //       </h3>
// //       <img src={sculpture.url} alt={sculpture.alt} />
// //       <p>{sculpture.description}</p>
// //     </>
// //   );
// // }
// export default function Gallery() {
//   return (
//     <section>
//       <h1>Inspiring Sculptures</h1>
//       <Image />
//       <Image />
//       <Image />
//     </section>
//   );
// }

// function Image() {
//   return (
//     <img
//       src="https://i.imgur.com/ZF6s192.jpg"
//       alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
//     />
//   );
// }

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
    <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
