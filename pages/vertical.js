import Gallery from '../components/Gallery';
import Header from '@/components/Header';

const startId = 57;
const endId = 81;
const images = [];

for (let i = startId; i <= endId; i++) {
    images.push({
        id: i.toString(),
        src: `/galleryImg/vertical/img${i}.jpeg`
    });
}
  



export default function VerticalPage() {
  return (
    <>
    <Header />
    <Gallery images={images} />
    </>
  );
}
