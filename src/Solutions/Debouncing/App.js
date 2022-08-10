import React from 'react';
import axios from "axios";


const API_URL = `https://swapi.dev/api/people`;

const customDebounce = (func, delay) => {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  }
}

function App() {

  const [inputValue, setInputValue] = React.useState('');
  const [result, setResult] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, [])


  const filterData = (data, query) => {
    const filteredData = data.filter(val => val.name.toLowerCase().startsWith(query, 0));
    if(query){
      setResult(filteredData);
    } else {
      setResult(data);
    }
  }

  const fetchData = (query) => {
      const res = axios.get(API_URL);
      res.then(data => {
        filterData(data?.data?.results, query);
      });
  }

  const debounceSearch = React.useCallback(customDebounce((nextVal) => fetchData(nextVal), 500), []);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
    debounceSearch(e.target.value);

  }

  return (
    <div style={{
      margin: 20
    }}>
      <input value={inputValue} onChange={onInputChange} />
      <div>
        {result.length > 0 ? (
          result.map(val => <li>{val?.name}</li>)
        ) : (
          <div>No Match Found!</div>
        )}
      </div>
    </div>
  );
}

export default App;