import Gallery from '../components/Gallery';
import Header from '@/components/Header';

const startId = 1;
const endId = 23;
const images = [];

for (let i = startId; i <= endId; i++) {
    images.push({
        id: i.toString(),
        src: `/galleryImg/portrait/img${i}.jpeg`
    });
}

export default function PortraitPage() {
  return (
    <>
    <Header />
    <Gallery images={images} />
    </>
  );
}
