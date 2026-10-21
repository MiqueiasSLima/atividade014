import { useRecoilState, useSetRecoilState } from "recoil"
import { tarefaInput, listaTarefasState } from '../atoms/tarefas.js'
import '../cssestilos/estilos015.css';


function Formulario() {

  const [tarefa, setTarefa] = useRecoilState(tarefaInput);
  
  const setListaTarefas = useSetRecoilState(listaTarefasState);


  const adicionar = (e) => {
    e.preventDefault();
    if (!tarefa.trim()) return;

    const novoItem = { id: Date.now(), nome: tarefa, concluida: false };

    setListaTarefas((listaAntiga) => [...listaAntiga, novoItem]);
    
    setTarefa('');
  };
 
  return (
    <>
      <form onSubmit={adicionar}>
          <input
          type="text"
          name="nome" 
          value={tarefa} 
          onChange={(e) => setTarefa(e.target.value)} 
          placeholder="Nome da tarefa" 
          required
          />
          <button type="submit" className="botao-add">Adicionar</button>

      </form>
    </>
  )
}

export default Formulario;
