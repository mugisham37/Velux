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
    fontSize: '12px',
    lineHeight: '1.6',
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
      id="shopify-section-template--26430797775191__f32a1c2e-c486-4763-9d59-ecf248ea3345"
      className="relative"
      style={{ marginTop: '-61.1px' }}
    >
      <section className="relative" style={{ background: '#c0bbae' }}>
        <div className="w-full" style={{ padding: '0 15px' }}>
          <div 
            className="responsive-padding-section"
            style={{ 
              paddingTop: '144px', 
              paddingBottom: '0px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            <div 
              className="grid grid-cols-1 lg:grid-cols-10 gap-6"
              style={{ marginBottom: '0' }}
            >
              <div className="lg:col-span-6">
                <h3 style={headingStyles}>
                  Together with our clients, we&apos;re changing the way to do e-commerce.
                </h3>
              </div>
              <div className="lg:col-span-4">
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

