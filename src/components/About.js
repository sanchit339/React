import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaCode } from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaLinkedin />,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sanchit339',
  },
  {
    icon: <FaGithub />,
    name: 'GitHub',
    url: 'https://github.com/sanchit339',
  },
  {
    icon: <FaInstagram />,
    name: 'Instagram',
    url: 'https://www.instagram.com/___sanchit_3',
  },
  {
    icon: <FaCode />,
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/panther339',
  },
  {
    icon: <FaCode />,
    name: 'Codechef',
    url: 'https://www.codechef.com/users/sanchit339',
  },
];

const About = () => {
  return (
    <div className="futuristic-template m-24">
      <h2>About Me</h2>
      <p>Hii I am Sanchit Ingale following are my profile links</p>

      <div className="">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-item flex items-center space-x-2 text-gray-500 transition-colors duration-300 hover:text-blue-300"
          >
            <div className="link-icon text-3xl hover:text-blue-300 my-2">{link.icon}</div>
            <div className="link-name text-sm">{link.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default About;
