import React from "react"; 
import {  Route } from "react-router-dom";

function Index() {
    return <h2>Home2</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }

const routes = [
  {path:"/", component: Index, isExact:true},
  {path:"/about/", component: About},
  {path:"/users/", component: Users},
]

function getRoute({path, component, isExact}){
  return (
    <Route key={path} path={path} exact={isExact} component={component} />
  )
}

export default function AppRouter(){
    return(
      <main>
        {routes.map(getRoute)}
        </main>
    )
}
export const routerLinks = routes.map(route => route.path)


