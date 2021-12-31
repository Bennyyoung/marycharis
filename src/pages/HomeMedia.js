import React from 'react'
// import { ReactVideo } from "reactjs-media";
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';

export default function HomeMedia() {
 return (
  <div className="container">
   <h4 className="center">Videos You May Like</h4>
   <div className="col s12 m6 l6">
    <div className="row">
     <div classsName="col s12 m6 l4">
      <h6><strong>@MaryCharisBF (NGO) TABLE FELLOWSHIP 30/12/2021</strong></h6>
      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FMARYCHARISBENEVOLENTFOUNDATION%2Fvideos%2F378643177359458%2F&show_text=false&width=560&t=0" width="500" height="314" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
     </div>

     <div classsName="col s12 m6 l4">
      <h6><strong>TABLE FELLOWSHIP 30/12/2021</strong></h6>

      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FMARYCHARISBENEVOLENTFOUNDATION%2Fvideos%2F642953363555305%2F&show_text=false&width=560&t=0" width="500" height="314" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
     </div>

     <div classsName="col s12 m6 l4">
      <h6><strong>GO WHERE THEY ARE MISSIONS  - AFROMEDIA/AJANGBADI & <br /> ILADO, LAGOS COMMUNITIES.</strong></h6>
      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FMARYCHARISBENEVOLENTFOUNDATION%2Fvideos%2F315482013801424%2F&show_text=false&width=560&t=0" width="500" height="314" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
     </div>

    </div>
   </div>

  </div>
 )
}
