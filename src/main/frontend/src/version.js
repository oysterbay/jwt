import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Version = () => {
  const [commitHash, setCommitHash] = useState('');

  useEffect(() => {
    const fetchCommitHash = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/oysterbay/jwt/commits/master'
        );
        const { sha } = response.data;
        setCommitHash(sha);
      } catch (error) {
        console.error('Error retrieving commit hash:', error);
      }
    };

    fetchCommitHash();
  }, []);

  return (
    <div>
      <p>Version: {commitHash}</p>
    </div>
  );
};

export default Version;
