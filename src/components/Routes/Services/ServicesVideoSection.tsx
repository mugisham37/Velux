import Image from 'next/image'

const ServicesVideoSection = () => {
  return (
    <div className="w-full h-screen m-0 overflow-hidden">
      <section className="w-full h-full rounded-none bg-[#e5e2de]">
        <video 
          playsInline={true} 
          autoPlay={true} 
          muted={true} 
          loop={true} 
          preload="metadata"
          className="w-full h-full object-cover rounded-none hidden lg:block"
          poster="https://www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207"
        >
          <source
            src="https://www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0"
            type="video/mp4"
          />
          <Image
            className="rounded-none"
            src="https://www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207"
            alt="Video fallback"
            width={1920}
            height={1080}
            unoptimized
          />
        </video>
        
        <video 
          playsInline={true} 
          autoPlay={true} 
          muted={true} 
          loop={true}
          preload="metadata" 
          className="w-full h-full object-cover rounded-none block lg:hidden"
          poster="https://www.notsellingliquid.com/cdn/shop/files/preview_images/d95b8a6ea45e48b79d349081e3bca7fe.thumbnail.0000000000_small.jpg?v=1742381869"
        >
          <source
            src="https://www.notsellingliquid.com/cdn/shop/videos/c/vp/d95b8a6ea45e48b79d349081e3bca7fe/d95b8a6ea45e48b79d349081e3bca7fe.HD-1080p-2.5Mbps-44441520.mp4?v=0"
            type="video/mp4"
          />
          <Image
            className="rounded-none"
            src="https://www.notsellingliquid.com/cdn/shop/files/preview_images/d95b8a6ea45e48b79d349081e3bca7fe.thumbnail.0000000000_small.jpg?v=1742381869"
            alt="Video fallback"
            width={1920}
            height={1080}
            unoptimized
          />
        </video>
      </section>
    </div>
  )
}

export default ServicesVideoSection