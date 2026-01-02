"use client"

import React, { useEffect } from 'react'

const TextBannerSection = () => {
  // Extract repetitive style values
  const commonStyles = {
    color: '#262424',
    margin: '0'
  };

  const headingStyles = {
    fontFamily: 'PP Editorial Old, serif',
    fontSize: 'clamp(30px, 4vw, 48px)',
    fontWeight: '300',
    lineHeight: '1.2',
    ...commonStyles
  };

  const paragraphStyles = {
    fontFamily: 'Aeonik, sans-serif',
    fontSize: '14px',
    lineHeight: '1.3',
    fontWeight: 'normal',
    ...commonStyles
  };

  useEffect(() => {
    // Add responsive styles
    const style = document.createElement('style');
    style.textContent = `
      @media (min-width: 992px) {
        .responsive-padding-section {
          padding-top: 200px !important;
          padding-bottom: 0px !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      className="relative max-w-screen bg-warm-beige"
    >
      <section className="relative">
        <div className="w-full px-4" style={{backgroundColor: '#c0bbae' }}>
          <div 
          className='lg:pt-10'
            style={{ 
              paddingTop: '84px', 
              paddingBottom: '17px',
              borderBottom: '1px solid #000',
            }}
          >
            <div 
              className="flex flex-col lg:flex-row lg:justify-between gap-40"
              style={{ marginBottom: '0' }}
            >
              <div>
                <h3 className='text-[30px]' style={headingStyles}>
                  Together with our clients, we&apos;re changing the way to do e-commerce.
                </h3>
              </div>
              <div>
                <p style={paragraphStyles}>
                  Enhancing each other, positively influencing one another,
                  uncovering new possible territories in the digital space and in the minds of
                  their communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TextBannerSection

