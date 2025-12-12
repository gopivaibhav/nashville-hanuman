import React from "react";

const VideosPage: React.FC = () => {

  // Combine all event videos
  const videos = [
    { id: 1, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762052749/vid2_shphik.mp4' },
    { id: 2, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762052748/vid4_zbvxga.mp4' },
    { id: 3, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762056062/vid3_1_uqkoru.mp4' },
    { id: 4, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762056082/vid5_1_yka5pu.mp4' },
    { id: 5, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762055646/vid6_vaojj8.mp4' },
     { id: 6, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762052741/k-vid2_u9fdfg.mp4', title: 'Ganesh Festival Video 1' },
    { id: 7, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762052739/k-vid1_y3wuaf.mp4', title: 'Ganesh Festival Video 2' },
    { id: 8, url: 'https://res.cloudinary.com/ddwvurvd4/video/upload/v1762052733/k-vid3_ti0wve.mp4', title: 'Ganesh Festival Video 3' }
 
  ];

  return (
    <div className="pt-24 px-4 md:px-10 pb-10 ">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#4a1c1c] mb-8 ">
        Cultural Videos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {videos.map((video) => (
          <div key={video.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
            <video
              controls
              className="w-full h-56 object-cover"
            >
              <source src={video.url} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
