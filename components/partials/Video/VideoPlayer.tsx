"use client";

export default function VideoPlayer() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <video
        src="/video/hero-video.mp4" 
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen object-cover"
      />
    </div>
  );
}
