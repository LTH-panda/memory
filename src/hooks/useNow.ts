import {useState} from 'react';

function useNow() {
  const [now, setNow] = useState<Date>(new Date());

  setInterval(() => {
    setNow(new Date());
  }, 1000);

  return {now};
}

export default useNow;
