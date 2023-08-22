import Gallery from '../components/Gallery';
import Header from '@/components/Header';

const startId = 113;
const endId = 138;
const images = [];

for (let i = startId; i <= endId; i++) {
    images.push({
        id: i.toString(),
        src: `/galleryImg/widescreen/img${i}.jpeg`
    });
}



export default function WidescreenPage() {
  return (
    <>
    <Header />
    <Gallery images={images} />
    </>
  );
}
