import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:arabindasarkarwork@gmail.com',
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/arabindasarkar/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/Arabinda942',
      label: 'GitHub'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 pt-16">
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Data Science Enthusiast
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            Experienced professional with expertise in automation, data analysis, and process optimization.
            Currently pursuing a Master's in Data Science to further strengthen technical capabilities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#experience"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors w-48 text-center"
            >
              View Experience
            </a>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;