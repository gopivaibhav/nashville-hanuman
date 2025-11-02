import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Camera, Video } from 'lucide-react';
import img1 from '../../../public/k-img1.jpg';
import img2 from '../../../public/k-img2.jpg';
import img3 from '../../../public/k-img3.jpg';
import img4 from '../../../public/k-img4.jpg';
import img5 from '../../../public/k-img5.jpg';
import img6 from '../../../public/k-img6.jpg';
import img7 from '../../../public/k-img7.jpg';
import img8 from '../../../public/k-img8.jpg';
import img9 from '../../../public/k-img9.jpg';
import img10 from '../../../public/k-img10.jpg';
import vid1 from '../../../public/k-vid1.mp4';
import vid2 from '../../../public/k-vid2.mp4';
import vid3 from '../../../public/k-vid3.mp4';

const KanyaPooja: React.FC = () => {
  const [photosOpen, setPhotosOpen] = useState(true);
  const [videosOpen, setVideosOpen] = useState(true);

const photos = [
    { id: 1, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052402/k-img5_ns71nw.jpg', title: 'Ganesh Festival 1' },
    { id: 2, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052397/k-img3_sqahaj.jpg', title: 'Ganesh Festival 2' },
    { id: 3, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052402/k-img7_wizahc.jpg', title: 'Ganesh Festival 3' },
    { id: 4, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052402/k-img8_e1tw8g.jpg', title: 'Ganesh Festival 4' },
    { id: 5, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052401/k-img9_ek11fy.jpg', title: 'Ganesh Festival 5' },
    { id: 6, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052399/k-img4_adaf5m.jpg', title: 'Ganesh Festival 6' },
    { id: 7, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052401/k-img6_paabgn.jpg', title: 'Ganesh Festival 7' },
    { id: 8, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052399/k-img1_adya3q.jpg', title: 'Ganesh Festival 8' },
    { id: 9, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052397/k-img2_z1r1oq.jpg', title: 'Ganesh Festival 9' },
    { id: 10, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052402/k-img10_vsgkj0.jpg', title: 'Ganesh Festival 10' },
  ];

  const videos = [
    { id: 1, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762052741/k-vid2_u9fdfg.mp4', title: 'Ganesh Festival Video 1' },
    { id: 2, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762052739/k-vid1_y3wuaf.mp4', title: 'Ganesh Festival Video 2' },
    { id: 3, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762052733/k-vid3_ti0wve.mp4', title: 'Ganesh Festival Video 3' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#ff9933] to-[#e67a00] text-white py-16 px-6 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Kanya Pooja</h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-12 space-y-8">
        {/* Photos Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <button
            onClick={() => setPhotosOpen(!photosOpen)}
            className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-[#ff9933] to-[#e67a00] text-white hover:from-[#e67a00] hover:to-[#ff9933] transition-all"
          >
            <div className="flex items-center gap-3">
              <Camera size={32} />
              <h2 className="text-3xl font-bold text-white">Photos</h2>
            </div>
            {photosOpen ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
          </button>
          
          {photosOpen && (
            <div className="p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {photos.map((photo) => (
                  <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Videos Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <button
            onClick={() => setVideosOpen(!videosOpen)}
            className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-[#ff9933] to-[#e67a00] text-white hover:from-[#e67a00] hover:to-[#ff9933] transition-all"
          >
            <div className="flex items-center gap-3">
              <Video size={32} />
              <h2 className="text-3xl font-bold text-white">Videos</h2>
            </div>
            {videosOpen ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
          </button>
          
          {videosOpen && (
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="space-y-2">
                    <div className="relative overflow-hidden rounded-lg shadow-md aspect-video bg-black">
                      <iframe
                        src={video.url}
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KanyaPooja;