import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow, FaLinkedinIn, FaGithub, FaDev, FaRetweet, FaXing, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id='home'>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.02] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-90">
            Specialist in Building Robust Web Applications
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Merging Creativity with Cutting-Edge New Technologies"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Sahil, a Software Engineer based in India.
          </p>
          <a href="/sahil_shityalkar_resume.pdf" download>
            <MagicButton title="Get My Resume" icon={<FaLocationArrow />} position="right" />
          </a>
          <div className="flex justify-center items-center mt-10">
            <a
              href="https://github.com/sahilshityalkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl hover:text-blue-500 mr-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sahilshityalkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-xl hover:text-blue-500 mr-4" />
            </a>
            <a
              href="https://dev.to/sahilshityalkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDev className="text-xl hover:text-blue-500 mr-4" />
            </a>
            <a
              href="https://x.com/SK_sahil05"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-xl hover:text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
