import { atom } from 'recoil';

export const tarefaInput = atom({
    key: "tarefaInput",
    default: ''
})

export const buscaInput = atom({
    key: "buscaInput",
    default: ''
})

export const filtroInput = atom({
    key: "filtroInput",
    default: ''
})

const localStorageEffect = (key) => ({ setSelf, onSet }) => {
  
  const savedValue = localStorage.getItem(key);
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue, _, isReset) => {
    isReset 
      ? localStorage.removeItem(key) 
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

export const listaTarefasState = atom({
    key: "listaTarefasState",
    default: [],
    effects: [
    localStorageEffect('minhas_tarefas_storage') 
  ],
})



