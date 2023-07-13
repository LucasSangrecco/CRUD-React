import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {findAll, removeById} from './ContatosApi'
import "./Read.css"


export default () => {
  const [contatos, setContatos] = useState([])
  const navigate = useNavigate()

    const init = async () => {
      const contatos = await findAll()
      setContatos(contatos)
    }

  useEffect(() =>{
    init()
  }, [])

  const remove = async (id) => {
    const contato = await removeById(id)

    if (contato){
      await init()
      alert(`Contato ${contato.cargo} foi excluido com sucesso.`)
    }else 
      alert('falha ao tentar excluir esse contato')    
  }

  return (
    <>
      <h1>Dados Cadastrados</h1>
      <table>
        <tr>
          <th>Cargo</th>
          <th>Formação</th>
          <th>Setor</th>
          <th>Endereço</th>
        </tr>
        
        {contatos.map(c =>
            <tr key={c.id}>
              <td>{c.cargo}</td>
              <td>{c.formacao}</td>
              <td>{c.setor}</td>
              <td>{c.endereco}</td>
              <td id='espacoBotao'>
                <button onClick={() => remove(c.id)}>Excuir</button>
              </td>
            </tr>
          )
        }        
      </table>
      <button onClick={() => navigate('/contatos/new')}>Novo Contato</button>
      <button onClick={() => navigate('/')}>Home</button>
      
    </>
  )  
}