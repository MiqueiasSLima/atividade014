import ItemLista from "./ItemLista.jsx";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listaTarefasState, filtroInput, buscaInput } from '../atoms/tarefas.js';
import { tarefaCountSelector, tarefasFiltradasSelector } from '../selectors/filtros.js';


function Mostrar() {

  const lista = useRecoilValue(listaTarefasState);
  const tarefaCount = useRecoilValue(tarefaCountSelector);

  const busca = useRecoilValue(buscaInput);
  const setBusca = useSetRecoilState(buscaInput);

  const setFiltro = useSetRecoilState(filtroInput);

  const tarefasFiltradas = useRecoilValue(tarefasFiltradasSelector);

  return (
    <>
      <h3>Lista de Tarefas:</h3>
      <h2>Filtrar tarefas</h2>
      <button className="botao-filtrar" onClick={() => setFiltro('todas')}>Todas</button>
      <button className="botao-filtrar" onClick={() => setFiltro('concluidas')}>Concluídas</button>
      <button className="botao-filtrar" onClick={() => setFiltro('pendentes')}>Pendentes</button>

      {lista.length === 0 ? (
        <p>Nenhuma tarefa adicionado ainda.</p>
      ) : (
        <ul>
          <p>Quantidade de tarefas: {tarefaCount}</p>
          <input 
            type="text" 
            value={busca} 
            onChange={(e) => setBusca(e.target.value)} 
            placeholder="Buscar tarefa..." 
          />
          {tarefasFiltradas.map((tarefa) => (
            <ItemLista
              key={tarefa.id}
              tarefa={tarefa}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default Mostrar;