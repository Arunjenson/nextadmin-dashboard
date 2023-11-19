import { NavBar } from "../ui/dashboard/navbar/navbar"
import { Sidebar } from "../ui/dashboard/sidebar/sidebar"


export const Layout = ({children}) => {
  return (
      <div>
          <div className="">
              <Sidebar />
          </div>
          <div className="">
              <NavBar />
          </div>
    </div>
  )
}
