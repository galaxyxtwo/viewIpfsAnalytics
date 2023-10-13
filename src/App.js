import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({ items: [], error: null });
  const [cidInput, setCidInput] = useState('');  // 1. State to handle the input CID
  const initialCidsFromLocalStorage = JSON.parse(localStorage.getItem('savedCids')) || [];
  const [cids, setCids] = useState(initialCidsFromLocalStorage);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/analytics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cids: cids,
            page: 1,
            size: 5
          })
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const fetchedData = await response.json();
        console.log("API Response:", fetchedData);  // Log the API response
        if (fetchedData.success && fetchedData.data && Array.isArray(fetchedData.data.data)) {
            setData({ items: fetchedData.data.data, error: null });
        } else {
            throw new Error("Invalid data format from the server.");
        }
        
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, [cids]);  // 3. Listen to the change of the cids state

  const handleAddCid = () => {
    if (cidInput) {
      setCids(prevCids => {
        const newCids = [...prevCids, cidInput.trim()];  
        localStorage.setItem('savedCids', JSON.stringify(newCids));  // Save to local storage
        return newCids;
      });
      setCidInput('');
    }
};

  return (
    <div className="App">
      <nav className="App-navbar">
          <span>My NFT collection</span>
      </nav>
      <h1>Leaderboard</h1>
      <h2>The most popular NFTs</h2>

      <div className="cid-input-section">  {/* 2. Add a text input and a button */}
        <input 
          type="text" 
          value={cidInput} 
          onChange={e => setCidInput(e.target.value)} 
          placeholder="Enter CID to query..."
        />
        <button onClick={handleAddCid}>Add to Leaderboard</button>
      </div>

      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>NFT CID</th>
            <th>Total Views</th>
          </tr>
        </thead>
        <tbody>
          {
            [...data.items].sort((a, b) => b.numbersAccessed - a.numbersAccessed)
            .map((item, index) => (
              <tr key={index}>
                <td className="cid-column">
                  <a href={`https://leto.gg/ipfs/${item.cid}`} target="_blank" rel="noopener noreferrer">
                    {item.cid}
                  </a>
                </td>
                <td>{item.numbersAccessed}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {data.error && <p>Error: {data.error.message}</p>}
    </div>
  );
}

export default App;
