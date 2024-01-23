import { useState, useEffect } from 'react';
import { IMAGE_URL_BASE } from "../utilities/api";

function Banner({ movieData }) {
    const [screenSize, setScreenSize] = useState('');

    useEffect(() => {
        // Function to update the screen size
        const updateScreenSize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setScreenSize('mobile');
            } else {
                setScreenSize('desktop');
            }
        };

        // Initial screen size update
        updateScreenSize();

        // Event listener for window resize
        window.addEventListener('resize', updateScreenSize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []); // Empty dependency array to run the effect only once on mount

    // Choose the appropriate banner path based on the screen size
    const bannerPath = screenSize === 'mobile'
        ? `${IMAGE_URL_BASE}/w780${movieData.backdrop_path}`
        : `${IMAGE_URL_BASE}/w1280${movieData.backdrop_path}`;

    return (
        <div className='lg:flex lg:justify-center'>
            <img className = "md:w-[1271px]" src={bannerPath} alt="" />
        </div>
    );
}

export default Banner;
