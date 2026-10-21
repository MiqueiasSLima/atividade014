import { selector } from 'recoil';
import { listaTarefasState, buscaInput, filtroInput } from '../atoms/tarefas.js';

export const tarefaCountSelector = selector({
    key: "tarefasCount",
    get: ({get}) => {
        const tarefas = get(listaTarefasState)
        return tarefas.length;
    }
})

export const tarefasFiltradasSelector = selector({
  key: 'tarefasFiltradasSelector',
  get: ({ get }) => {
    const filtro = get(filtroInput);
    const busca = get(buscaInput);
    const lista = get(listaTarefasState);

    
    const listaBuscada = lista.filter((item) =>
      item.nome.toLowerCase().includes(busca.toLowerCase())
    );


    if (filtro === 'pendentes') {
      return listaBuscada.filter((tarefa) => !tarefa.concluida);
    }
    if (filtro === 'concluidas') {
      return listaBuscada.filter((tarefa) => tarefa.concluida);
    }

    return listaBuscada;
  },
});

