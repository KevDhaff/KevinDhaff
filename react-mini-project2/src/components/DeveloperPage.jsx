import React, { useState } from 'react';

const developers = [
  {
    name: 'Alice Johnson',
    role: 'Frontend Developer',
    description: 'Alice specializes in creating responsive user interfaces and is passionate about user experience.',
  },
  {
    name: 'Bob Smith',
    role: 'Backend Developer',
    description: 'Bob focuses on server-side logic and database management, ensuring seamless data flow.',
  },
  {
    name: 'Charlie Brown',
    role: 'Full Stack Developer',
    description: 'Charlie has expertise in both frontend and backend technologies, bridging the gap between the two.',
  },
  {
    name: 'Diana Prince',
    role: 'UI/UX Designer',
    description: 'Diana excels in designing intuitive user experiences and visually appealing interfaces.',
  },
  {
    name: 'Ethan Hunt',
    role: 'DevOps Engineer',
    description: 'Ethan is skilled in automating deployment processes and managing cloud infrastructure for optimal performance.',
  },
  {
    name: 'Fiona Gallagher',
    role: 'Mobile Developer',
    description: 'Fiona develops cross-platform mobile applications, focusing on performance and user engagement.',
  },
  {
    name: 'George Lucas',
    role: 'Data Scientist',
    description: 'George analyzes complex data sets to derive actionable insights and drive data-informed decisions.',
  },
  {
    name: 'Hannah Baker',
    role: 'Quality Assurance Engineer',
    description: 'Hannah ensures software quality through rigorous testing and validation processes.',
  },
  {
    name: 'Ian Malcolm',
    role: 'Software Architect',
    description: 'Ian designs scalable software architectures and oversees the technical direction of projects.',
  },
  {
    name: 'Julia Roberts',
    role: 'Security Specialist',
    description: 'Julia focuses on implementing security measures to protect applications and data from vulnerabilities.',
  },
];

const DeveloperCard = ({ developer, onVouch, isVouched }) => {
  return (
    <div className="developer-card">
      <h3>{developer.name}</h3>
      <h4>{developer.role}</h4>
      <p>{developer.description}</p>
      <button onClick={() => onVouch(developer.name)} disabled={isVouched}>
        {isVouched ? 'Vouched' : 'Vouch'}
      </button>
    </div>
  );
};

const DeveloperPage = () => {
  const [vouchedDevelopers, setVouchedDevelopers] = useState(new Set());

  const handleVouch = (name) => {
    setVouchedDevelopers((prev) => new Set(prev).add(name));
  };

  return (
    <div className='developer'>
      <h1>Developer Information</h1>
      <p>Meet the team behind Artisan Keyboards.</p>
      
      <div>
        <h2>Our Developers:</h2>
        <div className="developer-list">
          {developers.map((developer) => (
            <DeveloperCard 
              key={developer.name} 
              developer={developer} 
              onVouch={handleVouch} 
              isVouched={vouchedDevelopers.has(developer.name)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperPage;