'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function ClientsList() {
  useEffect(() => {
    // Load jQuery functionality for client interactions
    const $ = (window as any).$
    if ($) {
      $(document).ready(() => {
        $(document).on('mouseover', '.link', function() {
          const link = $(this).attr("data-image")
          $(this).closest(".main_client").find(".left_client img").attr("src", link)
        })
        $(document).on('mouseleave', '.link', function() {
          $(this).closest(".main_client").find(".left_client img").attr("src", '')
        })
      })
    }
  }, [])

  return (
    <>
      <div id="shopify-section-template--26430797545815__c8b8e8be-b8b8-4b8b-8b8b-8b8b8b8b8b8b"
           className="shopify-section">
        <link href="//www.notsellingliquid.com/cdn/shop/t/39/assets/clients.css?v=61424727456504692821758090047"
              rel="stylesheet" type="text/css" media="all" />

        <style jsx>{`
          .section-id-template--26430797545815__c8b8e8be-b8b8-4b8b-8b8b-8b8b8b8b8b8b {
            padding-top: 20px;
            padding-bottom: 100px;
          }

          .section-id-template--26430797545815__c8b8e8be-b8b8-4b8b-8b8b-8b8b8b8b8b8b .main_client {
            background-color: #c0bbae
          }

          @media (max-width: 768px) {
            .section-id-template--26430797545815__c8b8e8be-b8b8-4b8b-8b8b-8b8b8b8b8b8b {
              padding-top: 0px;
              padding-bottom: 60px;
            }
          }
        `}</style>

        <section className="section-clients section-id-template--26430797545815__c8b8e8be-b8b8-4b8b-8b8b-8b8b8b8b8b8b relative-sec">
          <div className="container">
            <div className="main_client">
              <div className="left_client">
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
              <div className="right_client">
                <ul>
                  <li>
                    <p className="link"
                       data-image="//www.notsellingliquid.com/cdn/shop/files/Clients-AGR-portrait.jpg?v=1691759155">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> AGR</p>
                  </li>

                  <li>
                    <p className="link"
                       data-image="//www.notsellingliquid.com/cdn/shop/files/Clients-Angel-portrait.jpg?v=1691759157">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Angel Projects</p>
                  </li>

                  <li>
                    <Link className="link" target="_blank"
                          href="/pages/case-study-arte-antwerp-shopify-plus-migration"
                          data-image="//www.notsellingliquid.com/cdn/shop/files/Clients-Arte-portrait.jpg?v=1691759158">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                              fill="#262424"></path>
                      </svg> Arte antwerp</Link>
                  </li>

                  {/* Continue with all other client entries... */}
                  
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}