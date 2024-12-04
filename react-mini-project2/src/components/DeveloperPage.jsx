import React from 'react';

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
];

const DeveloperPage = () => {
  return (
    <div className='developer'>
      <h1>Developer Information</h1>
      <p>Meet the team behind Artisan Keyboards.</p>
      
      <div>
        <h2>Our Developers:</h2>
        <ul>
          {developers.map((developer, index) => (
            <li key={index}>
              <p><strong>Name: {developer.name}</strong></p>
              <p><strong>Role: </strong> {developer.role}</p>
              <p><strong>Description: </strong> {developer.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeveloperPage;