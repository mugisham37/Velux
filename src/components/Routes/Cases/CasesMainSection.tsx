import Image from 'next/image'
import { normalizeImageUrl } from '../../../utils/imageUtils'

// Type definitions
interface VideoData {
  poster: string;
  src: string;
  width: number;
  height: number;
}

interface VideoMedia {
  type: 'video';
  desktop: VideoData;
  mobile: VideoData;
}

interface ImageMedia {
  type: 'image';
  src: string;
  alt: string;
  width: number;
  height: number;
}

type MediaData = VideoMedia | ImageMedia;

interface NormalizedVideoMedia {
  type: 'video';
  isResponsive: boolean;
  desktop: VideoData;
  mobile: VideoData;
}

interface NormalizedImageMedia {
  type: 'image';
  isResponsive: false;
  data: ImageMedia;
}

type NormalizedMediaData = NormalizedVideoMedia | NormalizedImageMedia;

interface CaseData {
  id: string;
  title: string;
  description: string;
  services: string[];
  href: string;
  isFullWidth: boolean;
  aspectRatio: string;
  padding: string;
  marginBottom: string;
  descriptionClass: string;
  layout: string;
  media: MediaData;
}

// Shared styles

// Shared styles
const FONT_STYLES = {
  aeonik: { fontFamily: 'Aeonik, sans-serif' },
  editorial: { fontFamily: 'PP Editorial Old, serif' }
}

// Arrow SVG component
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
      fill="currentColor"></path>
  </svg>
)

// Normalize media data to eliminate duplication
const normalizeMediaData = (media: MediaData): NormalizedMediaData => {
  if (media.type === 'video') {
    // Check if desktop and mobile are identical
    const desktopData = media.desktop;
    const mobileData = media.mobile;
    
    const isIdentical = desktopData.poster === mobileData.poster && 
                       desktopData.src === mobileData.src &&
                       desktopData.width === mobileData.width &&
                       desktopData.height === mobileData.height;
    
    return {
      type: 'video',
      isResponsive: !isIdentical,
      desktop: desktopData,
      mobile: isIdentical ? desktopData : mobileData
    };
  }
  
  return {
    type: 'image',
    isResponsive: false,
    data: media
  };
};

