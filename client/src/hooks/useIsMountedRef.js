import { useEffect, useRef } from 'react';

export default function useIsMountedRef() {
  let isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = false;
  }, []);
  return isMounted;
}
