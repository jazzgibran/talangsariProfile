"use client"
import React, { useEffect, useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

interface GallerySliderProps {
  progressBarColor?: string;
  imageItems: { img: string, desc: string }[]; // Define the type for imageItems
}

const GallerySlider: React.FC<GallerySliderProps> = ({ progressBarColor = 'bg-yelaccent', imageItems }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref for storing interval

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleImageChange('next'),
    onSwipedRight: () => handleImageChange('prev')
  });

  const handleImageChange = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageItems.length);
      setProgress(0);
    } else if (direction === 'prev') {
      setCurrentImageIndex(prevIndex => (prevIndex - 1 + imageItems.length) % imageItems.length);
      setProgress(0);
    }
  };

  const handleJumpToImage = (index: number) => {
    setCurrentImageIndex(index);
    setProgress(0);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handleImageChange('prev');
      } else if (event.key === 'ArrowRight') {
        handleImageChange('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress > 100) {
          handleImageChange('next');
          return 0;
        }
        return prevProgress + 3; // Increase progress bar width by 3% every 150ms
      });
    }, 150); // Update progress bar every 150 milliseconds

    return () => clearInterval(intervalRef.current as unknown as number); // Clean up the interval on unmount
  }, []);

  const { img, desc } = imageItems[currentImageIndex] || { img: '', desc: '' };

  return (
    <div {...swipeHandlers} className="">
      <div className='flex items-center justify-center'>
        <div className='overflow-hidden rounded-3xl'>
          <img className="w-screen lg:w-full object-cover md:object-contain object-center h-[400px] lg:h-[700px]" src={img} alt={desc} />
        </div>
      </div>

      {/* Progress Bar */}
      {/* <div className="w-1/2 mx-auto mt-4 h-1 bg-gray-100 rounded">
        <div
          className={`h-full ${progressBarColor} rounded`}
          style={{ width: `${progress}%`, transition: 'width 0.5s ease' }}
        ></div>
      </div> */}

      {/* Buttons to change Image */}
      {/* <div className="flex justify-center items-center space-x-1">
        <div className="flex flex-wrap justify-center items-center">
          {imageItems.map((item, index) => (
            <button
              key={index}
              className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
              onClick={(e) => handleJumpToImage(index)}
            >
              <span className={`text-center flex flex-col items-center ${currentImageIndex === index ? 'opacity-100' : 'opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity'}`}>
                <span className="flex items-center overflow-hidden justify-center relative w-9 h-9 rounded-lg bg-indigo-100 mb-2">
                  <img src={item.img} alt={item.desc} className='w-full h-9 object-cover' />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default GallerySlider;