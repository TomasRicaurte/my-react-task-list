import './App.css';

function App() {

  return (
  <>   
    <div className='Header'>
      <h1>ToDo App</h1>
    </div>
    <div className='TaskList'>
      <ul className='Task'>
        <li>
          <h4>Comprar un nuevo computador</h4>
          <button>Completo</button> <button> incompleto</button>
        </li>
        <li>
          <h4>Mandar a reparar un viejo computador</h4>
          <button>Completo</button> <button>Incompleto</button>
        </li>
      </ul>
    </div>
  </> 
  );
}

export default App;
