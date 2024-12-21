import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Executive IT (Voice Logger Compliance)",
      company: "SMIFS Limited",
      location: "Kolkata, India",
      period: "March 2021 – Present",
      achievements: [
        "Automated Reporting & Documentation: Spearheaded Python automation for document creation, cutting report generation time by 50% and ensuring consistency across 1,000+ reports.",
        "Regulatory Compliance & Voice Recording Management: Maintained 99.9% accuracy in voice recordings, ensuring regulatory compliance and smooth audits for SEBI, NSE, BSE, and MCX.",
        "System Optimization & Operational Efficiency: Administered IT dashboards, enhancing system uptime by 30% and accelerating response times for critical IT support tasks.",
        "Resource Allocation & Functional Collaboration: Developed an Excel-based resource allocation system, boosting team efficiency by 25%, and collaborated with cross-functional teams to improve operational productivity by 20%."
      ]
    },
    {
      title: "IT Support & Back Office Executive",
      company: "Doch Corporation Limited",
      location: "Kolkata, India",
      period: "February 2020 – December 2020",
      achievements: [
        "Resolved web and networking issues, reducing system downtime by 20% and improving operational efficiency.",
        "Conducted hardware and software maintenance, enhancing system performance and reliability.",
        "Designed creative visuals and videos with Adobe Photoshop and Premiere, while maintaining customer records and data on Doch platforms for improved organization."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-blue-400 mb-1">{exp.company}</p>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                    <Calendar className="w-4 h-4 ml-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="ml-4">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;