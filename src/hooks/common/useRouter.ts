import { useMemo } from 'react';
import queryString from 'query-string';

import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';

export function useRouter<P extends object | null = any>() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const math = useRouteMatch();

  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      path: location.pathname,
      ...queryString.parse(location.search),
      ...params,

      math,
      history,
      location,
      params: params as P,
    };
  }, [params, math, location, history]);
}
