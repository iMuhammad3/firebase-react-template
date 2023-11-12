import './App.css'

function App() {
  const classes = 'px-4 py rounded-lg'

  return (
    <>
      <h1 className='text-center text-5xl text-white'>
        Welcome to The <br/>
        <span className={classes + " bg-sky-600"}>React</span> x{" "}
        <span className={classes + " bg-blue-600"}>Tailwind</span> x{" "}
        <span className={classes + " bg-amber-600"}>Firebase </span> 
        <br/>
        App
      </h1>
    </>
  )
}

export default App