// Cases data
const CASES_DATA: CaseData[] = [
  {
    id: 'fabienne-chapot',
    title: 'Fabienne Chapot',
    description: 'A new digital home for Fabienne Chapot: Artfully balancing creativity with commercial goals',
    services: ['Build', 'Manage', 'Grow'],
    href: '/pages/fabienne-chapot-shopify-new-site',
    isFullWidth: true,
    aspectRatio: 'aspect-video',
    padding: 'p-6 lg:p-8',
    marginBottom: 'mb-4',
    descriptionClass: 'max-w-md',
    layout: 'justify-between items-end',
    media: {
      type: 'video',
      desktop: {
        poster: "https://www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207",
        src: "https://www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0",
        width: 800,
        height: 450
      },
      mobile: {
        poster: "https://www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207",
        src: "https://www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0",
        width: 800,
        height: 450
      }
    }
  },
  {
    id: 'hang-eleven',
    title: 'Hang Eleven',
    description: 'Launching a refreshed webshop for Hang Eleven to grow internationally',
    services: ['Build', 'Grow'],
    href: '/pages/hang-eleven-webshop-international-growth',
    isFullWidth: false,
    aspectRatio: 'aspect-4/5',
    padding: 'p-4 lg:p-6',
    marginBottom: 'mb-3',
    descriptionClass: '',
    layout: '',
    media: {
      type: 'video',
      desktop: {
        poster: "https://www.notsellingliquid.com/cdn/shop/files/preview_images/c511976946554306bd997337c1ab7992.thumbnail.0000000000_small.jpg?v=1727946458",
        src: "https://www.notsellingliquid.com/cdn/shop/videos/c/vp/c511976946554306bd997337c1ab7992/c511976946554306bd997337c1ab7992.HD-1080p-7.2Mbps-35760312.mp4?v=0",
        width: 600,
        height: 750
      },
      mobile: {
        poster: "https://www.notsellingliquid.com/cdn/shop/files/preview_images/1b7fc4accae94cf79b2598c5b2b37a20.thumbnail.0000000000_small.jpg?v=1727946455",
        src: "https://www.notsellingliquid.com/cdn/shop/videos/c/vp/1b7fc4accae94cf79b2598c5b2b37a20/1b7fc4accae94cf79b2598c5b2b37a20.HD-1080p-7.2Mbps-35760313.mp4?v=0",
        width: 600,
        height: 750
      }
    }
  },
  {
    id: 'la-sisters',
    title: 'LA Sisters',
    description: 'A tailor-made website redesign and migration for the LA Sisters to connect authentically with their loyal following',
    services: ['Build', 'Grow'],
    href: '/pages/redesign-and-migration-la-sisters',
    isFullWidth: false,
    aspectRatio: 'aspect-4/5',
    padding: 'p-4 lg:p-6',
    marginBottom: 'mb-3',
    descriptionClass: '',
    layout: '',
    media: {
      type: 'video',
      desktop: {
        poster: "https://www.notsellingliquid.com/cdn/shop/files/preview_images/d95b8a6ea45e48b79d349081e3bca7fe.thumbnail.0000000000_small.jpg?v=1742381869",
        src: "https://www.notsellingliquid.com/cdn/shop/videos/c/vp/d95b8a6ea45e48b79d349081e3bca7fe/d95b8a6ea45e48b79d349081e3bca7fe.HD-1080p-2.5Mbps-44441520.mp4?v=0",
        width: 600,
        height: 750
      },
      mobile: {
        poster: "https://www.notsellingliquid.com/cdn/shop/files/preview_images/d95b8a6ea45e48b79d349081e3bca7fe.thumbnail.0000000000_small.jpg?v=1742381869",
        src: "https://www.notsellingliquid.com/cdn/shop/videos/c/vp/d95b8a6ea45e48b79d349081e3bca7fe/d95b8a6ea45e48b79d349081e3bca7fe.HD-1080p-2.5Mbps-44441520.mp4?v=0",
        width: 600,
        height: 750
      }
    }
  },
  {
    id: 'bamboo-basics',
    title: 'Bamboo Basics',
    description: 'Migrating Bamboo Basics to Shopify Plus for a more seamless online experience and next step in business growth',
    services: ['Build', 'Manage', 'Grow'],
    href: '/pages/migrating-bamboo-basics-to-shopify',
    isFullWidth: false,
    aspectRatio: 'aspect-4/5',
    padding: 'p-4 lg:p-6',
    marginBottom: 'mb-3',
    descriptionClass: '',
    layout: '',
    media: {
      type: 'image',
      src: "https://www.notsellingliquid.com/cdn/shop/files/MAXTRAVEL-001-zwart_4666043d-c0bf-40ad-ba33-18fdb9137889.jpg?v=1728473963",
      alt: "",
      width: 1200,
      height: 1200
    }
  },
  {
    id: 'wam-denim',
    title: 'WAM Denim',
    description: "Refreshing WAM Denim's online presence with a Shopify Plus migration to power their international ambitions",
    services: ['Build', 'Grow'],
    href: '/pages/refreshing-wam-denim-shopify-plus-migration',
    isFullWidth: false,
    aspectRatio: 'aspect-4/5',
    padding: 'p-4 lg:p-6',
    marginBottom: 'mb-3',
    descriptionClass: '',
    layout: '',
    media: {
      type: 'image',
      src: "https://www.notsellingliquid.com/cdn/shop/files/mainBanner_desktop_home1.webp?v=1743411299",
      alt: "",
      width: 1920,
      height: 1080
    }
  },
  {
    id: 'four-amsterdam',
    title: 'Four Amsterdam',
    description: 'A replatforming to Shopify Plus brings FOUR a stronger online presence and a dedicated Kids website',
    services: ['Build'],
    href: '/pages/case-four-amsterdam-migration-from-lightspeed',
    isFullWidth: false,
    aspectRatio: 'aspect-4/5',
    padding: 'p-4 lg:p-6',
    marginBottom: 'mb-3',
    descriptionClass: '',
    layout: '',
    media: {
      type: 'image',
      src: "https://www.notsellingliquid.com/cdn/shop/files/C5-foto-3.jpg?v=1694596011",
      alt: "Shopify Plus Agency Case - Four Amsterdam",
      width: 1080,
      height: 1350
    }
  }
]

