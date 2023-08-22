import Gallery from '../components/Gallery';
import Header from '@/components/Header';

const startId = 24;
const endId = 36;
const images = [];

for (let i = startId; i <= endId; i++) {
    images.push({
        id: i.toString(),
        src: `/galleryImg/square/img${i}.jpeg`
    });
}

export default function SquarePage() {
  return (
    <>
    <Header />
    <Gallery images={images} />
    </>
  );
}
