import React from 'react'
import './ChannelRow.css';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

function ChannelRow({ image, channel, subs, noOfVideo, description, verified, }) {
    return (
        <div className='channelRow'>
            {/* <AccountCircleIcon
                className='channelRow__logo' src={image} /> */}
                {/* ' src={image} */}
                <img className='channelRow__logo' src={image} alt="" />
            <div className="channelRow__text">
                <h4>{channel} {verified && <VerifiedIcon />}
                </h4>
                <p>
                    {subs} subscribers ● {noOfVideo} video
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ChannelRow