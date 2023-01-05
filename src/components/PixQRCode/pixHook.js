import { useState, useEffect } from 'react';
import { generatePixCode } from './pixCode';

export function usePix(params, onError) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    try {
      const pixCode = generatePixCode(params);
      if (pixCode !== result) {
        setResult(pixCode);
      }
    } catch (e) {
      setResult(null);
      if (onError) {
        onError(e, params);
      }
    }
  }, [params, result, onError]);

  return result;
}
