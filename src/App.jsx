
import './App.css'
// import Counter from './component/Counter'
import ToDos from './component/ToDos'

function App() {



  return (
    <>
      <h1 className='text-4xl text-center mb-2'>Welcome to React Redux Learning</h1>
      <hr />
      <div className="mt-5">
        <h2 className='text-center font-semibold text-2xl'>Counter App</h2>
        {/* <Counter></Counter> */}
      </div>

      <hr />

      <div className="mt-5">
        <h2 className='text-center font-semibold text-2xl'>Todos App</h2>
        <ToDos/>
      </div>


    </>
  )
}

export default App
