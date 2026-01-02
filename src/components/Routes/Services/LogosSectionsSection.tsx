import React, { useEffect } from 'react'

const LogosSectionsSection = () => {
  useEffect(() => {
    // Load external CSS
    const link = document.createElement('link');
    link.href = "//www.notsellingliquid.com/cdn/shop/t/39/assets/why-shopify.css?v=183343403399068473071758090047";
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "all";
    document.head.appendChild(link);

    // Initialize logo functionality
    let wsAllData: Array<{src: string; height: string}> = [];
    if (window.innerWidth < 992) {
        wsAllData = [
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/shopify-plus-logo--black.png?v=1687155627", "height": "20" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/62e1786b32ece27b4ee77340.png?v=1687155635", "height": "20" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/MollieLogo23-Black.png?v=1687155675", "height": "20" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/2560px-Yotpo-logo.png?v=1687155729", "height": "20" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/gorgias_logo_dark.png?v=1687155807", "height": "20" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/SB-logo.svg?v=1687155885", "height": "25" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/Klarna-logotype-black.png?v=1687156015", "height": "18" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/JW.png?v=1687156274", "height": "20" }
        ];
    } else {
        wsAllData = [
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/shopify-plus-logo--black.png?v=1687155627", "height": "35" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/62e1786b32ece27b4ee77340.png?v=1687155635", "height": "35" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/MollieLogo23-Black.png?v=1687155675", "height": "30" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/2560px-Yotpo-logo.png?v=1687155729", "height": "30" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/gorgias_logo_dark.png?v=1687155807", "height": "30" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/SB-logo.svg?v=1687155885", "height": "50" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/Klarna-logotype-black.png?v=1687156015", "height": "26" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/JW.png?v=1687156274", "height": "39" }
        ];
    }
    
    const transitionDuration = 0.5;
    
    function initLogo() {
        for (let i = 0; i < wsAllData.length; i++) {
            const logoElement = document.querySelector(".section-id-template--26430798102871__ab97d492-08df-484e-aae8-e27cf183a590 #ws_logo" + i) as HTMLImageElement;
            if (logoElement != null) {
                logoElement.src = wsAllData[i].src;
                logoElement.style.opacity = '1';
                logoElement.style.transition = `opacity ${transitionDuration}s ease-in-out`;
            }
        }
        swapLogos();
    }
    
    function swapLogos() {
        if (document.querySelectorAll('.ws-logoinr').length > 12) {
            const index = Math.floor(Math.random() * wsAllData.length);
            const logoElement = document.querySelector(".section-id-template--26430798102871__ab97d492-08df-484e-aae8-e27cf183a590 #ws_logo" + index) as HTMLImageElement;
            if (logoElement != null) {
                logoElement.style.opacity = '0';
                setTimeout(function () {
                    const visibleLogos: string[] = [];
                    for (let i = 0; i < wsAllData.length; i++) {
                        const logo = document.querySelector(".section-id-template--26430798102871__ab97d492-08df-484e-aae8-e27cf183a590 #ws_logo" + i) as HTMLImageElement;
                        if (logo) {
                            visibleLogos.push(logo.src);
                        }
                    }
                    const currentLogo = logoElement.src;
                    const availableAll = wsAllData.filter(logo => !visibleLogos.includes(logo.src) && currentLogo != logo.src);
                    if (availableAll.length == 0) return;
                    const randomAll = availableAll[Math.floor(Math.random() * availableAll.length)];
                    logoElement.src = randomAll.src;
                    logoElement.style.maxHeight = randomAll.height + 'px';
                    logoElement.style.opacity = '1';
                }, transitionDuration * 1000);
            }
            setTimeout(swapLogos, 1500);
        }
    }
    
    if (document.querySelectorAll('.ws-logoinr').length > 12) {
        initLogo();
    }

    return () => {
      // Cleanup
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div id="shopify-section-template--26430798102871__ab97d492-08df-484e-aae8-e27cf183a590"
                className="shopify-section">
                <section
                    className="section-why-shopify section-id-template--26430798102871__ab97d492-08df-484e-aae8-e27cf183a590 relative-sec">
                    <style dangerouslySetInnerHTML={{__html: `
                        .section-id-template--26430798102871__ab97d492-08df-484e-aae8-e27cf183a590 {
                            background: #e5e2de;
                        }

                        .section-id-template--26430798102871__ab97d492-08df-484e-aae8-e27cf183a590 .why-shopify {
                            padding-top: 60px;
                            padding-bottom: 60px;
                        }

                        @media(min-width:992px) {
                            .section-id-template--26430798102871__ab97d492-08df-484e-aae8-e27cf183a590 .why-shopify {
                                padding-top: 120px;
                                padding-bottom: 120px;
                            }
                        }
                    `}} />
                    <div className="container">
                        <div className="why-shopify grid">
                            <div className="ws-left grid-4-fcol">
                                <h3>Connected with the best in the industry, and a certified Shopify Premier partner.
                                </h3>
                                <div className="s-caption">
                                    <p>Together with our unique set of partners, we&apos;ve changed the way we do e-commerce.
                                        Collaboration is key to connecting a tech stack that works harmoniously for your
                                        brand. These platforms help boost growth and satisfaction across channels.</p>
                                </div><a href="/pages/shopify-plus-agency-amsterdam" className="button button-stone">
                                    <span className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 16 16" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                                fill="initial"></path>
                                        </svg></span>
                                    <span className="label">Shopify plus</span>
                                    <span className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 16 16" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                                fill="initial"></path>
                                        </svg></span>
                                </a>
                            </div>
                            <div className="ws-right grid-8-lcol">
                                <div className="ws-rightinr">
                                    <div className="ws-logo logoblk">
                                        <div
                                            className="ws-logoinr logoblkinr block-id-27836cd2-a4bf-4bad-a991-b46fd2ece267">
                                            <img loading="lazy"
                                                src="//www.notsellingliquid.com/cdn/shop/files/shopify-plus-logo--black_900x.png?v=1687155627"
                                                id="ws_logo0" alt="Shopify Plus partner" width="" height="" />
                                            <style dangerouslySetInnerHTML={{__html: `
                                                .ws-logoinr.block-id-27836cd2-a4bf-4bad-a991-b46fd2ece267 img {
                                                    max-height: 20px;
                                                }

                                                @media (min-width:992px) {
                                                    .ws-logoinr.block-id-27836cd2-a4bf-4bad-a991-b46fd2ece267 img {
                                                        max-height: 35px;
                                                    }
                                                }
                                            `}} />
                                        </div>
                                        <div
                                            className="ws-logoinr logoblkinr block-id-5715ca28-96e0-48b1-bdf6-66948d579af7">
                                            <img loading="lazy"
                                                src="//www.notsellingliquid.com/cdn/shop/files/62e1786b32ece27b4ee77340_581x.png?v=1687155635"
                                                id="ws_logo1" alt="Klaviyo partner" width="" height="" />
                                            <style dangerouslySetInnerHTML={{__html: `
                                                .ws-logoinr.block-id-5715ca28-96e0-48b1-bdf6-66948d579af7 img {
                                                    max-height: 20px;
                                                }

                                                @media (min-width:992px) {
                                                    .ws-logoinr.block-id-5715ca28-96e0-48b1-bdf6-66948d579af7 img {
                                                        max-height: 35px;
                                                    }
                                                }
                                            `}} />
                                        </div>
                                        <div
                                            className="ws-logoinr logoblkinr block-id-c2e044f0-61c3-46b2-af9a-7e4201601cee">
                                            <img loading="lazy"
                                                src="//www.notsellingliquid.com/cdn/shop/files/MollieLogo23-Black_1600x.png?v=1687155675"
                                                id="ws_logo2" alt="Mollie partner" width="" height="" />
                                            <style dangerouslySetInnerHTML={{__html: `
                                                .ws-logoinr.block-id-c2e044f0-61c3-46b2-af9a-7e4201601cee img {
                                                    max-height: 20px;
                                                }

                                                @media (min-width:992px) {
                                                    .ws-logoinr.block-id-c2e044f0-61c3-46b2-af9a-7e4201601cee img {
                                                        max-height: 30px;
                                                    }
                                                }
                                            `}} />
                                        </div>
                                        <div
                                            className="ws-logoinr logoblkinr block-id-4b31eb39-e8b0-4714-af33-3c2fefdcb25f">
                                            <img loading="lazy"
                                                src="//www.notsellingliquid.com/cdn/shop/files/2560px-Yotpo-logo_2560x.png?v=1687155729"
                                                id="ws_logo3" alt="Yotpo partner" width="" height="" />
                                            <style dangerouslySetInnerHTML={{__html: `
                                                .ws-logoinr.block-id-4b31eb39-e8b0-4714-af33-3c2fefdcb25f img {
                                                    max-height: 20px;
                                                }

                                                @media (min-width:992px) {
                                                    .ws-logoinr.block-id-4b31eb39-e8b0-4714-af33-3c2fefdcb25f img {
                                                        max-height: 30px;
                                                    }
                                                }
                                            `}} />
                                        </div>
                                        <div
                                            className="ws-logoinr logoblkinr block-id-6ca5a511-ce71-43f7-8c16-b6a20ca61628">
                                            <img loading="lazy"
                                                src="//www.notsellingliquid.com/cdn/shop/files/gorgias_logo_dark_1280x.png?v=1687155807"
                                                id="ws_logo4" alt="Gorgias partner" width="" height="" />
                                            <style dangerouslySetInnerHTML={{__html: `
                                                .ws-logoinr.block-id-6ca5a511-ce71-43f7-8c16-b6a20ca61628 img {
                                                    max-height: 20px;
                                                }

                                                @media (min-width:992px) {
                                                    .ws-logoinr.block-id-6ca5a511-ce71-43f7-8c16-b6a20ca61628 img {
                                                        max-height: 30px;
                                                    }
                                                }
                                            `}} />
                                        </div>
                                        <div
                                            className="ws-logoinr logoblkinr block-id-fb7039dc-2a62-4770-b259-f8992687514b">
                                            <img loading="lazy"
                                                src="//www.notsellingliquid.com/cdn/shop/files/SB-logo_726x.svg?v=1687155885"
                                                id="ws_logo5" alt="Stone & Bridges partner" width="" height="" />
                                            <style dangerouslySetInnerHTML={{__html: `
                                                .ws-logoinr.block-id-fb7039dc-2a62-4770-b259-f8992687514b img {
                                                    max-height: 25px;
                                                }

                                                @media (min-width:992px) {
                                                    .ws-logoinr.block-id-fb7039dc-2a62-4770-b259-f8992687514b img {
                                                        max-height: 50px;
                                                    }
                                                }
                                            `}} />
                                        </div>
                                        <div
                                            className="ws-logoinr logoblkinr block-id-8350f1c0-fba5-4faa-a1b5-7ee3a76b771f">
                                            <img loading="lazy"
                                                src="//www.notsellingliquid.com/cdn/shop/files/Klarna-logotype-black_998x.png?v=1687156015"
                                                id="ws_logo6" alt="Klarna partner" width="" height="" />
                                            <style dangerouslySetInnerHTML={{__html: `
                                                .ws-logoinr.block-id-8350f1c0-fba5-4faa-a1b5-7ee3a76b771f img {
                                                    max-height: 18px;
                                                }

                                                @media (min-width:992px) {
                                                    .ws-logoinr.block-id-8350f1c0-fba5-4faa-a1b5-7ee3a76b771f img {
                                                        max-height: 26px;
                                                    }
                                                }
                                            `}} />
                                        </div>
                                        <div
                                            className="ws-logoinr logoblkinr block-id-eb3b8fa2-7852-45fd-be74-9d399f27d249">
                                            <img loading="lazy"
                                                src="//www.notsellingliquid.com/cdn/shop/files/JW_504x.png?v=1687156274"
                                                id="ws_logo7" alt="JW Player partner" width="" height="" />
                                            <style dangerouslySetInnerHTML={{__html: `
                                                .ws-logoinr.block-id-eb3b8fa2-7852-45fd-be74-9d399f27d249 img {
                                                    max-height: 20px;
                                                }

                                                @media (min-width:992px) {
                                                    .ws-logoinr.block-id-eb3b8fa2-7852-45fd-be74-9d399f27d249 img {
                                                        max-height: 39px;
                                                    }
                                                }
                                            `}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
  )
}

export default LogosSectionsSection