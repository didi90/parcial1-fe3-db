import "./Styles/App.css";
import imagenes from './assets/imagenes';
import Card from "./components/Card";
import {useState} from 'react'

function App() {

  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [card, setCard] = useState(null);

  const onChangeName = (e) => setName(e.target.value);
  const onChangeTeam = (e) => setTeam(e.target.value);

  const validateName = (name) => {
    // Eliminamos los espacios en blanco
    const withoutSpaces = name.trim();
    // Validamos la extension
    if (withoutSpaces.length > 3) {
    return true;
    } else {
    return false;
    }
    };

  const isNamevalid = validateName(name);

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  const handleButton = (e) => {
    if (isNamevalid && team.length > 6) {
        setCard(true);
    } else {
      setCard(false);
    }
}

return (

<div className="App">
  <h1>Llegó la hora de la verdad</h1>
  <img src={imagenes.img1} width="200" height={200} />
  <h2>Queremos saber si hay más Team Perritos o Team Gatitos </h2>
   
    <h3>Tu decides</h3>

    <form onSubmit={onSubmitForm}>

    <input
    type="text"
    placeholder="Ingresa tu nombre"
    value={name}
    onChange={onChangeName}
    />
    <input
    type="text"
    placeholder="Digita: Team Perrito o Gatito"
    value={team}
    onChange={onChangeTeam}
    />
 
    <button onClick={handleButton}>Votar</button>

    </form>

    {card === true && <p> <Card name={name} team={team}/> </p>}
    {card === false && <p style={{color:'red'}}>Por favor chequea que la información sea correcta</p>}

</div>
);
}

export default App

 





