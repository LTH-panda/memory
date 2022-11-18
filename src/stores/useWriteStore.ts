import create from 'zustand';

type State = {
  mode: 'add' | 'edit';
  setMode: (by: 'add' | 'edit') => void;

  id: string | undefined;
  setId: (by: string) => void;
  clearId: () => void;

  content: string;
  setContent: (by: string) => void;
  clearContent: () => void;

  color: string;
  setColor: (by: string) => void;
  clearColor: () => void;

  icon: string;
  setIcon: (by: string) => void;
  clearIcon: () => void;

  time: number;
  setTime: (by: number) => void;
  clearTime: () => void;
};

const useWriteStore = create<State>()(set => ({
  mode: 'add',
  setMode: by => set(state => ({...state, mode: by})),

  id: undefined,
  setId: by => set(state => ({...state, id: by})),
  clearId: () => set(state => ({...state, id: undefined})),

  content: '',
  setContent: by => set(state => ({...state, content: by})),
  clearContent: () => set(state => ({...state, content: ''})),

  color: '#444',
  setColor: by => set(state => ({...state, color: by})),
  clearColor: () => set(state => ({...state, color: '#444'})),

  icon: 'faceContent',
  setIcon: by => set(state => ({...state, icon: by})),
  clearIcon: () => set(state => ({...state, icon: 'faceContent'})),

  time: 0,
  setTime: by => set(state => ({...state, time: by})),
  clearTime: () => set(state => ({...state, time: 0})),
}));

export default useWriteStore;
