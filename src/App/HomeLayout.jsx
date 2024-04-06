import HomeHeader from './Layout/HomeHeader.jsx'
import HomeFooter from './Layout/HomeFooter.jsx'
import { Outlet } from 'react-router-dom'

const Layout = ({
    signUpText, setSignUpText
}) => {
    return (
        <div className="app">
            <HomeHeader 
                signUpText = {signUpText}
                setSignUpText = {setSignUpText}
            />
            <Outlet/>
            <HomeFooter/>
        </div>
    )
}
export default Layout