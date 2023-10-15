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
        const response = await fetch('analytics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cids: cids,
            page: 1,
            size: 44
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
  }, [cids]);  // Listen to the change of the cids state

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
    console.log("cid added", handleAddCid);  // Log the API response
const handleDeleteCid = (cidToDelete) => {
  setCids(prevCids => {
    const newCids = prevCids.filter(cid => cid !== cidToDelete);
    localStorage.setItem('savedCids', JSON.stringify(newCids));  // Update local storage
    return newCids;
  });
};

// Add navbar text <span> if needed
  return (
    <div className="App">
      <nav className="App-navbar">
          <span></span> 
      </nav>
      <h1>View IPFS Analytics</h1>
      <h2>Total views per IPFS cid</h2>

      <div className="cid-input-section">  {/* Add a text input and a button */}
        <input 
          type="text" 
          value={cidInput} 
          onChange={e => setCidInput(e.target.value)} 
          placeholder="Enter CID to query..."
        />
        <button onClick={handleAddCid}>Add</button>
      </div>

      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>IPFS CID</th>
            <th>Total Views</th>
            <th>Action</th> {/* Added this column header */}
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
                <td>
                  <button onClick={() => handleDeleteCid(item.cid)}>Delete</button> {/* Added this delete button */}
                </td>
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
