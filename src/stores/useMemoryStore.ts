import memoryStorage from 'storages/memory';
import create from 'zustand';

export type Memory = {
  id: string;
  content: string;
  color: string;
  icon: string;
};

type State = {
  memories: Memory[];
  loadMemories: () => void;
  saveMemory: (by: Memory) => void;
};

const useMemoryStore = create<State>()((set, get) => ({
  memories: [],
  loadMemories: async () => {
    const memoriesData = await memoryStorage.get();
    set(state => ({...state, memories: memoriesData}));
  },
  saveMemory: async by => {
    const newMemoriesData = [...get().memories, by];
    set(state => ({...state, memories: newMemoriesData}));
    await memoryStorage.set(newMemoriesData);
  },
}));

export default useMemoryStore;
