import { useState, useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// function App(){
//   return (<h2>Good Adnan</h2>)
// }

const Card = ({title}) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(()=>{
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  

  return(
    <div  className="card" onClick={() => setCount(count + 1)}
      style={{     // inline css - 1st preference
        // border: '1px solid #4b5362',
        // padding: '20px',
        // margin: '10px',
        // backgroundColor: '#31363f',
        // borderRadius: '10px',
        // minHeight: '100px'
      }}
    >
      {/* <h2>Card Component</h2> */}
      <h2>{title} <br /> {count}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "💗" : "🤍"}
      </button>
    </div>
  )
}

const App = () => {

  return(
    // <h2>Good Bro!</h2>
    <div className="card-container">
      {/* <h2>Functional Arrow Component = &gt; </h2> */}

      <Card title="Star Wars" rating={5} isCool={true} actors={[{name: 'Actors'}]} /> 
      <Card title="Avatar"/>        {/* Prop - title, rating, isCool */}
      <Card title="Mr. Addy"/>
      <Card title="The Lion King"/>
    </div>
  )
}

export default App