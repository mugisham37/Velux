'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Script from 'next/script'

export default function ClientsList() {
  const [activeImage, setActiveImage] = useState<string>('')

  useEffect(() => {
    // jQuery functionality converted to React
    const handleMouseOver = (imageUrl: string) => {
      setActiveImage(imageUrl)
    }

    const handleMouseOut = () => {
      setActiveImage('')
    }

    // Expose functions to be used by the inline event handlers
    (window as any).handleMouseOver = handleMouseOver
    (window as any).handleMouseOut = handleMouseOut

    return () => {
      delete (window as any).handleMouseOver
      delete (window as any).handleMouseOut
    }
  }, [])

  return (
    <>
      <div id="shopify-section-template--26430797775191__186a8749-1a1c-44d5-8789-d7aeab5e2abe"
           className="shopify-section">
        <link href="//www.notsellingliquid.com/cdn/shop/t/39/assets/client.css?v=15494807658641411561758090047"
              rel="stylesheet" type="text/css" media="all" />

        <style data-shopify="">
          {`
            .padding_template--26430797775191__186a8749-1a1c-44d5-8789-d7aeab5e2abe {
              padding-top: 20px;
              padding-bottom: 100px;
            }

            .bg_template--26430797775191__186a8749-1a1c-44d5-8789-d7aeab5e2abe {
              background-color: #c0bbae
            }

            @media(max-width:991px) {
              .padding_template--26430797775191__186a8749-1a1c-44d5-8789-d7aeab5e2abe {
                padding-top: 0px;
                padding-bottom: 60px;
              }
            }
          `}
        </style>

        <div className="padding_template--26430797775191__186a8749-1a1c-44d5-8789-d7aeab5e2abe bg_template--26430797775191__186a8749-1a1c-44d5-8789-d7aeab5e2abe relative-sec">
          <div className="container">
            <div className="main_client">
              <div className="left_client">
                <figure>
                  <img src={activeImage} alt="" />
                </figure>
              </div>
              <div className="right_client">
                <ul>
                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Clients-AGR2-portrait_7d32f7b4-a775-40db-8146-5ca4acad8c0f.jpg?v=1691759154")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> AGR</p>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Sep_s_dinner_attire-_our_Summer_Blazer_and_Pleated_Denim_Trousers..jpg?v=1747413937")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Ange Projects</p>
                  </li>

                  <li>
                    <Link className="link" target="_blank"
                          href="/pages/case-study-arte-antwerp-360-approach"
                          onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Clients-Arte-square_2c8f3bfc-e15c-4961-805b-d5b0e33493cf.jpg?v=1691759155")}
                          onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Arte antwerp</Link>
                  </li>

                  <li>
                    <a className="link" target="_blank" href="https://shopatelje.com"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Atelje_63-1.jpg?v=1757587705")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Ateljé</a>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/binibamba.webp?v=1747413245")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Binibamba</p>
                  </li>

                  <li>
                    <Link className="link" target="_blank" href="/pages/migrating-bamboo-basics-to-shopify"
                          onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/MAXTRAVEL-001-zwart_4666043d-c0bf-40ad-ba33-18fdb9137889.jpg?v=1728473963")}
                          onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Bamboo Basics</Link>
                  </li>
                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Clients-Blush-landscape_b888249c-1c0b-4ac6-930b-e59188d35789.jpg?v=1691759154")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> blush jewels</p>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Bram_s_Fruit_HS25_30-10-241072_copy.jpg?v=1747413260")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Bram&apos;s Fruit</p>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Clients-CurlyGirlMovement-portrait.jpg?v=1691758226")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> curly girl movement</p>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Rectangle_214_1.png?v=1691582175")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> daniëlle cathari</p>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/eave.webp?v=1747413280")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Eave Cosmetics</p>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Clients-FabienneChapot-square_6b0050c9-9b94-4116-9b2e-bbb38ce58d0d.jpg?v=1691759155")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> fabienne chapot</p>
                  </li>

                  <li>
                    <a className="link" target="_blank" href="https://flaneur.eu/"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/flaneur-look-02-medium.jpg?v=1765366297")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Flâneur</a>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/FLURESK_-_Hoogzomer_2025_-_FULL_58_d4c90095-1f44-437f-8ab5-b95682fb72de.jpg?v=1747413910")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Fluresk</p>
                  </li>

                  <li>
                    <Link className="link" target="_blank"
                          href="/pages/case-four-amsterdam-migration-from-lightspeed"
                          onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Clients-Four-long.jpg?v=1691758479")}
                          onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Four Amsterdam</Link>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/websize_G-Maxx_Froukje_byMarynHaertel_5840.jpg?v=1699372313")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> G-maxx</p>
                  </li>

                  <li>
                    <a className="link" target="_blank" href="https://goldbergh.com"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/desktop_02_0027b003-b4b7-489a-a88d-99e9d19c6a18.jpg?v=1757588506")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Goldbergh</a>
                  </li>

                  <li>
                    <Link className="link" target="_blank"
                          href="/pages/hang-eleven-webshop-international-growth"
                          onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/feed_45_ies_50.png?v=1747413895")}
                          onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Hang Eleven</Link>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Clients-IGWT-portrait_8d31a79e-4127-44f5-a27e-7be8b98ac333.jpg?v=1691759155")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> in gold we trust</p>
                  </li>

                  <li>
                    <Link className="link" target="_blank" href="/pages/redesign-and-migration-la-sisters"
                          onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/94d9ffe4-212d-4966-8f91-7437586786f9.webp?v=1742381790")}
                          onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> La Sisters</Link>
                  </li>

                  <li>
                    <Link className="link" target="_blank"
                          href="/pages/rebranded-website-las-olas-fashion-approach"
                          onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/231109_Las_Olas_website13605_4_c6c098f1-cfcf-4d9c-8ac0-93c07712f98f.jpg?v=1747413878")}
                          onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Las Olas</Link>
                  </li>

                  <li>
                    <Link className="link" target="_blank" href="/pages/how-maha-uses-klaviyo"
                          onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Clients-Maha-square_ed7468a6-c593-40bb-8f05-b5fe8a10d862.jpg?v=1691759155")}
                          onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> maha</Link>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Clients-Mastoor-4-5.jpg?v=1691759423")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> mastoor</p>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/4_452e7100-88d4-4646-bfcb-96902f00e088.jpg?v=1699371864")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Merrachi</p>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/ContentBlockSlider1-men_a41bf5f1-8a2e-4e39-8c48-7f415d15716c.jpg?v=1747413318")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Muchachomalo</p>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Clients-Olaf-portrait.jpg?v=1691759496")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> ølaf</p>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Fce-gramicci_0007.jpg?v=1691759552")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> oqium</p>
                  </li>

                  <li>
                    <a className="link" target="_blank" href="https://www.pantomime-parfum.com/"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/PANTOMIME_ACT-5_AI.jpg?v=1765366609")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> PANTOMIME Parfum™</a>
                  </li>

                  <li>
                    <Link className="link" target="_blank"
                          href="/pages/case-study-pure-path-rebranding-website"
                          onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Clients-PurePath-landscape.jpg?v=1691759683")}
                          onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Pure Path</Link>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Clients-Rainkiss_713bd76a-e471-433f-a98a-505dc7eb405a.jpg?v=1691761254")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> rainkiss</p>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/REFERENC_Header_Home_DT_1057x813_6b3fa223-d424-42b6-9d27-0ecbfcd815a5.jpg?v=1747413843")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Referenc</p>
                  </li>

                  <li>
                    <Link className="link" target="_blank" href="/pages/rino-pelle-shopify"
                          onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Clients-Rino-landscape.jpg?v=1691759860")}
                          onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> rino &amp; pelle</Link>
                  </li>

                  <li>
                    <Link className="link" target="_blank"
                          href="/pages/case-study-smaak-new-markets-expansion"
                          onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Clients-Smaak-portrait.jpg?v=1691760082")}
                          onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> smaak amsterdam</Link>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/Clients-StudioNoos-portrait.jpg?v=1691760170")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> studio noos</p>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/bg.png?v=1758092864")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Viktor &amp; Rolf</p>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/RIGGS_Mid_Grey_3b28d960-daa6-491c-9721-53a6b20fc2d8.png?v=1699367724")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Wahts</p>
                  </li>

                  <li>
                    <a className="link" target="_blank" href="https://zenology.com/"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/ZENOLOGY.jpg?v=1757588753")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> ZENOLOGY®</a>
                  </li>

                  <li>
                    <p className="link"
                       onMouseOver={() => setActiveImage("//www.notsellingliquid.com/cdn/shop/files/home_2.jpg?v=1747414013")}
                       onMouseOut={() => setActiveImage('')}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Zusss</p>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* jQuery Script converted to Next.js Script */}
      <Script
        src="//www.notsellingliquid.com/cdn/shop/t/39/assets/jquery.min.js?v=118972937870852736831758090047"
        strategy="beforeInteractive"
      />
    </>
  )
}