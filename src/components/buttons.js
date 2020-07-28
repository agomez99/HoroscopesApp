
// Let's import React, our styles and React Async
import React from 'react';
import { useAsync } from 'react-async';

// Then we'll fetch user data from this API
const loadUsers = async () =>
  await fetch("https://www.horoscopes-and-astrology.com/json")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

// Our component
function Button() {
  const { data, error, isLoading } = useAsync({ promiseFn: loadUsers })
  if (isLoading) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`
  if (data)
  
  // The rendered component
  return (
    <div className="container">
      <div>
      <ul>
        {data.titles.map((titles, i) => {
          return <li key={i}>{titles}{data.dates.Aries}</li>
        })}
      </ul>

        <h3>{data.titles.map(titles => (<li>{titles}{data.dates.Aries}{data.dailyhoroscope.Aries}</li>))}</h3>
      <p>{data.dailyhoroscope.titles}</p>


    </div>
    </div>

  );
}

export default Button;