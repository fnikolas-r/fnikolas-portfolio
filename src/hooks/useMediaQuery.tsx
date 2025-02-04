interface queryProp {
  minWidth?: number;
  maxWidth?: number;
  custom? : string;
}

import { useState, useEffect } from "react";

function handleObjectQuery(queryObject:queryProp) : string {

    const {minWidth, maxWidth, custom: customQuery} = queryObject;
    const conditions = [];

    if (minWidth) conditions.push(`(min-width: ${minWidth}px)`)
    if (maxWidth) conditions.push(`(max-width: ${maxWidth}px)`)
    if (customQuery) conditions.push(customQuery)


    return conditions.join('and');
}

export  function useMediaQuery(querySet: queryProp) {
  const [isWindowMatch, setisWindowMatch] = useState(false);

  useEffect(() => {
    // First Iteration
    if (typeof window !== "undefined") {

        const queries = handleObjectQuery(querySet);
        
        const windowMediaQueries = window.matchMedia(queries)
        setisWindowMatch(windowMediaQueries.matches)

        const handlerWindowChange = (event : MediaQueryListEvent) => setisWindowMatch(event.matches);
        windowMediaQueries.addEventListener('change', handlerWindowChange);

        return () => windowMediaQueries.removeEventListener('change',handlerWindowChange);

    }
  }, [querySet]);

  return isWindowMatch;
}
