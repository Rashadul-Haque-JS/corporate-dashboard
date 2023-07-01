import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const SocialMedia = () => {
  // Dummy social media data
  const socialMediaData = [
    { platform: "Facebook", followers: 1500, likes: 2000, comments: 500 },
    { platform: "Twitter", followers: 1200, likes: 1800, comments: 400 },
    { platform: "Instagram", followers: 2500, likes: 3000, comments: 700 },
    { platform: "LinkedIn", followers: 800, likes: 1000, comments: 200 },
  ];

  const renderLegend = () => {
    return (
      <ul className="flex flex-wrap justify-center" style={{ fontSize: '12px' }}>
        <li className="mr-4 flex items-center">
          <svg className="w-3 h-3 mr-1" viewBox="0 0 16 16" version="1.1">
            <rect width="16" height="16" fill="#8884d8" />
          </svg>
          <span>Followers</span>
        </li>
        <li className="mr-4 flex items-center">
          <svg className="w-3 h-3 mr-1" viewBox="0 0 16 16" version="1.1">
            <rect width="16" height="16" fill="#82ca9d" />
          </svg>
          <span>Likes</span>
        </li>
        <li className="mr-4 flex items-center">
          <svg className="w-3 h-3 mr-1" viewBox="0 0 16 16" version="1.1">
            <rect width="16" height="16" fill="#ffc658" />
          </svg>
          <span>Comments</span>
        </li>
      </ul>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={socialMediaData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="platform" style={{ fontSize: '12px' }}/>
        <YAxis />
        <Legend content={renderLegend} />
        <Bar dataKey="followers" fill="#8884d8" name="Followers" />
        <Bar dataKey="likes" fill="#82ca9d" name="Likes" />
        <Bar dataKey="comments" fill="#ffc658" name="Comments" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SocialMedia;
