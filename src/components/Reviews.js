import {useState} from 'react'

function Reviews({ reviewData }) {

  const [isOpen, setIsOpen] = useState(false);
  const lineClamp = 'line-clamp-5';

    return (
      <div>
        <div className='px-2'>
            {reviewData.author_details.rating > 1 && (
                <>
                    <h3>{reviewData.author}</h3>
                    <div className='flex align-middle'>
                      <p>{reviewData.author_details.rating.toFixed(1)}</p>
                      <svg className="ml-1 self-center" xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 24 26" fill="yellow">
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                                  </svg>
                    </div>
                    <p className={`${!isOpen ? lineClamp : ''}`}>{reviewData.content}</p>
                    <button onClick = {() => setIsOpen(!isOpen)} className="mb-10 mt-2 text-logo">{isOpen ? 'Read Less...' : 'Read More...'}</button>    
                </>
            )}
        </div>
      </div>
    ); 
  }
  
  export default Reviews;
 