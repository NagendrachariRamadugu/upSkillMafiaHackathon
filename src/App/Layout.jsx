import HomeHeader from './Layout/HomeHeader.jsx'
import HomeFooter from './Layout/HomeFooter.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="app">
            <HomeHeader/>
            <Outlet/>
            <HomeFooter/>
        </div>
    )
}
export default Layout