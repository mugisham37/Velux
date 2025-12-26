import React, { useEffect, useRef } from 'react'

// Client data structure - centralized and maintainable
interface Client {
  name: string;
  image: string;
  href?: string;
  isExternal?: boolean;
}

const clientsData: Client[] = [
  {
    name: "AGR",
    image: "//www.notsellingliquid.com/cdn/shop/files/Clients-AGR2-portrait_7d32f7b4-a775-40db-8146-5ca4acad8c0f.jpg?v=1691759154"
  },
  {
    name: "Ange Projects",
    image: "//www.notsellingliquid.com/cdn/shop/files/Sep_s_dinner_attire-_our_Summer_Blazer_and_Pleated_Denim_Trousers..jpg?v=1747413937"
  },
  {
    name: "Arte antwerp",
    image: "//www.notsellingliquid.com/cdn/shop/files/Clients-Arte-square_2c8f3bfc-e15c-4961-805b-d5b0e33493cf.jpg?v=1691759155",
    href: "/pages/case-study-arte-antwerp-360-approach"
  },
  {
    name: "Ateljé",
    image: "//www.notsellingliquid.com/cdn/shop/files/Atelje_63-1.jpg?v=1757587705",
    href: "https://shopatelje.com",
    isExternal: true
  },
  {
    name: "Binibamba",
    image: "//www.notsellingliquid.com/cdn/shop/files/binibamba.webp?v=1747413245"
  },
  {
    name: "Bamboo Basics",
    image: "//www.notsellingliquid.com/cdn/shop/files/MAXTRAVEL-001-zwart_4666043d-c0bf-40ad-ba33-18fdb9137889.jpg?v=1728473963",
    href: "/pages/migrating-bamboo-basics-to-shopify"
  },
  {
    name: "blush jewels",
    image: "//www.notsellingliquid.com/cdn/shop/files/Clients-Blush-landscape_b888249c-1c0b-4ac6-930b-e59188d35789.jpg?v=1691759154"
  },
  {
    name: "Bram's Fruit",
    image: "//www.notsellingliquid.com/cdn/shop/files/Bram_s_Fruit_HS25_30-10-241072_copy.jpg?v=1747413260"
  },
  {
    name: "curly girl movement",
    image: "//www.notsellingliquid.com/cdn/shop/files/Clients-CurlyGirlMovement-portrait.jpg?v=1691758226"
  },
  {
    name: "daniëlle cathari",
    image: "//www.notsellingliquid.com/cdn/shop/files/Rectangle_214_1.png?v=1691582175"
  },
  {
    name: "Eave Cosmetics",
    image: "//www.notsellingliquid.com/cdn/shop/files/eave.webp?v=1747413280"
  },
  {
    name: "fabienne chapot",
    image: "//www.notsellingliquid.com/cdn/shop/files/Clients-FabienneChapot-square_6b0050c9-9b94-4116-9b2e-bbb38ce58d0d.jpg?v=1691759155"
  },
  {
    name: "Flâneur",
    image: "//www.notsellingliquid.com/cdn/shop/files/flaneur-look-02-medium.jpg?v=1765366297",
    href: "https://flaneur.eu/",
    isExternal: true
  },
  {
    name: "Fluresk",
    image: "//www.notsellingliquid.com/cdn/shop/files/FLURESK_-_Hoogzomer_2025_-_FULL_58_d4c90095-1f44-437f-8ab5-b95682fb72de.jpg?v=1747413910"
  },
  {
    name: "Four Amsterdam",
    image: "//www.notsellingliquid.com/cdn/shop/files/Clients-Four-long.jpg?v=1691758479",
    href: "/pages/case-four-amsterdam-migration-from-lightspeed"
  },
  {
    name: "G-maxx",
    image: "//www.notsellingliquid.com/cdn/shop/files/websize_G-Maxx_Froukje_byMarynHaertel_5840.jpg?v=1699372313"
  },
  {
    name: "Goldbergh",
    image: "//www.notsellingliquid.com/cdn/shop/files/desktop_02_0027b003-b4b7-489a-a88d-99e9d19c6a18.jpg?v=1757588506",
    href: "https://goldbergh.com",
    isExternal: true
  },
  {
    name: "Hang Eleven",
    image: "//www.notsellingliquid.com/cdn/shop/files/feed_45_ies_50.png?v=1747413895",
    href: "/pages/hang-eleven-webshop-international-growth"
  },
  {
    name: "in gold we trust",
    image: "//www.notsellingliquid.com/cdn/shop/files/Clients-IGWT-portrait_8d31a79e-4127-44f5-a27e-7be8b98ac333.jpg?v=1691759155"
  },
  {
    name: "La Sisters",
    image: "//www.notsellingliquid.com/cdn/shop/files/94d9ffe4-212d-4966-8f91-7437586786f9.webp?v=1742381790",
    href: "/pages/redesign-and-migration-la-sisters"
  },
  {
    name: "Las Olas",
    image: "//www.notsellingliquid.com/cdn/shop/files/231109_Las_Olas_website13605_4_c6c098f1-cfcf-4d9c-8ac0-93c07712f98f.jpg?v=1747413878",
    href: "/pages/rebranded-website-las-olas-fashion-approach"
  },
  {
    name: "maha",
    image: "//www.notsellingliquid.com/cdn/shop/files/Clients-Maha-square_ed7468a6-c593-40bb-8f05-b5fe8a10d862.jpg?v=1691759155",
    href: "/pages/how-maha-uses-klaviyo"
  },
  {
    name: "mastoor",
    image: "//www.notsellingliquid.com/cdn/shop/files/Clients-Mastoor-4-5.jpg?v=1691759423"
  },
  {
    name: "Merrachi",
    image: "//www.notsellingliquid.com/cdn/shop/files/4_452e7100-88d4-4646-bfcb-96902f00e088.jpg?v=1699371864"
  },
  {
    name: "Muchachomalo",
    image: "//www.notsellingliquid.com/cdn/shop/files/ContentBlockSlider1-men_a41bf5f1-8a2e-4e39-8c48-7f415d15716c.jpg?v=1747413318"
  },
  {
    name: "ølaf",
    image: "//www.notsellingliquid.com/cdn/shop/files/Clients-Olaf-portrait.jpg?v=1691759496"
  },
  {
    name: "oqium",
    image: "//www.notsellingliquid.com/cdn/shop/files/Fce-gramicci_0007.jpg?v=1691759552"
  },
  {
    name: "PANTOMIME Parfum™",
    image: "//www.notsellingliquid.com/cdn/shop/files/PANTOMIME_ACT-5_AI.jpg?v=1765366609",
    href: "https://www.pantomime-parfum.com/",
    isExternal: true
  },
  {
    name: "Pure Path",
    image: "//www.notsellingliquid.com/cdn/shop/files/Clients-PurePath-landscape.jpg?v=1691759683",
    href: "/pages/case-study-pure-path-rebranding-website"
  },
  {
    name: "rainkiss",
    image: "//www.notsellingliquid.com/cdn/shop/files/Clients-Rainkiss_713bd76a-e471-433f-a98a-505dc7eb405a.jpg?v=1691761254"
  },
  {
    name: "Referenc",
    image: "//www.notsellingliquid.com/cdn/shop/files/REFERENC_Header_Home_DT_1057x813_6b3fa223-d424-42b6-9d27-0ecbfcd815a5.jpg?v=1747413843"
  },
  {
    name: "rino & pelle",
    image: "//www.notsellingliquid.com/cdn/shop/files/Clients-Rino-landscape.jpg?v=1691759860",
    href: "/pages/rino-pelle-shopify"
  },
  {
    name: "smaak amsterdam",
    image: "//www.notsellingliquid.com/cdn/shop/files/Clients-Smaak-portrait.jpg?v=1691760082",
    href: "/pages/case-study-smaak-new-markets-expansion"
  },
  {
    name: "studio noos",
    image: "//www.notsellingliquid.com/cdn/shop/files/Clients-StudioNoos-portrait.jpg?v=1691760170"
  },
  {
    name: "Viktor & Rolf",
    image: "//www.notsellingliquid.com/cdn/shop/files/bg.png?v=1758092864"
  },
  {
    name: "Wahts",
    image: "//www.notsellingliquid.com/cdn/shop/files/RIGGS_Mid_Grey_3b28d960-daa6-491c-9721-53a6b20fc2d8.png?v=1699367724"
  },
  {
    name: "ZENOLOGY®",
    image: "//www.notsellingliquid.com/cdn/shop/files/ZENOLOGY.jpg?v=1757588753",
    href: "https://zenology.com/",
    isExternal: true
  },
  {
    name: "Zusss",
    image: "//www.notsellingliquid.com/cdn/shop/files/home_2.jpg?v=1747414013"
  }
];

