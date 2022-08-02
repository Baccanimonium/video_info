import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login"
import history from "./history"
import {useRecoilState} from "recoil";
import {TOKEN_KEY, tokenAtom} from "./Store/userObject";
import Tab from "./Tab"

import useWatch from "@/component_ocean/Utils/Hooks/useWatch";

let initialRoute = history.location.pathname !== "/login" ? history.location.pathname : "/"

function App() {

  const [token, setToken] = useRecoilState(tokenAtom)

  useWatch(token, (token, prevToken) => {
    if (token === null && prevToken) {
      localStorage.setItem(TOKEN_KEY, "")
    } else if (token && prevToken === null) {
      localStorage.setItem(TOKEN_KEY, token)
      initialRoute = undefined
    }
  })

  return (
    <>
      {/*{token === null*/}
      {/*  ? (*/}
      {/*    <Routes>*/}
      {/*      <Route*/}
      {/*        path="/login"*/}
      {/*        element={<Login initialRoute={initialRoute} onSubmit={setToken}/>}*/}
      {/*      />*/}
      {/*      <Route*/}
      {/*        path="*"*/}
      {/*        element={<Navigate to="/login"/>}*/}
      {/*      />*/}
      {/*    </Routes>*/}
        {/*)*/}
        {/*: (*/}
          <Routes>
            <Route
                path="/login"
                element={<Login initialRoute={initialRoute} onSubmit={setToken}/>}
            />
            {/*<Route*/}
            {/*    path="*"*/}
            {/*    element={<Navigate to="/login"/>}*/}
            {/*/>*/}
            <Route
              path="/tab/*"
              element={<Tab />}
            />
            {/*<Route*/}
            {/*  path="/login"*/}
            {/*  element={<Login onSubmit={setToken}/>}*/}
            {/*/>*/}
            <Route
              path="*"
              element={<Navigate to="/tab"/>}
            />
          </Routes>
        {/*)}*/}
    </>
  );
}

export default App;
