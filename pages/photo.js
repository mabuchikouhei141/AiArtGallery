import Gallery from '../components/Gallery';
import Header from '@/components/Header';

const startId = 37;
const endId = 56;
const images = [];

for (let i = startId; i <= endId; i++) {
    images.push({
        id: i.toString(),
        src: `/galleryImg/photo/img${i}.jpeg`
    });
}

console.log(images);


export default function PhotoPage() {
  return (
    <>
    <Header />
    <Gallery images={images} />
    </>
  );
}
