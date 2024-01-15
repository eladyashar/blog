import {Header} from "./components/hedaer";
import {Outlet} from "react-router-dom";

export function App() {
  return (
      <div>
        <Header />
        <Outlet />
      </div>
  )
}
