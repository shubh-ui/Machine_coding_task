import { useEffect } from 'react';
import './Post.css'

const Post = ({data, setPage}) => {

  useEffect(()=>{
    const obeserver = new IntersectionObserver((params) =>{
        console.log({params})
        if(params[0].isIntersecting) {
            setPage((prePage) => prePage +1);
        }
    })

    const images = document.querySelectorAll('.image');

    const lastImage = images[images.length -1];
    console.log({lastImage})
    if(lastImage) {
        obeserver.observe(lastImage);
    }
    
  }, [data])

  
  return <div>
    {
    data.length > 0 && (
      data.map((Item) => {
            return <div key={Item.id} className='image-container'>
                 <img className='image' src={Item.download_url} alt={Item.author} />
            </div>
      })  
    )
  };
  </div>
};

export default Post;
