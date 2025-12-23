'use client'
import { useEffect, useState } from 'react'

export default function LoadingAnimation() {
  const [currentValue, setCurrentValue] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const targetValue = 100
    let currentVal = 0
    
    const updatePercentage = () => {
      if (currentVal < targetValue) {
        currentVal += 1
        setCurrentValue(currentVal)
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setIsVisible(false)
        }, 2000)
      }
    }

    const interval = setInterval(updatePercentage, 20)
    
    return () => clearInterval(interval)
  }, []) // Remove currentValue dependency

  if (!isVisible) return null

  return (
    <div className="snippet-loading-animation">
      <div className="loading-line">
        <span 
          style={{ 
            transform: `scaleX(${currentValue / 100})`, 
            transformOrigin: currentValue < 100 ? "left" : "right center" 
          }}
        ></span>
      </div>
      <div className="loading-logo" style={{ display: currentValue >= 100 ? 'block' : 'none' }}>
        <svg width="1400" height="176" viewBox="0 0 1400 176" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_935_25)">
            <path
              d="M0 0H25.3254L87.86 100.653H88.2547V0H111.087V136.65H85.7616L23.3933 36.1623H22.8116V136.629H0V0Z"
              fill="white"></path>
            <path
              d="M179.002 139.323C171.066 139.323 164.002 138.018 157.811 135.407C151.599 132.795 146.364 129.19 142.063 124.589C137.784 120.009 134.522 114.517 132.278 108.135C130.034 101.752 128.912 94.7473 128.912 87.1004C128.912 79.4535 130.034 72.6147 132.278 66.2527C134.522 59.8699 137.784 54.3782 142.063 49.7983C146.343 45.1977 151.599 41.5918 157.811 38.9807C164.002 36.3695 171.087 35.064 179.002 35.064C186.918 35.064 193.982 36.3695 200.194 38.9807C206.405 41.5918 211.641 45.1977 215.941 49.7983C220.221 54.3782 223.483 59.8699 225.727 66.2527C227.97 72.6355 229.092 79.5778 229.092 87.1004C229.092 94.623 227.97 101.773 225.727 108.135C223.483 114.517 220.221 120.009 215.941 124.589C211.662 129.19 206.405 132.795 200.194 135.407C193.982 138.018 186.918 139.323 179.002 139.323ZM179.002 122.102C183.864 122.102 188.081 121.087 191.676 119.035C195.249 116.984 198.199 114.31 200.484 110.994C202.79 107.679 204.473 103.949 205.574 99.7831C206.655 95.6384 207.216 91.3901 207.216 87.0589C207.216 82.7277 206.676 78.6452 205.574 74.4177C204.494 70.2108 202.811 66.4806 200.484 63.2063C198.178 59.9528 195.228 57.3209 191.676 55.2693C188.081 53.2177 183.864 52.2022 179.002 52.2022C174.141 52.2022 169.923 53.2177 166.329 55.2693C162.735 57.3209 159.806 59.9528 157.52 63.2063C155.214 66.4806 153.511 70.1901 152.43 74.4177C151.329 78.6245 150.789 82.8314 150.789 87.0589C150.789 91.2865 151.329 95.6384 152.43 99.7831C153.511 103.928 155.194 107.679 157.52 110.994C159.827 114.31 162.756 116.984 166.329 119.035C169.923 121.087 174.141 122.102 179.002 122.102Z"
              fill="white"></path>
          </g>
          <defs>
            <clipPath id="clip0_935_25">
              <rect width="1400.17" height="175.879" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="loading-overlay">&nbsp;</div>
      <div className="loading-images" style={{ display: 'none' }}>
        <img 
          className=""
          src="//www.notsellingliquid.com/cdn/shop/files/flaneur-look-02-full2_0_75x_b0ae6315-d84c-4783-8401-df3d2f0739a7.jpg?v=1765366376"
          width="3000" 
          height="1510" 
          alt="" 
          loading="lazy" 
        />
        <img
          src="//www.notsellingliquid.com/cdn/shop/files/Mask_group2.webp?v=1744187290" 
          width="1401" 
          height="800"
          alt="" 
          loading="lazy" 
          className="" 
        />
      </div>
      <div className="loadin-percentage">{currentValue}%</div>
    </div>
  )
}