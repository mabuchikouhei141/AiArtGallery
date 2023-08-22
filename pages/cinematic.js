import Gallery from '../components/Gallery';
import Header from '@/components/Header';

const startId = 82;
const endId = 112;
const images = [];

for (let i = startId; i <= endId; i++) {
    images.push({
        id: i.toString(),
        src: `/galleryImg/cinematic/img${i}.jpeg`
    });
}

export default function CinematicPage() {
  return (
    <>
    <Header />
    <Gallery images={images} />
    </>
  );
}
