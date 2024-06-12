export default function Disciplina({disciplina}){

    return (
        <ul>
            <h2>Sigla: {disciplina.sigla}</h2>
            <li>Ementa: {disciplina.ementa}</li>
        </ul>
    )
}