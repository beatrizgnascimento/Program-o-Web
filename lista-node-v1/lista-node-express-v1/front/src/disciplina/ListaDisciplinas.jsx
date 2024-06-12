import { useEffect, useState } from "react";
import Disciplina from "./Disciplina";
import axios, * as others from 'axios';
import '../styles/ListaDisciplinas.css';
import { useForm } from "react-hook-form";

export default function ListaDisciplinas(){

    const [disciplinas, setDisciplinas] = useState(<p>...</p>);
    const view = [];
    const [msg,setMsg] = useState(' ');

    const form = useForm();
    const { register, handleSubmit } = form;

    
    const submit = async (data) => {
        let endPoint = 'http://localhost:3000/disciplinas';
        if(data.sigla !== ' ') //buscar todas
            endPoint = `${endPoint}/${data.sigla}`;
        try {
            const dados = await axios.get(`${endPoint}`);
            if(Array.isArray(dados.data)){
                for(let disciplina of dados.data){
                    view.push(<Disciplina disciplina={disciplina}/>)
                }
            }
            else{
                view.push(<Disciplina disciplina={dados.data}/>);
            }    
            setDisciplinas(view);
        } catch (error) {
            console.log(error);
            setMsg(error.response.data);
            setDisciplinas(<p></p>);
        }        
    }

    return(
        <>  
            <h2>Busque a disciplina pela sigla ou deixe vazio para retornar todas.</h2>
            <form onSubmit={handleSubmit(submit)} noValidate>

                <label htmlFor="sigla" placeholder="sigla">Sigla</label>
                <input type="text" id="sigla" {...register('sigla')} />
             
            <button>Listar</button>
            </form>
            {disciplinas}
            {msg}
        </>   
    )
}