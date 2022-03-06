import React from 'react';
import axios from 'axios';
import './App.css';
function App() {
  const [name, setName] = React.useState('');
  let [responseData, setResponseData] = React.useState('');
  const fetchData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url": "https://jsonplaceholder.typicode.com/users/",
      
    })
    .then((response) => {
      setResponseData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  const getName = async () => {
    //setLoading(true);
    try {
      const info = await axios.get(
        `https://jsonplaceholder.typicode.com/users/name`
      );
      setName(info.data);
    } catch (error) {
      console.log(error)
    }
    //setShowList(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contacts</h1>
        <button type='button' onClick={fetchData}>Click for Data</button>
      </header>
      <main>
        {responseData &&
          <blockquote>
            "{responseData && responseData.content}"
            <small>{responseData && responseData.name && responseData.email}</small>
          </blockquote>
        }
      </main>
      {/* <pre>
        <code>
          {responseData && JSON.stringify(responseData, null, 4)}
        </code>
      </pre> */}
    </div>
  );
}
export default App;