import React from 'react';

const LogoCarousel: React.FC = () => {
  const logos = [
    {
      src: "/Logos/react-logo.webp",
      alt: "React - Moderne JavaScript library voor het bouwen van gebruikersinterfaces",
      title: "React"
    },
    {
      src: "/Logos/typescript-Logo.webp", 
      alt: "TypeScript - JavaScript met type veiligheid voor betere code kwaliteit",
      title: "TypeScript"
    },
    {
      src: "/Logos/javascript-logo.webp",
      alt: "JavaScript - De programmeertaal van het web",
      title: "JavaScript"
    },
    {
      src: "/Logos/tailwindcss-Logo.webp",
      alt: "Tailwind CSS - Modern framework voor snelle en flexibele styling",
      title: "Tailwind CSS"
    },
    {
      src: "/Logos/nodejs-logo.webp",
      alt: "Node.js - JavaScript runtime voor server-side ontwikkeling",
      title: "Node.js"
    },
    {
      src: "/Logos/next.js-Logo.webp",
      alt: "Next.js - React framework voor productie-ready websites",
      title: "Next.js"
    },
    {
      src: "/Logos/graphQL-logo.webp",
      alt: "GraphQL - Moderne query taal voor APIs",
      title: "GraphQL"
    }
  ];

  return (
    <div className="w-full bg-white py-12">
      <div className="relative overflow-hidden">
        <div className="flex space-x-12 animate-scroll py-8">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div 
              key={`logo-${index}`}
              className="flex-shrink-0 transform-gpu"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                className="h-[80px] md:h-[120px] w-auto object-contain transition-transform duration-300 hover:-translate-y-4 hover:scale-110"
                width="120"
                height="120"
                loading="lazy"
              />
            </div>
          ))}
          
          {/* Duplicate logos for seamless loop */}
          {logos.map((logo, index) => (
            <div 
              key={`logo-duplicate-${index}`}
              className="flex-shrink-0 transform-gpu"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                className="h-[80px] md:h-[120px] w-auto object-contain transition-transform duration-300 hover:-translate-y-4 hover:scale-110"
                width="120"
                height="120"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;