import React from "react";

const PhotosPage: React.FC = () => {

   const [selectedPhoto, setSelectedPhoto] = React.useState<{
  url: string;
  title?: string;
} | null>(null);


  // Combine all event photos (currently only Ganesh Festival)
  const photos = [
    { id: 1, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762056535/cult-img10_aojk4q.jpg' },
    { id: 2, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052399/cult-img13_dwjeok.jpg' },
    { id: 3, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052400/cult-img15_ytrkcl.jpg' },
    { id: 4, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052399/cult-img9_t8j7zi.jpg' },
    { id: 5, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052399/cult-img14_cfpevf.jpg' },
    { id: 6, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052396/cult-img12_tc3o66.jpg' },
    { id: 7, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052392/cult-img1_krb2ln.jpg' },
    { id: 8, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052396/cult-img7_ndagy5.jpg' },
    { id: 9, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052395/cult-img11_ynqy2i.jpg' },
    { id: 10, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052394/cult-img5_eo3h68.jpg' },
    { id: 11, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052393/cult-img2_merph0.jpg' },
    { id: 12, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052397/cult-img8_c5vz3q.jpg' },
    { id: 13, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052391/cult-img4_kd2oeb.jpg' },
    { id: 14, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052392/cult-img6_vwjoce.jpg' },
    { id: 15, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052392/cult-img3_kcknot.jpg' },
    { id: 16, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052402/k-img5_ns71nw.jpg', title: 'Ganesh Festival 1' },
    { id: 17, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052397/k-img3_sqahaj.jpg', title: 'Ganesh Festival 2' },
    { id: 18, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052402/k-img7_wizahc.jpg', title: 'Ganesh Festival 3' },
    { id: 19, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052402/k-img8_e1tw8g.jpg', title: 'Ganesh Festival 4' },
    { id: 20, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052401/k-img9_ek11fy.jpg', title: 'Ganesh Festival 5' },
    { id: 21, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052399/k-img4_adaf5m.jpg', title: 'Ganesh Festival 6' },
    { id: 22, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052401/k-img6_paabgn.jpg', title: 'Ganesh Festival 7' },
    { id: 23, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052399/k-img1_adya3q.jpg', title: 'Ganesh Festival 8' },
    { id: 24, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052397/k-img2_z1r1oq.jpg', title: 'Ganesh Festival 9' },
    { id: 25, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052402/k-img10_vsgkj0.jpg', title: 'Ganesh Festival 10' }
  
  ];

  return (
    <div className="pt-24 px-4 md:px-10 pb-10 bg-gradient-to-b from-[#fff3cc] via-[#ffe8a3] to-[#fff1cc]">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#4a1c1c] mb-8">
        Cultural Photos
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
          >
           <img
  src={photo.url}
  alt={photo.title || "Cultural"}
  className="w-full h-44 sm:h-48 md:h-56 object-cover cursor-pointer hover:scale-105 transition"
  onClick={() => setSelectedPhoto(photo)}
/>
          </div>
        ))}
      </div>

      {/* Image Preview Modal */}
{selectedPhoto && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4"
    onClick={() => setSelectedPhoto(null)}
  >
    <div
      className="relative max-w-4xl w-full"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        onClick={() => setSelectedPhoto(null)}
        className="absolute -top-10 right-0 text-white text-2xl font-bold"
      >
        ✕
      </button>

      {/* Full image */}
      <img
        src={selectedPhoto.url}
        alt={selectedPhoto.title || "Cultural"}
        className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
      />

      {/* Download + Close */}
      <div className="mt-4 flex justify-center gap-4">
        <a
          href={selectedPhoto.url}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ff9933] text-white px-5 py-2 rounded-md hover:bg-[#e67a00] transition"
        >
          Download
        </a>

        <button
          onClick={() => setSelectedPhoto(null)}
          className="bg-white text-gray-800 px-5 py-2 rounded-md hover:bg-gray-200 transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default PhotosPage;
