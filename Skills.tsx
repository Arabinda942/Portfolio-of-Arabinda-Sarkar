import React from 'react';
import { Code, Database, Palette, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Tools & Technologies",
      skills: ["Python", "SQL", "Power BI", "Tableau", "Microsoft Excel", "Canva", "Adobe Photoshop", "Azure"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Functional Expertise",
      skills: ["Data Analysis", "Predictive Modeling", "Statistical Analysis", "Machine Learning", "Business Process Automation", "Compliance Management"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "People & Remote Skills",
      skills: ["Communication", "Team Collaboration", "Stakeholder Management", "Time Management", "Virtual Collaboration", "Document Management", "Adaptability"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Additional Technical Skills",
      skills: ["Web Scraping", "API Integration", "Data Visualization", "Hypothesis Testing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-blue-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;