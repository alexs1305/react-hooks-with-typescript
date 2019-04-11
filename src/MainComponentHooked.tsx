import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { useState, useEffect } from "react";
import { Location } from "history";
import { useUrlQuery } from "./URLParamHook";

const MainComponentHooked: React.SFC<RouteComponentProps<any>> = ({
  location
}) => {
  let name = useUrlQuery(location, s => s.get("name"));
  let age = useUrlQuery(location, s => s.get("age"));
  let [count, setCount] = useState(0);
  return (
    <div>
      name is: {name}, age is : {age}
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
    </div>
  );
};

export default withRouter(MainComponentHooked);
