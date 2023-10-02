// // // // // // import React from 'react'
// // // // // // import Movie from './Movie'

// // // // // // const App = () => {
// // // // // //   return (
// // // // // //     <div>
// // // // // //     <Movie />
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default App

// // // // // //Adding Events
// // // // // // import React from "react";

// // // // // // function Football(){

// // // // // //   const shoot(){
// // // // // //     alert("Goal")
// // // // // //   }
// // // // // //   return(
// // // // // // <button onClick={shoot}>Hit the Goal</button>
// // // // // //   );
// // // // // // }

// // // // // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // // // // root.render(<Football />);

// // // // // // import { useState } from "react";
// // // // // // import { sculptureList } from "./data.js";

// // // // // // export default function Gallery() {
// // // // // //   const [index, setIndex] = useState(0);

// // // // // //   function handleClicknxt() {
// // // // // //     if (index === sculptureList.length - 1) {,
// // // // // //       setIndex(sculptureList.length - 1);
// // // // // //     } else {
// // // // // //       setIndex(index + 1);
// // // // // //     }
// // // // // //   }
// // // // // //   function handleClickPre() {
// // // // // //     if( index<= 0) {
// // // // // //      setIndex(0);
// // // // // //     } else {
// // // // // //       setIndex(index - 1);
// // // // // //     }
// // // // // //   }

// // // // // //   let sculpture = sculptureList[index];
// // // // // //   return (
// // // // // //     <>
// // // // // //       <button onClick={handleClicknxt}>Next</button>
// // // // // //       <button onClick={handleClickPre}>Previous</button>
// // // // // //       <h2>
// // // // // //         <i>{sculpture.name} </i>
// // // // // //         by {sculpture.artist}
// // // // // //       </h2>
// // // // // //       <h3>
// // // // // //         ({index + 1} of {sculptureList.length})
// // // // // //       </h3>
// // // // // //       <img src={sculpture.url} alt={sculpture.alt} />
// // // // // //       <p>{sculpture.description}</p>
// // // // // //     </>
// // // // // //   );
// // // // // // }
// // // // // export default function Gallery() {
// // // // //   return (
// // // // //     <section>
// // // // //       <h1>Inspiring Sculptures</h1>
// // // // //       <Image />
// // // // //       <Image />
// // // // //       <Image />
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // // function Image() {
// // // // //   return (
// // // // //     <img
// // // // //       src="https://i.imgur.com/ZF6s192.jpg"
// // // // //       alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
// // // // //     />
// // // // //   );
// // // // // }

// // // // // import React from "react";
// // // // // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // // // // import About from "./components/About";
// // // // // import Home from "./components/Home";
// // // // // import Navbar from "./components/Navbar";

// // // // // const App = () => {
// // // // //   return (
// // // // //     <div>
// // // // //     <Navbar />
// // // // //       <BrowserRouter>
// // // // //         <Routes>
// // // // //           <Route path="/" element={<Home />} />
// // // // //           <Route path="/about" element={<About />} />
// // // // //         </Routes>
// // // // //       </BrowserRouter>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default App;

// // // // import React from "react";
// // // // import {useState} from React

// // // // export default function Form(){
// // // //   const [isSent, setIsSent]= useState(false)
// // // //   const [message, setMessage] = useState('Hi')
// // // // if (isSent){
// // // // return <h1>Your message is sent</h1>

// // // // }
// // // //   return(
// // // //     <form onSubmit={(e)=>{
// // // //       e.preventDefault();
// // // //       setIsSent(true)
// // // //       setMessage(message)
// // // //     }}>
// // // //     <textarea
// // // //         placeholder="Message"
// // // //         value={message}
// // // //         onChange={e => setMessage(e.target.value)}
// // // //     />
// // // //     <button type="submit">Send</button>
// // // //   );
// // // // }
// // // // function setMessage(message){

// // // // }

// // // import { useState } from "react";
// // // // export default function MovingDot() {
// // // //   const [position, setPosition] = useState({
// // // //     x: 0,
// // // //     y: 0
// // // //   });
// // // //   return (
// // // //     <div
// // // //       onPointerMove={e => {
// // // //         setPosition({
// // // //           x: e.clientX,
// // // //           y: e.clientY
// // // //         });
// // // //       }}
// // // //       style={{
// // // //         position: 'relative',
// // // //         width: '100vw',
// // // //         height: '100vh',
// // // //       }}>
// // // //       <div style={{
// // // //         position: 'absolute',
// // // //         backgroundColor: 'red',
// // // //         borderRadius: '50%',
// // // //         transform: `translate(${position.x}px, ${position.y}px)`,
// // // //         left: -10,
// // // //         top: -10,
// // // //         width: 20,
// // // //         height: 20,
// // // //       }} />
// // // //     </div>
// // // //   );
// // // // }

