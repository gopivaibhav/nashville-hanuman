import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Camera, Video } from 'lucide-react'; 

const GaneshFestival: React.FC = () => {
  const [photosOpen, setPhotosOpen] = useState(true);
  const [videosOpen, setVideosOpen] = useState(true);

  const photos = [
    { id: 1, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762056535/cult-img10_aojk4q.jpg', title: 'Ganesh Festival 1' },
    { id: 2, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052399/cult-img13_dwjeok.jpg', title: 'Ganesh Festival 2' },
    { id: 3, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052400/cult-img15_ytrkcl.jpg', title: 'Ganesh Festival 3' },
    { id: 4, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052399/cult-img9_t8j7zi.jpg', title: 'Ganesh Festival 4' },
    { id: 5, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052399/cult-img14_cfpevf.jpg', title: 'Ganesh Festival 5' },
    { id: 6, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052396/cult-img12_tc3o66.jpg', title: 'Ganesh Festival 6' },
    { id: 7, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052392/cult-img1_krb2ln.jpg', title: 'Ganesh Festival 7' },
    { id: 8, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052396/cult-img7_ndagy5.jpg', title: 'Ganesh Festival 8' },
    { id: 9, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052395/cult-img11_ynqy2i.jpg', title: 'Ganesh Festival 9' },
    { id: 10, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052394/cult-img5_eo3h68.jpg', title: 'Ganesh Festival 10' },
    { id: 11, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052393/cult-img2_merph0.jpg', title: 'Ganesh Festival 11' },
    { id: 12, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052397/cult-img8_c5vz3q.jpg', title: 'Ganesh Festival 12' },
    { id: 13, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052391/cult-img4_kd2oeb.jpg', title: 'Ganesh Festival 13' },
    { id: 14, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052392/cult-img6_vwjoce.jpg', title: 'Ganesh Festival 14' },
    { id: 15, url: 'https://res.cloudinary.com/ddwvurvd4/image/upload/v1762052392/cult-img3_kcknot.jpg', title: 'Ganesh Festival 15' }
  ];

  const videos = [
    { id: 1, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762052749/vid2_shphik.mp4', title: 'Ganesh Festival Video 1' },
    { id: 2, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762052748/vid4_zbvxga.mp4', title: 'Ganesh Festival Video 2' },
    // { id: 3, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762052746/vid1_yqgb5m.3gp', title: 'Ganesh Festival Video 3' },
    { id: 4, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762056062/vid3_1_uqkoru.mp4', title: 'Ganesh Festival Video 4' },
    { id: 5, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762056082/vid5_1_yka5pu.mp4', title: 'Ganesh Festival Video 5' },
    { id: 6, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762055646/vid6_vaojj8.mp4', title: 'Ganesh Festival Video 6' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#ff9933] to-[#e67a00] text-white py-16 px-6 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold geeimteger13 text-white">Ganesh Festival</h1>
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

export default GaneshFestival;

