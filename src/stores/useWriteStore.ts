import create from 'zustand';

type State = {
  content: string;
  setContent: (by: string) => void;
  clearContent: () => void;

  color: string;
  setColor: (by: string) => void;
  clearColor: () => void;

  icon: string;
  setIcon: (by: string) => void;
  clearIcon: () => void;
};

const useWriteStore = create<State>()(set => ({
  content: '',
  setContent: by => set(state => ({...state, content: by})),
  clearContent: () => set(state => ({...state, content: ''})),

  color: '#444',
  setColor: by => set(state => ({...state, color: by})),
  clearColor: () => set(state => ({...state, color: '#444'})),

  icon: 'faceContent',
  setIcon: by => set(state => ({...state, icon: by})),
  clearIcon: () => set(state => ({...state, icon: 'faceContent'})),
}));

export default useWriteStore;
