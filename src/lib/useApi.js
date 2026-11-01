import { useEffect, useState, useCallback, useRef } from 'react';

export function useApi(fetcher, deps = []) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
  const [tick, setTick]       = useState(0);

  const fetcherRef = useRef(fetcher);
  fetcherRef.current = fetcher;

  useEffect(() => {
    const ctrl = new AbortController();
    setLoading(true);
    setError(null);
    fetcherRef.current({ signal: ctrl.signal })
      .then((d)  => { if (!ctrl.signal.aborted) setData(d); })
      .catch((e) => { if (!ctrl.signal.aborted) setError(e); })
      .finally(() => { if (!ctrl.signal.aborted) setLoading(false); });
    return () => ctrl.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, tick]);

  const refetch = useCallback(() => setTick((n) => n + 1), []);
  return { data, loading, error, refetch };
}