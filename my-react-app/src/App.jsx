import Card from "../components/card/card.jsx"
import './App.css'

function App() {
  const items = ["React", "Vue"];
  return (
    <section>
      <h1>¡Hola mundo!</h1>
       <Card title = {'Cristian'} description = {'Estudiante y programador'} /> 
      <Card title = {'Maria'} description = {'Estudiante y programadora'} /> 
      <ul>
        {
          items.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </section>
  );
}

export default App
