// import React from 'react'
// import Movie from './Movie'


// const App = () => {
//   return (
//     <div>
//     <Movie />
//     </div>
//   )
// }

// export default App


//Adding Events 
// import React from "react";

// function Football(){

//   const shoot(){
//     alert("Goal")
//   }
//   return(
// <button onClick={shoot}>Hit the Goal</button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);

// import { useState } from "react";
// import { sculptureList } from "./data.js";

// export default function Gallery() {
//   const [index, setIndex] = useState(0);

//   function handleClicknxt() {
//     if (index === sculptureList.length - 1) {, 
//       setIndex(sculptureList.length - 1);
//     } else {
//       setIndex(index + 1);
//     }
//   }
//   function handleClickPre() {
//     if( index<= 0) {
//      setIndex(0);
//     } else {
//       setIndex(index - 1);
//     }
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleClicknxt}>Next</button>
//       <button onClick={handleClickPre}>Previous</button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img src={sculpture.url} alt={sculpture.alt} />
//       <p>{sculpture.description}</p>
//     </>
//   );
// }
