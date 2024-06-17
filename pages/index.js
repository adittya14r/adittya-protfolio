import React from 'react';
import { Card, Timeline, Contactfrom } from '@/components/index'
import Link from 'next/link';

export default function Home() {


  return (
    <main
      className="flex flex-col items-center justify-between pt-5">

      <div className="h-full w-full mx-3 rounded-lg">

        <div className="md:flex">
          <div className="md:w-5/12 flex items-center">
            <div className="shape pt-5 pl-5 mx-auto border border-[#064d0f]">
              <img src="/images/Bing.png" />
            </div>
          </div>
          <div className="md:w-7/12 text-center md:text-left p-5 h-full about-section">

            <div className="inline-block book-cover">
              <h2 className="leading-none	name mt-3 text-[#124d24] text-3xl font-bold leading-normal">Adittya Basak <span className="mx-1"></span></h2>
            </div>
            <h4 className="text-white text-lg">UX Designer</h4>
            <div className="flex gap-3 justify-center md:justify-start mt-3 ">
              <a href="#" className="glow cursor-pointer hover:border-white border-green-600 border rounded-full p-2 text-green-400 hover:text-white">
                <svg className="h-5 w-5 z-10 relative" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="glow cursor-pointer hover:border-white border-green-600 border rounded-full p-2 text-green-400 hover:text-white">
                <svg className="h-5 w-5 z-10 relative" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
              </a>
              <a href="#" className="glow cursor-pointer hover:border-white border-green-600 border rounded-full p-2 text-green-400 hover:text-white">
                <svg className="h-5 w-5 z-10 relative" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" className="glow cursor-pointer hover:border-white border-green-600 border rounded-full p-2 text-green-400 hover:text-white">
                <svg className="h-5 w-5 z-10 relative" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
              </a>
            </div>
            <p className="text-white text-center md:text-left mt-3 text-[15px]">
              Hello! I’m Adittya Basak, a passionate and experienced UX and website designer with over three years of experience in creating visually appealing and user-friendly websites. My journey in web design began with self-study, utilizing resources like YouTube to master the latest web technologies.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-3">

              <div className="relative">
                <svg className="gooey-btn" xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <filter id="gooey">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                      <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                      <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                    </filter>
                  </defs>
                </svg>
                <Link href="/adittya-resume.pdf" target='_blank'>
                  <button id="gooey-button" className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-green-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download CV
                    <span className="bubbles">
                      <span classs="bubble"></span>
                      <span className="bubble"></span>
                      <span className="bubble"></span>
                      <span className="bubble"></span>
                      <span className="bubble"></span>
                      <span className="bubble"></span>
                      <span className="bubble"></span>
                      <span className="bubble"></span>
                    </span>
                  </button>
                </Link>
              </div>

              <div className="relative">
                <svg className="gooey-btn" xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <filter id="gooey">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                      <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                      <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                    </filter>
                  </defs>
                </svg>
                <Link href="tel:+918710053228" target='_blank'>

                  <button id="gooey-button" className="flex gap-2 items-center">
                    <svg className="h-5 w-5 text-green-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                    Contact Me
                    <span className="bubbles">
                      <span classs="bubble"></span>
                      <span className="bubble"></span>
                      <span className="bubble"></span>
                      <span className="bubble"></span>
                      <span className="bubble"></span>
                      <span className="bubble"></span>
                      <span className="bubble"></span>
                      <span className="bubble"></span>
                    </span>
                  </button>
                </Link>
              </div>

              {/* <button type="button"></button> */}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center relative">
          <h3 className="text-3xl text-white">Skill</h3>


          <div className="flex flex-col sm:flex-row flex-wrap gap-y-5 mt-8 px-8 z-20 relative">
            <Card Img={<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 1024 1024" fill="currentColor" x="128" y="128" role="img" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="currentColor" d="m145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6l-245.2-69.6l-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3l22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7l-6.5-73.2h-91l11.3 144.7l188.6 52h1.7v-.4l187.7-51.7l1.7-16.3l21.2-242.2l3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5l4.8-47.2L742 249H511z" /></g></svg></svg>}
              Name={'HTML'}
            />
            <Card Img={
              <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 512 512" fill="currentColor" x="128" y="128" role="img" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M354.676 366.898l-98.608 28.125-98.458-28.248L150.864 289h48.253l3.433 39.563 53.586 15.163.132.273h.034l53.467-14.852L315.381 265H203l-4-50h120.646l4.396-51H140l-4-49h240.58l-21.904 251.898z" fill="currentColor" /><path d="M64 32l34.936 403.301L255.769 480l157.245-44.705L448 32H64zm319.041 378.51l-127.262 36.187-126.867-36.169L98.896 64H413.1l-30.059 346.51z" fill="currentColor" /></g></svg></svg>
            }
              Name={'CSS'}
            />
            <Card Img={
              <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 24 24" fill="currentColor" x="128" y="128" role="img" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m20 4l-2 14.5l-6 2l-6-2L4 4z" /><path d="M7.5 8h3v8l-2-1m8-7H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5" /></g></g></svg></svg>
            }
              Name={'Javascript'}
            />
            <Card Img={
              <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 512 512" fill="currentColor" x="128" y="128" role="img" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="currentColor" d="M259 271.3L226.2 367h-.1l-25.4 73.1c1.8.5 3.5.9 5.3 1.4h.3a192.51 192.51 0 0 0 49.5 6.5a157 157 0 0 0 24.9-1.8a184.3 184.3 0 0 0 32.5-7.1c2.6-.8 5.2-1.7 7.8-2.6c-2.8-6-8.8-19.3-9.1-19.9ZM80.8 180.5C70.8 203.1 64 230.9 64 256c0 6.3.3 12.6.9 18.8c6.9 71.2 52.9 131 116.1 157.9c2.6 1.1 5.3 2.2 8 3.2L96 180.6c-8-.3-9.5.2-15.2-.1Z" /><path fill="currentColor" d="M430.2 175.4a188 188 0 0 0-15.1-26.6c-1.6-2.4-3.4-4.8-5.1-7.2A193 193 0 0 0 325.1 77a189.2 189.2 0 0 0-69.2-13a191.51 191.51 0 0 0-149.4 71.7A196 196 0 0 0 89 161.3c14.2.1 31.8.1 33.8.1c18.1 0 46-2.2 46-2.2c9.4-.6 10.4 13.1 1.1 14.2c0 0-9.4 1.1-19.8 1.6L213 362l37.8-113.3l-26.8-73.6c-9.4-.5-18.1-1.6-18.1-1.6c-9.4-.5-8.2-14.8 1-14.2c0 0 28.5 2.2 45.5 2.2c18.1 0 46-2.2 46-2.2c9.3-.6 10.5 13.1 1.1 14.2c0 0-9.3 1.1-19.7 1.6l62.3 185.6l17.3-57.6c8.7-22.4 13.1-40.9 13.1-55.7c0-21.3-7.7-36.1-14.3-47.6c-8.7-14.3-16.9-26.3-16.9-40.4c0-15.9 12-30.7 29-30.7h2.2c26.2-.7 34.8 25.3 35.9 43v.6c.4 7.2.1 12.5.1 18.8c0 17.4-3.3 37.1-13.1 61.8l-39 112.8l-22.3 65.7c1.8-.8 3.5-1.6 5.3-2.5c56.7-27.4 98-82 106.7-146.7a172.07 172.07 0 0 0 1.9-26a191.11 191.11 0 0 0-17.8-80.8Z" /><path fill="currentColor" d="M256 48a208.06 208.06 0 0 1 81 399.66A208.06 208.06 0 0 1 175 64.34A206.7 206.7 0 0 1 256 48m0-16C132.29 32 32 132.29 32 256s100.29 224 224 224s224-100.29 224-224S379.71 32 256 32Z" /></g></svg></svg>
            }
              Name={'Wordpress'}
            />
            <Card Img={
              <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 128 128" fill="currentColor" x="128" y="128" role="img" xmlns="http://www.w3.org/2000/svg"><g fill="#dadada"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" /></g></svg></svg>
            }
              Name={'Next Js'}
            />
            <Card Img={
              <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 24 24" fill="currentColor" x="128" y="128" role="img" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><g fill="none"><g fill="currentColor" clip-path="url(#akarIconsReactFill0)"><path d="M24 11.689c0-1.59-1.991-3.097-5.044-4.031c.705-3.111.392-5.587-.988-6.38a2.145 2.145 0 0 0-1.096-.273v1.09c.225 0 .406.045.558.128c.665.382.954 1.834.729 3.703c-.054.46-.142.944-.25 1.438a23.706 23.706 0 0 0-3.106-.533a23.857 23.857 0 0 0-2.035-2.446c1.595-1.482 3.092-2.294 4.11-2.294V1c-1.346 0-3.107.959-4.888 2.622C10.21 1.97 8.448 1.02 7.103 1.02v1.09c1.013 0 2.515.808 4.11 2.28c-.685.72-1.37 1.536-2.021 2.441a22.844 22.844 0 0 0-3.111.538a14.683 14.683 0 0 1-.255-1.418c-.23-1.87.054-3.322.715-3.708c.146-.088.337-.128.562-.128v-1.09c-.41 0-.783.088-1.105.273c-1.375.793-1.683 3.263-.974 6.365C1.981 8.603 0 10.104 0 11.689c0 1.59 1.991 3.097 5.044 4.03c-.705 3.112-.392 5.588.988 6.38c.318.186.69.274 1.1.274c1.346 0 3.107-.959 4.888-2.622c1.78 1.653 3.541 2.602 4.887 2.602a2.18 2.18 0 0 0 1.105-.274c1.375-.792 1.683-3.262.974-6.364C22.019 14.781 24 13.274 24 11.689Zm-6.37-3.263a22.023 22.023 0 0 1-.66 1.932a26.444 26.444 0 0 0-1.345-2.319c.695.103 1.365.23 2.006.387Zm-2.24 5.21a25.94 25.94 0 0 1-1.179 1.869a25.453 25.453 0 0 1-4.412.005a25.457 25.457 0 0 1-2.201-3.806a26.064 26.064 0 0 1 2.192-3.82a25.455 25.455 0 0 1 4.411-.006c.406.582.803 1.204 1.184 1.86c.372.64.71 1.29 1.018 1.946a27.41 27.41 0 0 1-1.013 1.952ZM16.97 13c.264.655.49 1.311.675 1.947c-.64.157-1.316.289-2.015.391A27.044 27.044 0 0 0 16.97 13Zm-4.96 5.22c-.455-.47-.91-.993-1.36-1.566c.44.02.89.035 1.345.035c.46 0 .915-.01 1.36-.035c-.44.573-.895 1.096-1.345 1.566Zm-3.64-2.882a22.113 22.113 0 0 1-2.006-.386c.181-.631.406-1.282.66-1.932c.201.39.412.782.642 1.174c.23.391.464.773.704 1.144Zm3.615-10.18c.455.47.91.993 1.36 1.566c-.44-.02-.89-.035-1.345-.035c-.46 0-.915.01-1.36.035c.44-.573.895-1.096 1.345-1.566ZM8.365 8.04a27.02 27.02 0 0 0-1.34 2.333a20.96 20.96 0 0 1-.675-1.947c.64-.152 1.316-.284 2.015-.386Zm-4.427 6.124c-1.732-.738-2.852-1.707-2.852-2.475s1.12-1.742 2.852-2.475c.42-.181.88-.343 1.355-.494c.279.958.646 1.956 1.1 2.979a23.165 23.165 0 0 0-1.085 2.964a14.875 14.875 0 0 1-1.37-.499Zm2.632 6.99c-.665-.38-.954-1.834-.729-3.702c.054-.46.142-.945.25-1.439c.958.235 2.005.416 3.106.534a23.87 23.87 0 0 0 2.035 2.446c-1.595 1.482-3.092 2.294-4.11 2.294a1.167 1.167 0 0 1-.552-.132Zm11.604-3.727c.23 1.869-.054 3.322-.715 3.708c-.146.088-.337.127-.562.127c-1.013 0-2.515-.807-4.11-2.28a23.01 23.01 0 0 0 2.021-2.44a22.843 22.843 0 0 0 3.111-.538c.113.494.2.968.255 1.423Zm1.883-3.263c-.42.181-.88.343-1.355.494a23.482 23.482 0 0 0-1.1-2.979c.45-1.017.811-2.01 1.085-2.964a15.3 15.3 0 0 1 1.375.499c1.732.738 2.852 1.707 2.852 2.475c-.005.768-1.125 1.742-2.857 2.475Z" /><path d="M11.995 13.925a2.236 2.236 0 1 0 0-4.472a2.236 2.236 0 0 0 0 4.472Z" /></g><defs><clipPath id="akarIconsReactFill0"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></g></g></svg></svg>
            }
              Name={'React Js'}
            />
          </div>


          <div className="mt-36 z-10 absolute top-0 right-[5rem] w-80 h-80 rounded-full border border-green-800 box-circle">
            <div className="diff-arrow"></div>
          </div>

        </div>


        <div className="md:flex mt-16 px-8">
          <Timeline />

        </div>

        <div className="md:flex mt-20">
          <Contactfrom />
        </div>






      </div>


    </main>
  );
}
