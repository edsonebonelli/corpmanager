import { useEffect, useState, useRef } from 'react';
import './style.css'
import Trash from '../../assets/trash_607301.png'
import api from '../../service/api'

function Home() {

const [empresas, setEmpresas] = useState([])

const inputName = useRef()
const inputCNPJ = useRef()
const inputEndereco = useRef()
const inputTelefone = useRef()

  async function getUsers(){
    const dadosEmpresas = await api.get('/cadastro')
    setEmpresas(dadosEmpresas.data)
  }

  async function createUsers(){
    await api.post('/cadastro', {
      nome: inputName.current.value,
      CNPJ: inputCNPJ.current.value,
      endereco: inputEndereco.current.value,
      telefone: inputTelefone.current.value
    })
    getUsers()
  }

  async function deleteUsers(ID){
     await api.delete(`/cadastro/${ID}`)
     getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <div className='container'>
        <form>
          <h1>Cadastro de Empresas</h1>
          <input placeholder='Nome' name='nome' type='text' ref={inputName}/>
          <input placeholder='CNPJ' name='CNPJ' type='text' ref={inputCNPJ}/>
          <input placeholder='Endereço' name='endereco' type='text' ref={inputEndereco}/>
          <input placeholder='Telefone' name='telefone' type='text' ref={inputTelefone}/>
          <button type='button' onClick={createUsers}>Cadastrar</button>
        </form>
        { empresas.map(empresa => (
                  <div key={empresa.id} className='card'>
                  <div>
                    <p>ID: <span>{empresa.id}</span></p>
                    <p>Nome: <span>{empresa.nome}</span></p>
                    <p>CNPJ: <span>{empresa.CNPJ}</span></p>
                    <p>Endereço: <span>{empresa.endereco}</span></p>
                    <p>Telefone: <span>{empresa.telefone}</span></p>
                  </div>
                  <button onClick={() => deleteUsers(empresa.id)}>
                    <img src={Trash}/>
                  </button>
                </div>
        ))}
      </div>
    </>
  )
}

export default Home
