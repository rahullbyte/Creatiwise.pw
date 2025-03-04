import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    { role: 'Lead Product Designer', company: 'Fortknox', date: 'Mar 2022 - Oct 2025' },
    { role: 'Intern Designer', company: 'OmniSafe', date: 'Mar 2022 - Oct 2022' },
    { role: 'UI Designer', company: 'Doradesign', date: 'Mar 2022 - Oct 2022' },
    { role: 'Frontend Developer', company: 'Opocity Author', date: 'Mar 2022 - Oct 2022' }
  ];

  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">
        <span className="text-yellow-500">★</span> Experience
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border-t border-gray-700 pt-4">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-sm text-gray-400">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;