import './App.css'
import {useNavigate} from 'react-router-dom'

export default function App() {

  const navigate = useNavigate()
  
  const visualizar = () => navigate('/contatos')
  const adicionar = () => navigate('/contatos/new')
  
  return (
    <main>
      <button onClick={visualizar}>Visualizar Contatos</button>
      <button onClick={adicionar}>Adicionar Contato</button>
    </main>
  )
}
