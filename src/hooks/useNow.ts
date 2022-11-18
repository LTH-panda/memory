import {useEffect, useState} from 'react';

function useNow() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const updateNow = setInterval(() => setNow(new Date()), 1000);

    return () => clearInterval(updateNow);
  }, []);

  return {now};
}

export default useNow;
