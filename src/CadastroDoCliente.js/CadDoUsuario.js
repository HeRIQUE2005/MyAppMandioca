import React, {useState}  from "react";
import {Await, Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import ApiMandioca from "../API/ApiMandioca";

export default function CadastrarCliente() {

    const mudarTela = useNavigate()
    const nome = useState('')
    const password = useState('')
    const celular = useState('')
    const email = useState('')

    async function cadastrarCliente(cadastro) {    
        
        try {
            cadastro.preventDefaul()
            if (!nome || !password || !celular || email) {
                alert("Campos em Branco")
                return
            }
            await ApiMandioca.post('/CadastrarCliente', {
                nome,
                password,
                celular,
                email,
            })
            toast.success('Cadastro Efetuado com Sucesso',{
                toast: 'ToastId'}
               
            )

             mudarTela('/')
        } catch (err) {
            toast.error('Erro ao comunicar com o Back-end',{
                toastId: 'ToastId'
            }

            )
        }

        return(
            <div className='conteinerCadastrarClienteGeral'>
                <h1>Formulario de Cadastro Cliente</h1>
                <form onSubmit={cadastrarCliente}>

                <input type='text' placeholder='Digite seu nome' 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
                <input type='text' placeholder='Digite sua senha' 
                value={password}
                onChange={(e) => setNome(e.target.value)}
                />
                <input type='text' placeholder='Digite seu celular' 
                value={celular}
                onChange={(e) => setNome(e.target.value)}
                />
                <input type='text' placeholder='Digite seu email' 
                value={email}
                onChange={(e) => setNome(e.target.value)}
                />

              <button type='submit'>Enviar</button>

                </form>

               <Link to='/' className="butterVoltar">Voltar Inicio</Link>  
            </div>
            
            
        )
    }

}