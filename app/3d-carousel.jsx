import React, { useEffect } from 'react';
import Head from 'next/head';

// Import the web component
import '3d-carousel-js';

const CarouselComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      customElements.whenDefined('carousel-3d').catch((err) =>
        console.error('Error loading carousel-3d component:', err)
      );
    }
  }, []);

  return (
    <>
      <Head>
        <title>Carousel 3D</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div style={{ backgroundColor: '#000020', textAlign: 'center', height: '100vh', width: '100%' }}>
        <carousel-3d>
          <style jsx>{`
            .carousel-container {
              position: relative;
              width: 100%;
              height: 100%;
              perspective: 1000px;
            }
            .carousel-items {
              width: 100%;
              height: 100%;
              transform-style: preserve-3d;
              animation: spin 10s linear infinite;
            }
            .logo {
              position: absolute;
              height: 20vw;
              width: 20vw;
              max-width: 200px;
              max-height: 200px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 10px;
              transform-style: preserve-3d;
              transition: transform 0.5s;
            }
            .logo:hover {
              transform: scale(1.1);
              cursor: pointer;
            }
            .logo > img {
              width: 90%;
              height: 90%;
              padding: 10px;
              background-color: navy;
              border-radius: 10px;
            }
            .anchor {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              height: 300px;
              width: 300px;
              background-image: url("https://static.vecteezy.com/system/resources/previews/019/806/316/original/lighthouse-graphic-clipart-design-free-png.png");
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              z-index: 10;
            }
            @keyframes spin {
              from {
                transform: rotateY(0deg);
              }
              to {
                transform: rotateY(360deg);
              }
            }
          `}</style>
          <div className="carousel-container">
            <div className="carousel-items">
              {[
                "https://logo.uplead.com/amazon.com",
                "https://logo.uplead.com/github.com",
                "https://logo.uplead.com/facebook.com",
                "https://logo.uplead.com/lg.com",
                "https://logo.uplead.com/dell.com",
                "https://logo.uplead.com/hp.com",
                "https://logo.uplead.com/stackoverflow.com",
                "https://logo.uplead.com/google.com",
                "https://logo.uplead.com/medium.com",
                "https://logo.uplead.com/youtube.com",
                "https://logo.uplead.com/lenovo.com",
                "https://logo.uplead.com/apple.com",
                "https://logo.uplead.com/netflix.com",
              ].map((src, index, array) => {
                const angle = (360 / array.length) * index;
                const radius = 300; // Adjust the radius as needed
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const z = radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <div
                    className="logo"
                    key={index}
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    }}
                  >
                    <img src={src} alt={`Logo ${index + 1}`} />
                  </div>
                );
              })}
            </div>
            <div className="anchor"></div>
          </div>
        </carousel-3d>
        <a
          href="https://uplead.com"
          style={{
            position: 'absolute',
            color: 'white',
            left: 0,
            right: 0,
            bottom: '1rem',
          }}
        >
          Logos provided by UpLead
        </a>
      </div>
    </>
  );
};

export default CarouselComponent;
