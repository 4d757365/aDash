import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize='small' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={78} text={"78%"} strokeWidth={5} />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$829</p>
                <p className="info">
                    Previous transactions processing.
                    Last payments may not be included.
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">This Week</div>
                        <div className="itemResult pos">
                            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                            <div className="resultAmount">$26.2k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult neg">
                            <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                            <div className="resultAmount">$11.9k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult pos">
                            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                            <div className="resultAmount">$143.7k</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured