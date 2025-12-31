import React from 'react';
import Image from 'next/image';

// Helper function to convert protocol-relative URLs to absolute HTTPS URLs
const normalizeImageUrl = (url: string): string => {
  if (url.startsWith('//')) {
    return `https:${url}`;
  }
  return url;
};

// Reusable Arrow Icon Component
const ArrowIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path 
      fillRule="evenodd" 
      clipRule="evenodd"
      d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
      fill="currentColor"
    />
  </svg>
);

// Case Study Data
interface CaseStudyData {
  id: string;
  brandName: string;
  description: string;
  tags: string[];
  href: string;
  desktopVideo: {
    poster: string;
    source: string;
    fallbackImage: string;
  };
  mobileMedia: {
    type: 'video' | 'image';
    poster?: string;
    source?: string;
    image?: string;
    alt: string;
  };
}

const caseStudiesData: CaseStudyData[] = [
  {
    id: 'fabienne-chapot',
    brandName: 'Fabienne Chapot',
    description: 'A new digital home for Fabienne Chapot: Artfully balancing creativity with commercial goals',
    tags: ['Build', 'Manage', 'Grow'],
    href: '/pages/fabienne-chapot-shopify-new-site',
    desktopVideo: {
      poster: normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207"),
      source: normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0"),
      fallbackImage: normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207")
    },
    mobileMedia: {
      type: 'video',
      poster: normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207"),
      source: normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0"),
      alt: ""
    }
  },
  {
    id: 'hang-eleven',
    brandName: 'Hang Eleven',
    description: 'Launching a refreshed webshop for Hang Eleven to grow internationally',
    tags: ['Build', 'Grow'],
    href: '/pages/hang-eleven-webshop-international-growth',
    desktopVideo: {
      poster: normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/c511976946554306bd997337c1ab7992.thumbnail.0000000000_small.jpg?v=1727946458"),
      source: normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/videos/c/vp/c511976946554306bd997337c1ab7992/c511976946554306bd997337c1ab7992.HD-1080p-7.2Mbps-35760312.mp4?v=0"),
      fallbackImage: normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/c511976946554306bd997337c1ab7992.thumbnail.0000000000_small.jpg?v=1727946458")
    },
    mobileMedia: {
      type: 'video',
      poster: normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/1b7fc4accae94cf79b2598c5b2b37a20.thumbnail.0000000000_small.jpg?v=1727946455"),
      source: normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/videos/c/vp/1b7fc4accae94cf79b2598c5b2b37a20/1b7fc4accae94cf79b2598c5b2b37a20.HD-1080p-7.2Mbps-35760313.mp4?v=0"),
      alt: ""
    }
  },
  {
    id: 'arte-antwerp',
    brandName: 'Arte Antwerp',
    description: 'The 360 approach that took Arte Antwerp into a whole new online playing field',
    tags: ['build', 'manage', 'grow'],
    href: '/pages/case-study-arte-antwerp-360-approach',
    desktopVideo: {
      poster: normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/d5f3186a25b34e6aabe7cc582edd3c17.thumbnail.0000000000_small.jpg?v=1692610307"),
      source: normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/videos/c/vp/d5f3186a25b34e6aabe7cc582edd3c17/d5f3186a25b34e6aabe7cc582edd3c17.HD-1080p-2.5Mbps-17527902.mp4?v=0"),
      fallbackImage: normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/d5f3186a25b34e6aabe7cc582edd3c17.thumbnail.0000000000_small.jpg?v=1692610307")
    },
    mobileMedia: {
      type: 'image',
      image: normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/9-arte.jpg?v=1692609357"),
      alt: "Shopify Plus Agency Case - Arte Antwerp"
    }
  }
];

// Case Study Card Component
interface CaseStudyCardProps {
  data: CaseStudyData;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ data }) => {
  return (
    <div className=" shrink-0 w-80 md:w-176 lg:w-auto relative group">
      <div className="relative overflow-hidden rounded-lg lg:rounded-xl h-130 md:h-[1100px] lg:h-[430px]">
        {/* Desktop Video */}
        <video 
          playsInline 
          autoPlay 
          muted 
          loop
          preload="metadata" 
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
          {...(data.id === 'arte-antwerp' ? { 'aria-label': 'Shopify Plus Agency Case - Arte Antwerp' } : {})}
          poster={data.desktopVideo.poster}
        >
          <source
            src={data.desktopVideo.source}
            type="video/mp4" 
          />
          <Image 
            alt={data.mobileMedia.alt} 
            width={800} 
            height={600}
            src={data.desktopVideo.fallbackImage} 
            className="w-full h-full object-cover"
          />
        </video>

        {/* Mobile Media */}
        {data.mobileMedia.type === 'video' ? (
          <video 
            playsInline 
            autoPlay 
            muted 
            loop
            preload="metadata" 
            className="absolute inset-0 w-full h-full object-cover block lg:hidden"
            poster={data.mobileMedia.poster}
          >
            <source
              src={data.mobileMedia.source}
              type="video/mp4" 
            />
            <Image 
              alt={data.mobileMedia.alt} 
              width={800} 
              height={600}
              src={data.mobileMedia.poster!} 
              className="w-full h-full object-cover"
            />
          </video>
        ) : (
          <Image 
            src={data.mobileMedia.image!}
            alt={data.mobileMedia.alt} 
            className="absolute inset-0 w-full h-full object-cover block lg:hidden" 
            width={1689} 
            height={2111} 
          />
        )}
        
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent">
          {/* Tags at top */}
          <div className="absolute top-0 left-0 right-0 p-6 lg:p-8">
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag, index) => (
                <span key={index} className="text-xs font-normal border border-white px-2 py-1 rounded uppercase text-white">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Text at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
            <div className="hidden lg:block text-center mb-4">
              {/* Logo placeholder */}
            </div>
            
            <div className="flex justify-between items-end">
              <div className="flex-1 max-w-xs">
                <p className="text-sm font-medium mb-2 font-['Aeonik'] uppercase">{data.brandName}</p>
                <div className="text-xs opacity-90 font-['Aeonik'] leading-relaxed uppercase">
                  <p>{data.description}</p>
                </div>
              </div>
              
              <a 
                href={data.href}
                className="inline-flex items-center gap-2 text-white hover:opacity-80 transition-opacity duration-200 group"
              >
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowIcon />
                </span>
                <span className="text-xs font-normal uppercase">
                  {data.id === 'fabienne-chapot' ? 'View Full Case' : 
                   data.id === 'hang-eleven' ? 'View full case' : 'view full case'}
                </span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CasesSection: React.FC = () => {
  return (
    <div>
      <section className="relative bg-[#e5e2de] text-[#262424]">
        <div className="max-w-[1480px] mx-auto px-2 sm:px-4 lg:px-0">
          <div className="border-b border-[#262424] py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div className="cases-hl">
                <p className="text-xs font-normal mb-4 lg:mb-6 font-['Aeonik'] leading-relaxed uppercase">
                  We&apos;re moved by the diverse stories of fashion
                </p>
                <h3 className="text-3xl lg:text-5xl font-light font-['PP_Editorial_Old'] leading-tight lg:leading-tight">
                  We help ambitious brands, ones with heart, soul and character.
                </h3>
              </div>
              <div className="cases-hr hidden lg:flex justify-end items-end">
                <a 
                  href="/pages/case-studies" 
                  className="inline-flex items-center gap-2 text-[#262424] hover:opacity-80 transition-opacity duration-200 group"
                >
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                    <ArrowIcon />
                  </span>
                  <span className="text-xs font-normal font-['Aeonik'] uppercase">all case studies</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                    <ArrowIcon />
                  </span>
                </a>
              </div>
            </div>
            <div className="border-b border-[#262424] mb-16 lg:mb-20 pt-4"></div>

            <div className="overflow-x-auto">
              <div className="flex gap-4 lg:gap-4 min-w-max lg:min-w-0 lg:grid lg:grid-cols-3">
                {caseStudiesData.map((caseData) => (
                  <CaseStudyCard key={caseData.id} data={caseData} />
                ))}
              </div>
            </div>
            
            {/* Mobile button */}
            <div className="cases-mb-btn flex justify-start lg:hidden mt-8">
              <a 
                href="/pages/case-studies" 
                className="inline-flex items-center gap-3 bg-[#c0bbae] text-[#262424] px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-200 group"
              >
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowIcon />
                </span>
                <span className="text-xs font-normal font-['Aeonik'] uppercase">all case studies</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasesSection;

