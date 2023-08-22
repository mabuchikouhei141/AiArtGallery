import { useState, useEffect } from 'react';
import Link from 'next/link';

function Gallery({ images }) {
    const [displayIndexes, setDisplayIndexes] = useState([]);

    useEffect(() => {
        const indexes = images.map((_, index) => Math.random() < 0.5 ? 'blank' : index);
        setDisplayIndexes(indexes);
    }, [images]);

    return (
        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4 md:gap-6 md:p-6 lg:grid-cols-5 lg:gap-8 lg:p-8 lg:mx-40">
            {displayIndexes.map((value, index) => (
                value === 'blank' ? 
                    <div key={index} className="relative overflow-hidden rounded-md" /> : 
                    <div key={index} className="relative overflow-hidden rounded-md">
                        <Link href={`/image/${images[value].id}`} passHref>
                            <img 
                                src={images[value].src} 
                                alt={images[value].alt} 
                                className="w-full h-full object-cover cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:brightness-90" 
                            />
                        </Link>
                    </div>
            ))}
        </div>
    );
}

export default Gallery;
