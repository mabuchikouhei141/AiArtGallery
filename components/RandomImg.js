import React, { useState, useEffect } from 'react';

function RandomImg() {
    const startId = 113;
    const endId = 138;
    const images = [];

    for (let i = startId; i <= endId; i++) {
        images.push({
            id: i.toString(),
            src: `/galleryImg/widescreen/img${i}.jpeg`
        });
    }

    const [randomImage, setRandomImage] = useState(null);
    const [lastIndex, setLastIndex] = useState(null);

    useEffect(() => {
        const initialIndex = Math.floor(Math.random() * images.length);
        setRandomImage(images[initialIndex]);
        setLastIndex(initialIndex);
    }, []);

    const generateRandomImage = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * images.length);
        } while (newIndex === lastIndex);

        setRandomImage(images[newIndex]);
        setLastIndex(newIndex);
    }

    return (
        <div className="container mx-auto p-5 max-w-4xl">
            <div className="shadow-lg rounded overflow-hidden">
                {randomImage && <img src={randomImage.src} alt="Random" className="w-full object-cover md:max-h-96 py-20 md:py-0 shadow-2xl" />}
            </div>
            <div className="text-center mt-10">
                <button onClick={generateRandomImage} className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-300">
                    Random
                </button>
            </div>
        </div>
    );
}

export default RandomImg;