// Reusable SVG Arrow Icon Component
const ArrowIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 shrink-0">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
      fill="#262424"></path>
  </svg>
);

// Reusable Client Item Component
const ClientItem = ({ client }: { client: Client }) => {
  const baseClasses = "client-link flex items-center text-[#262424] font-['Aeonik'] text-[12px] leading-[1.2] cursor-pointer hover:opacity-70 transition-opacity duration-200";
  
  if (client.href) {
    return (
      <a 
        className={`${baseClasses} no-underline`}
        target={client.isExternal ? "_blank" : undefined}
        href={client.href}
        data-image={client.image}
      >
        <ArrowIcon />
        <span>{client.name}</span>
      </a>
    );
  }
  
  return (
    <p 
      className={baseClasses}
      data-image={client.image}
    >
      <ArrowIcon />
      <span>{client.name}</span>
    </p>
  );
};

const ClientsList = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Convert jQuery functionality to vanilla JavaScript
    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      const linkElement = target.closest('.client-link') as HTMLElement;
      if (linkElement && imageRef.current) {
        const imageUrl = linkElement.getAttribute('data-image');
        if (imageUrl) {
          imageRef.current.src = imageUrl;
        }
      }
    };

    const handleMouseOut = (e: Event) => {
      const target = e.target as HTMLElement;
      const linkElement = target.closest('.client-link') as HTMLElement;
      if (linkElement && imageRef.current) {
        imageRef.current.src = '';
      }
    };

    // Add event listeners
    const clientSection = document.querySelector('.clients-list');
    if (clientSection) {
      clientSection.addEventListener('mouseover', handleMouseOver);
      clientSection.addEventListener('mouseout', handleMouseOut);
    }

    // Cleanup event listeners
    return () => {
      if (clientSection) {
        clientSection.removeEventListener('mouseover', handleMouseOver);
        clientSection.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, []);

  return (
    <div className="relative bg-[#c0bbae]">
      <div className="pt-5 pb-[100px] lg:pt-5 lg:pb-[100px] md:pt-0 md:pb-[60px]">
        <div className="container mx-auto px-4">
          <div className="main_client flex flex-col lg:flex-row">
            {/* Left side - Image display */}
            <div className="left_client w-full lg:w-1/2 flex justify-center lg:justify-start">
              <figure className="w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  ref={imageRef} 
                  src="" 
                  alt="Client showcase" 
                  className="w-full h-auto object-cover"
                />
              </figure>
            </div>
            
            {/* Right side - Client list */}
            <div className="right_client w-full lg:w-1/2">
              <ul className="clients-list">
                {clientsData.map((client, index) => (
                  <li key={index} className="mb-0">
                    <ClientItem client={client} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientsList