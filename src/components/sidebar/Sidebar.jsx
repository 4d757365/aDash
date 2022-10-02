import './sidebar.scss'
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}><span className="logo">aDash</span></Link>
            </div>

            <div className="line"></div>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{textDecoration:"none"}}>
                    <li>
                        <GridViewIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    </Link>
                    <Link to="/users" style={{textDecoration:"none"}}>
                    <li>
                        <PeopleOutlineIcon className='icon' />
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{textDecoration:"none"}}>
                    <li>
                        <StoreOutlinedIcon className='icon' />
                        <span>Products</span>
                    </li>
                    </Link>
                    <li>
                        <CreditCardOutlinedIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsightsOutlinedIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsOutlinedIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICES</p>
                    <li>
                        <CloudOutlinedIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <HistoryOutlinedIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="color"></div>
                <div className="color"></div>
            </div>
        </div>
    )
}

export default Sidebar