const CasesMainSection = () => {
  // Constants
  const COLORS = {
    background: '#c0bbae',
    text: '#262424'
  }

  const RESPONSIVE_CLASSES = {
    desktopOnly: 'hidden lg:block',
    mobileOnly: 'block lg:hidden'
  }

  const COMMON_CLASSES = {
    mediaBase: 'absolute inset-0 w-full h-full object-cover',
    overlay: 'absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-between'
  }

  // Service tag component
  const ServiceTag = ({ service }: { service: string }) => (
    <span className="text-[10px] px-2 py-1 border border-white rounded text-white uppercase" style={FONT_STYLES.aeonik}>
      {service}
    </span>
  )

  // CTA Link component
  const CTALink = ({ href }: { href: string }) => (
    <div className="hidden lg:flex">
      <a href={href} className="cta-link-hover flex items-center gap-2 text-white transition-opacity duration-300">
        <div className="flex items-center gap-2">
          <span className="arrow-left w-4 h-4"><ArrowIcon /></span>
          <span className="text-[12px] uppercase" style={FONT_STYLES.aeonik}>view full case</span>
          <span className="arrow-right w-4 h-4"><ArrowIcon /></span>
        </div>
      </a>
    </div>
  )

  // Reusable media element component
  const MediaElement = ({ 
    type, 
    src, 
    poster, 
    alt, 
    width, 
    height, 
    responsiveClass 
  }: {
    type: 'video' | 'image';
    src: string;
    poster?: string;
    alt?: string;
    width: number;
    height: number;
    responsiveClass: string;
  }) => {
    const className = `${COMMON_CLASSES.mediaBase} ${responsiveClass}`;
    
    if (type === 'video') {
      return (
        <video 
          playsInline 
          autoPlay
          muted 
          loop 
          preload="metadata"
          className={className}
          poster={normalizeImageUrl(poster!)}>
          <source src={normalizeImageUrl(src)} type="video/mp4" />
          <Image
            src={normalizeImageUrl(poster!)} 
            alt={alt || ""} 
            width={width}
            height={height}
            className="w-full h-full object-cover"
          />
        </video>
      );
    }

    return (
      <Image
        src={normalizeImageUrl(src)}
        alt={alt || ""} 
        className={className} 
        width={width}
        height={height}
        priority={false}
      />
    );
  };

  // Media component for video/image rendering
  const MediaContent = ({ media }: { media: MediaData }) => {
    const normalizedMedia = normalizeMediaData(media);
    
    if (normalizedMedia.type === 'video') {
      const { desktop, mobile, isResponsive } = normalizedMedia;
      
      if (!isResponsive) {
        // Use single video element when desktop and mobile are identical
        return (
          <MediaElement
            type="video"
            src={desktop.src}
            poster={desktop.poster}
            alt=""
            width={desktop.width}
            height={desktop.height}
            responsiveClass=""
          />
        );
      }
      
      // Use separate elements for different desktop/mobile sources
      return (
        <>
          <MediaElement
            type="video"
            src={desktop.src}
            poster={desktop.poster}
            alt=""
            width={desktop.width}
            height={desktop.height}
            responsiveClass={RESPONSIVE_CLASSES.desktopOnly}
          />
          <MediaElement
            type="video"
            src={mobile.src}
            poster={mobile.poster}
            alt=""
            width={mobile.width}
            height={mobile.height}
            responsiveClass={RESPONSIVE_CLASSES.mobileOnly}
          />
        </>
      );
    }

    // For images, always render single element (no responsive variants in current data)
    return (
      <MediaElement
        type="image"
        src={normalizedMedia.data.src}
        alt={normalizedMedia.data.alt}
        width={normalizedMedia.data.width}
        height={normalizedMedia.data.height}
        responsiveClass=""
      />
    );
  };

  // Case card component
  const CaseCard = ({ caseData }: { caseData: CaseData }) => {
    const colSpan = caseData.isFullWidth ? 'col-span-2' : 'col-span-2 lg:col-span-1'
    const contentLayout = caseData.isFullWidth ? 'flex justify-between items-end' : ''
    
    return (
      <div className={`${colSpan} relative group`}>
        <div className={`relative overflow-hidden rounded-lg ${caseData.aspectRatio}`}>
          <MediaContent media={caseData.media} />
          <div className={`${COMMON_CLASSES.overlay} ${caseData.padding}`}>
            {/* Services at the top */}
            <div className="text-white">
              <div className={`flex gap-2 ${caseData.marginBottom}`}>
                {caseData.services.map((service: string) => (
                  <ServiceTag key={service} service={service} />
                ))}
              </div>
            </div>
            
            {/* Content at the bottom */}
            <div className="text-white">
              <div className={`hidden lg:block text-center ${caseData.marginBottom}`}></div>
              <div className={contentLayout}>
                <div>
                  <p className="text-[14px] font-medium mb-2 uppercase" style={FONT_STYLES.aeonik}>{caseData.title}</p>
                  <div className={`text-[12px] leading-[1.4] mb-3 ${caseData.descriptionClass}`} style={FONT_STYLES.aeonik}>
                    <p>{caseData.description}</p>
                  </div>
                </div>
                <CTALink href={caseData.href} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
   <div className="max-w-screen">
                <section className="relative" style={{ backgroundColor: COLORS.background }}>
                    <div className="mx-auto px-4 ">
                        <div className="pt-[180px] pb-10 lg:pt-[200px] lg:pb-10">
                            <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-24 mb-8 border-b pb-6">
                                <div className="lg:flex-1">
                                    <h3 className="text-[38px] lg:text-[48px] leading-[1.2] font-light" style={{ ...FONT_STYLES.editorial, color: COLORS.text }}>Together with our clients, we&apos;re changing the way to do e-commerce.</h3>
                                </div>
                                <div className="lg:flex-1">
                                    <p className="text-[12px] leading-[1.4]" style={{ ...FONT_STYLES.aeonik, color: COLORS.text }}>Enhancing each other, positively influencing one another,
                                        uncovering new possible territories in the digital space and in the minds of
                                        their communities.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {CASES_DATA.map((caseData) => (
                                    <CaseCard key={caseData.id} caseData={caseData} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
  )
}

export default CasesMainSection

