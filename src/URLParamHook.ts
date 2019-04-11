import { useState, useEffect } from "react";
import { Location } from "history";

export function useUrlQuery(
  location: Location,
  extraction: (params: URLSearchParams) => string | null
) {
  let getUrlParams = () => {
    if (!location.search) return new URLSearchParams();
    return new URLSearchParams(location.search);
  };

  let [desiredProp, setDesiredProp] = useState();

  useEffect(() => {
    console.log("re-calculating name");
    setDesiredProp(extraction(getUrlParams()));
  }, [location]);

  return desiredProp;
}
