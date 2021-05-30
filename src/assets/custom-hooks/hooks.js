import { useCallback, useRef, useEffect } from 'react';
import { debounce } from '../utilities';


export function useDebounce(callback, delay) {
  const memoizedCallback = useCallback(callback, [callback]);
  const debouncedFn = useRef(debounce(memoizedCallback, delay));

  useEffect(() => {
    debouncedFn.current = debounce(memoizedCallback, delay);
  }, [memoizedCallback, debouncedFn, delay]);

  return debouncedFn.current;
};

export function usePrevious(value) {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

/*array of KeyboardEvent.code values; any one of them will trigger the provided callback. By default, 
trigger callback only once per keypress, but if third argument, continuouslyFireCallback, is true 
run callback as long as key is being held down*/
export function useKeyDown(keydownCodePropArray, callback, continuouslyFireCallback = false) {
  const handler = useCallback((e) => {
    if ([...keydownCodePropArray].includes(e.code) && (continuouslyFireCallback ? true : !e.repeat)) {
      callback();
    }
  }, [keydownCodePropArray, callback, continuouslyFireCallback]);

  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [handler]);
};