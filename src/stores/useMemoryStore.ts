import memoryStorage from 'storages/memory';
import create from 'zustand';

export type Memory = {
  id: string;
  content: string;
  color: string;
  icon: string;
  time: number;
};

type State = {
  memories: Memory[];
  loadMemories: () => void;
  saveMemory: (by: Memory) => void;
  editMemory: (by: Memory) => void;

  isVisibleDetailBottomSheet: boolean;
  openDetailBottomSheet: () => void;
  closeDetailBottomSheet: () => void;

  selectedMemory: Memory | undefined;
  selectMemory: (by: Memory) => void;
  clearSelectedMemory: () => void;
};

const useMemoryStore = create<State>()((set, get) => ({
  memories: [],
  loadMemories: async () => {
    const memoriesData = await memoryStorage.get();
    set(state => ({...state, memories: memoriesData}));
  },
  saveMemory: async by => {
    const newMemoriesData = [by, ...get().memories];
    set(state => ({...state, memories: newMemoriesData}));
    await memoryStorage.set(newMemoriesData);
  },
  editMemory: async by => {
    const newMemoriesData = get().memories.map(M => (M.id === by.id ? by : M));
    set(state => ({...state, memories: newMemoriesData}));
    await memoryStorage.set(newMemoriesData);
  },

  isVisibleDetailBottomSheet: false,
  openDetailBottomSheet: () =>
    set(state => ({...state, isVisibleDetailBottomSheet: true})),
  closeDetailBottomSheet: () =>
    set(state => ({...state, isVisibleDetailBottomSheet: false})),

  selectedMemory: undefined,
  selectMemory: by => set(state => ({...state, selectedMemory: by})),
  clearSelectedMemory: () =>
    set(state => ({...state, selectedMemory: undefined})),
}));

export default useMemoryStore;
