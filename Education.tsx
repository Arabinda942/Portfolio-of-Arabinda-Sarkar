import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "Chandigarh University",
      period: "August 2024 – Present"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Calcutta University",
      period: "July 2015 – May 2019"
    }
  ];

  const certifications = [
    "Data Analytics Bootcamp – iNeuron",
    "Google AdWords Search Certification – Google",
    "Google AdWords Mobile Advertising Certification – Google",
    "Google Analytics Individual Qualification – Google",
    "Crash Course with Python – Google",
    "Using Python to Interact with the Operating System – Google",
    "Tableau A-Z: Hands-On Tableau Training for Data Science – Udemy"
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Education & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-blue-400 pl-4">
                  <h4 className="text-lg font-medium text-white">{edu.degree}</h4>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;