import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author,author_img,reading_time,posted_date,hashtags}=blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover pcture of the title ${title}`}/>
            
            <div className='flex justify-between'>
                <div className='flex
                gap-3'>
                  <img className='w-14 rounded-full' src={author_img} alt="" />  
                  <div>
                  <h3 className='text-2xl'>{author}</h3>
                  <p>{posted_date}</p>
                  </div>
                </div>
                <div>
                  <span>{reading_time}min red</span>
               <button onClick={()=> handleAddToBookmark(blog)} className='ml-5'><CiBookmark /></button>   
                </div>

            </div>
            <h2 className='text-4xl'>{title}</h2>

            <p>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-purple-500 font-bold underline'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func
}
export default Blog;