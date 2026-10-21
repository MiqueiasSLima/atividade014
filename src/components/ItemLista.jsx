import { memo } from 'react';
import { useSetRecoilState } from 'recoil';
import { listaTarefasState } from '../atoms/tarefas';
import '../cssestilos/estilos015.css'

function ItemLista({ tarefa }) {

  const setListaTarefas = useSetRecoilState(listaTarefasState);

  const alternarConcluida = () => {
    setListaTarefas((listaAnterior) =>
      listaAnterior.map((item) =>
        item.id === tarefa.id ? { ...item, concluida: !item.concluida } : item
      )
    );
  };

  const removerTarefa = (idParaRemover) => {
      setListaTarefas((prevLista) => 
          prevLista.filter((tarefa) => tarefa.id !== idParaRemover)
      );
  };

  return (
    <li>
      <input 
        type="checkbox" 
        checked={Boolean(tarefa.concluida)} 
        onChange={alternarConcluida} 
      />
      <span className={tarefa.concluida ? 'concluida' : ''}> Tarefa: {tarefa.nome}</span> 
      <button className="botao-remover" onClick={(e) => removerTarefa(tarefa.id)}>REMOVER</button>
    </li>
  );
}

export default memo(ItemLista);