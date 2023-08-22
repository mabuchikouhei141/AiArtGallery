import { useRouter } from 'next/router';
import Link from 'next/link';

const ranges = {
    portrait: [1, 23],
    square: [24, 36],
    photo: [37, 56],
    vertical: [57, 81],
    cinematic: [82, 112],
    widescreen: [113, 138]
};

const images = [];

// 画像パスを動的に生成
for (let folder in ranges) {
    for (let i = ranges[folder][0]; i <= ranges[folder][1]; i++) {
        images.push({
            id: i.toString(),
            src: `/galleryImg/${folder}/img${i}.jpeg`
        });
    }
}

function getCurrentCategory(id) {
    for (let folder in ranges) {
        if (id >= ranges[folder][0] && id <= ranges[folder][1]) {
            return folder;
        }
    }
    return null;
}

function ImageDetail() {
  const router = useRouter();
  const { id } = router.query;
  const currentId = Number(id);

  // 前後のIDを計算
  const prevId = currentId > 1 ? currentId - 1 : null;
  const nextId = currentId < 138 ? currentId + 1 : null;
  const currentCategory = getCurrentCategory(currentId);
  // IDに基づいて画像を検索
  const image = images.find(img => img.id === id);

  if (!image) return <p>Loading...</p>;



  return (
    <div className="container mx-auto max-w-lg md:max-w-4xl lg:max-w-6xl m-10 p-10 h-full">
            {/* Back button */}
            <Link href={`/${currentCategory}`} className="mb-8 inline-block px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-200 transition-colors duration-300">
                ← Home
            </Link>

            {/* Image and Description */}
            <div className="mb-8">
                <img src={image.src} alt={image.alt} className="w-full object-cover" />
                <p className="mt-4">{image.alt}</p>
            </div>

            {/* Prev and Next buttons */}
            <div className="flex justify-between">
                {prevId > 0 && (
                    <Link href={`/image/${prevId}`} className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors">
                        Back
                    </Link>
                )}

                <Link href={`/image/${nextId}`} className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors">
                    Next
                </Link>
            </div>
        </div>
  );
}

export default ImageDetail;




