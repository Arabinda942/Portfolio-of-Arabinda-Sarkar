import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

interface ContactItem {
  icon: React.ElementType;
  title: string;
  value: string;
  link: string;
  delay: number;
}

const contactItems: ContactItem[] = [
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'arabindasarkarwork@gmail.com',
    link: 'mailto:arabindasarkarwork@gmail.com',
    delay: 0.2
  },
  {
    icon: FaPhone,
    title: 'Phone',
    value: '+91 8961460091',
    link: 'tel:+918961460091',
    delay: 0.3
  },
  {
    icon: FaLinkedin,
    title: 'LinkedIn',
    value: 'arabindasarkar',
    link: 'https://www.linkedin.com/in/arabindasarkar/',
    delay: 0.4
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
                target={item.title === 'LinkedIn' ? '_blank' : undefined}
                rel={item.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
              >
                <Icon className="w-8 h-8 mx-auto text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.value}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;