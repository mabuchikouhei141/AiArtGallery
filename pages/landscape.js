import Gallery from '../components/Gallery';
import Header from '@/components/Header';

const images = [
  {id: '1', src: '/galleryImg/portrait/kabuki girl in a leather jacket standing next to a motorcycle light shadow effects intricate highly  (1).jpeg', alt: 'Description 1' },
  {id: '2', src: '/galleryImg/portrait/kabuki girl in a leather jacket standing next to a motorcycle light shadow effects intricate highly  (2).jpeg', alt: 'Description 2' },
  {id: '3', src: '/galleryImg/portrait/kabuki girl in a leather jacket standing next to a motorcycle light shadow effects intricate highly .jpeg', alt: 'Description 1' },
  {id: '4',  src: '/galleryImg/portrait/kabuki Man in a leather jacket standing next to a motorcycle light shadow effects intricate highly d (2).jpeg', alt: 'Description 1' },
  {id: '5',  src: '/galleryImg/portrait/kabuki Man in a leather jacket standing next to a motorcycle light shadow effects intricate highly d (4).jpeg', alt: 'Description 2' },
  {id: '6',  src: '/galleryImg/portrait/kabuki Man in a leather jacket standing next to a motorcycle light shadow effects intricate highly d.jpeg', alt: 'Description 1' },
  {id: '7',  src: '/galleryImg/portrait/Robotic black woman standing in front of a window with her hair blowing, modern anime, highly detail.jpeg', alt: 'Description 1' },
  {id: '8',  src: '/galleryImg/portrait/Robotic glamorous woman standing in front of a window with her hair blowing, modern anime, highly de.jpeg', alt: 'Description 1' },
  {id: '9',  src: '/galleryImg/portrait/Robotic gunner woman standing in front of a window with her hair blowing, modern anime, highly detai (1).jpeg' },
  {id: '10',  src: '/galleryImg/portrait/Robotic hand with gold and white accents Blue furry monster with two large eyes and a big nose on wh.jpeg' },
  {id: '11',  src: '/galleryImg/portrait/Robotic magician standing in front of a window with her hair blowing, modern anime, highly detailed, (1).jpeg' },
  {id: '12',  src: '/galleryImg/portrait/Robotic magician standing in front of a window with her hair blowing, modern anime, highly detailed, (2).jpeg' },
  {id: '13',  src: '/galleryImg/portrait/Robotic magician standing in front of a window with her hair blowing, modern anime, highly detailed, (3).jpeg' },
  {id: '14',  src: '/galleryImg/portrait/Robotic magician standing in front of a window with her hair blowing, modern anime, highly detailed, (4).jpeg' },
  {id: '15',  src: '/galleryImg/portrait/Robotic magician standing in front of a window with her hair blowing, modern anime, highly detailed, (5).jpeg' },
  {id: '16',  src: '/galleryImg/portrait/Robotic magician standing in front of a window with her hair blowing, modern anime, highly detailed, (6).jpeg' },
  {id: '17',  src: '/galleryImg/portrait/Robotic magician standing in front of a window with her hair blowing, modern anime, highly detailed, (7).jpeg' },
  {id: '18',  src: '/galleryImg/portrait/Robotic magician standing in front of a window with her hair blowing, modern anime, highly detailed, (8).jpeg' },
  {id: '19',  src: '/galleryImg/portrait/Robotic magician standing in front of a window with her hair blowing, modern anime, highly detailed, (9).jpeg' },
  {id: '20',  src: '/galleryImg/portrait/Robotic magician standing in front of a window with her hair blowing, modern anime, highly detailed,.jpeg' },

  // ... 他の画像データ
];

export default function LandscapePage() {
  return (
    <>
    <Header />
    <Gallery images={images} />
    </>
  );
}
