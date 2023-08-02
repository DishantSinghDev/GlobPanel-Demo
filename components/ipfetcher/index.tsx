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
    fetch('https://api.ipdata.co?api-key=4b258af909382b876ca1bba57e01f8ba994aaf1de3cb0cf55a30156b')
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
