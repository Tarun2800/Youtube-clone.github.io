import React from 'react'
import './SearchPage.css';
import VideoRow from './VideoRow';
import ChannelRow from './ChannelRow';
import TuneIcon from '@mui/icons-material/Tune';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://www.linkpicture.com/q/pp_1.png"
                channel="CodeWithTarun"
                verified
                subs="765k"
                noOfVideo={2128}
                description="You can find awesome programming lessons here! Also expect programming tipsand trick that will take your coding to the..."
            />
            <hr />
            <VideoRow
                views="567k"
                subs="765k"
                description="Do you want to free most attractive forntend projects  "
                timestamp="2 hours ago"
                channel="CodeWithTarun"
                title="Let's Build Youtube Clone with REACT JS for Beginners "
                image="https://www.linkpicture.com/q/Blue-Modern-Eye-Catching-Vlog-YouTube-Thumbnail.png"
            />
             <VideoRow
                views="1.4M"
                subs="765k"
                description="3-Day Raect JS + Web 3.0 Challenge  "
                timestamp="10 Days ago"
                channel="CodeWithTarun"
                title="Your Roadmap to become a Frontend + Web 3.0 Developer in 2023 "
                image="https://www.linkpicture.com/q/Green-Modern-How-To-Make-Money-Online-YouTube-Thumbnail.png"
            />
             <VideoRow
                views="234k"
                subs="765k"
                description="Do you want to free most attractive forntend projects  "
                timestamp="15 Days ago"
                channel="CodeWithTarun"
                title="Build Morden Cryptopunk Clone with React.js & Web 3.0 "
                image="https://www.linkpicture.com/q/Navy-Gradient-Abstract-How-to-Video-Youtube-Thumbnail.png"
            />
             <VideoRow
                views="563k"
                subs="765k"
                description="In this tutorial, you're gonna be building the Coinbase Blockchain Web 3.0 App using Next JS, Sanity.io, thirdweb, Styled Components, and Vercel 🔥  "
                timestamp="1 month ago"
                channel="CodeWithTarun"
                title=" Build coinbase Blockchain Web 3.0 App with Next.js | Santiy.io | thirdweb "
                image="https://www.linkpicture.com/q/Navy-Gradient-Abstract-How-to-Video-Youtube-Thumbnail-2.png"
            />
             <VideoRow
                views="237k"
                subs="765k"
                description=" "
                timestamp="2 month ago"
                channel="CodeWithTarun"
                title="Meet The Man Who Sold His Company and Made $100 Million with NFTs "
                image="https://www.linkpicture.com/q/Yellow-Bright-Business-Idea-Tutorial-Youtube-Thumbnail.png"
            />
             <VideoRow
                views="772k"
                subs="765k"
                description=" I talked to Ryan Carson today. He is the founder of Team Tree House. We dove deep into all the lessons he's learned throughout the years / blockchain looks like. "
                timestamp="2 month ago"
                channel="CodeWithTarun"
                title="Confronting the CEO Who Truned Down $100M and Launched His NFT Collection (Ryan Carson)"
                image="https://www.linkpicture.com/q/Turquoise-Modern-How-to-Be-Successful-Youtube-Thumbnail.png"
            />
             <VideoRow
                views="453k"
                subs="765k"
                description=" In this video, Ansh Mehra has come up with ChatGPT Tutorial for Beginners in Hindi. This is a complete Tutorial, and after this you won't be needing another ChatGPT Tutorial for beginners ever."
                timestamp="3 hours ago"
                channel="CodeWithTarun"
                title="ChatGPT Tutorial for Beginners in Hindi(2023) Step by Step "
                image="https://www.linkpicture.com/q/Navy-Gradient-Abstract-How-to-Video-Youtube-Thumbnail-3.png"
            />
             
             

        </div>


    );
}

export default SearchPage;