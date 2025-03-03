'use client';
import Player from 'react-player';
const History = () => {
  return (
    <>
    <section className="relative w-full overflow-hidden min-h-[30rem]">
         <video src="/videos/ancient.mov" autoPlay loop className='w-full h-full absolute top-0 left-0 object-cover'></video>
      </section>
    </>
  );
};
export default History;
