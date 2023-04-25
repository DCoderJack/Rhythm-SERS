import React from 'react'

const MusicList = (props) => {
  let {links} = props;
  return (
    <>
    <div className='mx-2 container'>
    <div className=' my-3'>
      <div class=" card" style={{width : "35.065rem"}}>
    
    <iframe width="560" height="315" src={links} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  {/* <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a> */}
  {/* </div> */}
</div>
</div>
</div>

    </>
  )
}

export default MusicList