import {useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import {insert} from './ContatosApi'

export default () => {
  const inputCargo = useRef(null)
  const inputFormacao = useRef(null)
  const inputSetor = useRef(null)
  const inputEndereco = useRef(null)
  const navigate = useNavigate()

  const salvar = async () => {
    const cargo = inputCargo.current.value
    const formacao = inputFormacao.current.value
    const setor = inputSetor.current.value
    const endereco = inputEndereco.current.value

    const novoContato = await insert(cargo, formacao, setor, endereco)

    if(novoContato) {
      alert('Contato cadastrado com sucesso')
    }else{
      alert('Erro ao tentar cadastrar o contato')
    }
  }

  const limpar = () =>{
    inputCargo.current.value = ''
    inputFormacao.current.value = ''
    inputSetor.current.value = ''
    inputEndereco.current.value = ''
    input.current.focus()
  }
  
  return(
    <>
      <h1>Novo Contato</h1>
      <div>
        <label>Cargo </label>
          <input ref={inputCargo} type = 'text' required placeholder = 'Cargo'></input>
      </div>
      
      <div>
        <label>Formação </label>
          <input ref={inputFormacao} type = 'text' required placeholder = 'Formação'></input>
      </div>

      <div>
        <label>Setor </label>
        <input ref={inputSetor} type = 'text' required placeholder = 'Setor'></input>
      </div>

      <div>
        <label>Endereço </label>
          <input ref={inputEndereco} type = 'text' required placeholder = 'Endereço'></input>
      </div>
      
      <div id = 'botoes'>
        <button onClick={salvar}>Salvar</button>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/contatos')}>Voltar</button>
      </div>
    </>
  )
}
