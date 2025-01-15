import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bockmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 m-4">
            <div>
                <h3 className='text-4xl text-center'>Reading Time:{readingTime}</h3>
            </div>
            <h3 className="text-3xl text-center">Bockmarked Blogs:{bookmarks.length}</h3>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bockmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bockmarks;