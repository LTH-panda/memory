import AsyncStorage from '@react-native-async-storage/async-storage';
import {Memory} from 'stores/useMemoryStore';

type MemoryData = Memory[];

const KEY = 'MEMORY';

const memoryStorage = {
  async get() {
    try {
      const rawData = await AsyncStorage.getItem(KEY);
      if (!rawData) throw new Error();

      return JSON.parse(rawData);
    } catch (err) {
      throw new Error();
    }
  },
  async set(data: MemoryData) {
    try {
      await AsyncStorage.setItem(KEY, JSON.stringify(data));
    } catch (err) {
      throw new Error();
    }
  },
};

export default memoryStorage;
