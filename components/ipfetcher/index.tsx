import React, { useState, useEffect } from 'react';

interface UserData {
  ipAddress: string;
  country: string;
  currency: string;
}

function IpFetcher() {
  const [userData, setUserData] = useState<UserData>({
    ipAddress: '',
    country: '',
    currency: ''
  });

  useEffect(() => {
    fetch('https://api.ipdata.co?api-key=USE_YOUR_KEY_HERE')
      .then(response => response.json())
      .then(data => setUserData({
        ipAddress: data.ip,
        country: data.country_name,
        currency: data.currency.code
      }))
      .catch(error => console.error(error));
  }, []);

  return (
    userData
  );
}

export default IpFetcher;
