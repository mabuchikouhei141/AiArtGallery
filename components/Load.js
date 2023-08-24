import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import anime from 'animejs';
import styles from './load.module.css';

const ranges = {
  portrait: [1, 23],
  square: [24, 36],
  photo: [37, 56],
  vertical: [57, 81],
  cinematic: [82, 112],
  widescreen: [113, 138]
};

const images = [];
for (let folder in ranges) {
  for (let i = ranges[folder][0]; i <= ranges[folder][1]; i++) {
    images.push(`/galleryImg/${folder}/img${i}.jpeg`);
  }
}

const Load = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

   
    useEffect(() => {
      const handleRouteChange = () => setLoading(true);
      const handleRouteComplete = () => setLoading(false);
      const handleRouteError = () => setLoading(false);
  
      router.events.on('routeChangeStart', handleRouteChange);
      router.events.on('routeChangeComplete', handleRouteComplete);
      router.events.on('routeChangeError', handleRouteError);
  
      return () => {
        router.events.off('routeChangeStart', handleRouteChange);
        router.events.off('routeChangeComplete', handleRouteComplete);
        router.events.off('routeChangeError', handleRouteError);
      };
    }, [router]);
  
    useEffect(() => {
        if (loading) {
            const gridItems = document.querySelectorAll(`.${styles.loaderItem}`);
    
            gridItems.forEach(item => {
                anime({
                    targets: item,
                    loop: true,
                    duration: () => anime.random(4000, 6000),
                    delay: anime.stagger(100),
                    opacity: [0.6, 1],
                    translateY: () => `${anime.random(-50, 50)}px`,
                    translateX: () => `${anime.random(-50, 50)}px`,
                    rotate: () => anime.random(-45, 45),
                    scale: () => anime.random(0.5, 1.5),
                    easing: "easeInOutQuad",
                    backgroundColor: [anime.random(0, 255), anime.random(0, 255), anime.random(0, 255)],
                    filter: [
                        `brightness(${anime.random(80, 120)}%)`,
                        `saturate(${anime.random(80, 120)}%)`
                    ]
                });
            });
        }
    }, [loading]);
    
    
    

    if (!loading) return null;

    return (
        <>
        <div className={styles.overlay}></div>
        <div className={styles.loaderContainer}>
            {images.map((src, idx) => (
                <div key={idx} className={styles.loaderItem} style={{ backgroundImage: `url('${src}')` }}></div>
            ))}
        </div>
        </>
    );
}

export default Load;
