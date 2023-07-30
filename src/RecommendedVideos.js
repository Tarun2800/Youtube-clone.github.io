import React from 'react'
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommmended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="DEKHO VO AGAYA"
          views="10M  Views"
            timestamp="3 day ago"
          channei="Carryminati"
          image="https://wallpapers.com/images/high/indian-youtuber-carryminati-hd-b9t2v400m2tb8mu0.webp"
        />
         <VideoCard
          title="Let's Build Youtube Clone with REACT JS for Beginners"
          views="7M  Views"
            timestamp="12 day ago"
          channei="CodewithTarun"
          image="https://www.linkpicture.com/q/Blue-Modern-Eye-Catching-Vlog-YouTube-Thumbnail.png"
        />
         <VideoCard
          title="Your Roadmap to become a Frontend + Web 3.0 Developer in 2023"
          views="10M  Views"
            timestamp="3 day ago"
          channei="clever Programming"
          image="https://www.linkpicture.com/q/Green-Modern-How-To-Make-Money-Online-YouTube-Thumbnail.png"
        />
         <VideoCard
          title="Build Morden Cryptopunk Clone with React.js & Web 3.0 "
          views="456k Views"
            timestamp="21 day ago"
          channei="Shivam coder"
          image="https://www.linkpicture.com/q/Navy-Gradient-Abstract-How-to-Video-Youtube-Thumbnail.png"
        />
         <VideoCard
          title="Build coinbase Blockchain Web 3.0 App with Next.js | Santiy.io | thirdweb"
          views="34k Views"
            timestamp="18 day ago"
          channei="coding nobita"
          image="https://www.linkpicture.com/q/Navy-Gradient-Abstract-How-to-Video-Youtube-Thumbnail-2.png"
        />
         <VideoCard
          title="Meet The Man Who Sold His Company and Made $100 Million with NFTs "
          views="125k Views"
            timestamp="3 day ago"
          channei=""
          image="https://www.linkpicture.com/q/Yellow-Bright-Business-Idea-Tutorial-Youtube-Thumbnail.png"
        />
         <VideoCard
          title="Confronting the CEO Who Truned Down $100M and Launched His NFT Collection (Ryan Carson)"
          views="10M  Views"
            timestamp=" 10 month ago"
          channei="BBki"
          image="https://www.linkpicture.com/q/Turquoise-Modern-How-to-Be-Successful-Youtube-Thumbnail.png"
        />
         <VideoCard
          title="ChatGPT Tutorial for Beginners in Hindi(2023) Step by Step"
          views="10M  Views"
            timestamp="3 day ago"
          channei="Dhruv Rathi"
          image="https://www.linkpicture.com/q/Navy-Gradient-Abstract-How-to-Video-Youtube-Thumbnail-3.png"
        />
         <VideoCard
          title="DEKHO Vo AGAYA"
          views="10M  Views"
            timestamp="3 day ago"
          channei="Carryminati"
          image="https://wallpapers.com/images/high/indian-youtuber-carryminati-hd-b9t2v400m2tb8mu0.webp"
        />
        

      </div>
    </div>
  )
}

export default RecommendedVideos