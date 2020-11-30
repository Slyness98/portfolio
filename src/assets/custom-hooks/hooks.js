import { useCallback, useRef, useEffect } from 'react';
import { debounce } from '../utilities';


export function useDebounce(callback, delay) {
    const memoizedCallback = useCallback(callback, []);
    const debouncedFn = useRef(debounce(memoizedCallback, delay));

    useEffect(() => {
      debouncedFn.current = debounce(memoizedCallback, delay);
    }, [memoizedCallback, debouncedFn, delay]);

    return debouncedFn.current;
};