// // // export default function Form() {
// // //   const [person, setPerson] = useState({
// // //     firstName: "Saroj",
// // //     lastName: "Adhikari",
// // //     gmail: "iamsaroj@gamil.com",
// // //   });
// // //   function handleFirst(e) {
// // //     setPerson({
// // //       ...person,
// // //       firstName:e.target.value
// // //     })
// // //   }
// // //   function handleLast(e) {
// // //     setPerson({
// // //       ...person,
// // //       lastName:e.target.value
// // //     })
// // //   }
// // //   function handleGmail(e) {
// // //     setPerson({
// // //       ...person,
// // //       gmail:e.target.value
// // //     })
// // //   }
// // //   return (
// // //     <>
// // //       <label>
// // //         First Name:
// // //         <input value={person.firstName} onChange={handleFirst} />
// // //       </label>
// // //       <label>
// // //         Last Name:
// // //         <input value={person.lastName} onChange={handleLast} />
// // //       </label>
// // //       <label>
// // //         Gmail:
// // //         <input value={person.gmail} onChange={handleGmail} />
// // //       </label>
// // //       <p>
// // //         {person.firstName}
// // //         {""}
// // //         {person.lastName}
// // //         {""}({person.gmail})
// // //       </p>
// // //     </>
// // //   );
// // // }

// // import { useState } from "react";
// // import React from "react";

// // export default function Form(){
// //   const [person, setPerson] =useState({
// //     name: 'Saroj',
// //     artwork:{
// //       title: 'Lucifer',
// //       city: 'ktm',
// //       image: 'https://images.thedirect.com/media/article_full/lucifer-season-7.jpg'
// //     }
// //   });
// //   function handleName(e){
// //     setPerson({
// //       ...person,
// //       name:e.target.value
// //     });
// //   }
// //   function handleTitle(e){
// //     setPerson({
// //       ...person,
// //       artwork:{
// //        ...person.artwork,
// //         title:e.target.value
// //       }
// //     })
// //   }
// //   function handleCity(e){
// //     setPerson({
// //       ...person,
// //       artwork:{
// //         ...person.artwork,
// //         city:e.target.value
// //       }
// //     })
// //   }
// //   function handleImage(e){
// //     setPerson({
// //       ...person,
// //       artwork:{
// //         ...person.artwork,
// //         image:e.target.value
// //       }
// //     })
// //   }
// //   return(
// //     <>
// //       <label>
// //         Name:
// //         <input
// //           value={person.name}
// //           onChange={handleName}
// //         />
// //       </label>
// //       <label>
// //         Title:
// //         <input
// //           value={person.artwork.title}
// //           onChange={handleTitle}
// //         />
// //       </label>
// //       <label>
// //         City:
// //         <input
// //           value={person.artwork.city}
// //           onChange={handleCity}
// //         />
// //       </label>
// //       <label>
// //         Image:
// //         <input
// //           value={person.artwork.image}
// //           onChange={handleImage}
// //         />
// //       </label>
// //       <p>
// //         <i>{person.artwork.title}</i>
// //         {' by '}
// //         {person.name}
// //         <br />
// //         (located in {person.artwork.city})
// //       </p>
// //       <img 
// //         src={person.artwork.image} 
// //         alt={person.artwork.title}
// //       />
// //     </>

// //   );
// // }
// import { useState } from 'react';

// export default function Scoreboard() {
//   const [player, setPlayer] = useState({
//     firstName: 'Ranjani',
//     lastName: 'Shettar',
//     score: 10,
//   });

//   function handlePlusClick() {
//     setPlayer({
//       ...player,
//       score:player.score +1   //✅
//     })
//   }

//   function handleFirstNameChange(e) {
//     setPlayer({
//       ...player,
//       firstName: e.target.value,
//     });
//   }

//   function handleLastNameChange(e) {
//     setPlayer({
//       ...player,
//       lastName: e.target.value
//     });
//   }

//   return (
//     <>
//       <label>
//         Score: <b>{player.score}</b>
//         {' '}
//         <button onClick={handlePlusClick}>
//           +1
//         </button>
//       </label>
//       <label>
//         First name:
//         <input
//           value={player.firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           value={player.lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//     </>
//   );
// }

import { useState } from 'react';
import Background from './Background.js';
import Box from './Box.js';

const initialPosition = {
  x: 0,
  y: 0
};

export default function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    shape.position.x += dx;
    shape.position.y += dy;
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value
    });
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
}
