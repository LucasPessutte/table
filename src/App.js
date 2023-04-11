import './App.css';
import { useEffect, useState } from 'react';
import TableData from './components/Table';
import { useFetch } from './hooks/useFetch';

function App() {

  const url = "pessoas"
  const { data: infos, loading, error } = useFetch(url);

  const [data, setData] = useState(null);
  const [columns, setColumns] = useState(null);

  useEffect(() => {
    if (infos !== null) {

      setData(infos)
      if (infos[0]) {
        let columns = Object.keys(infos[0])
        columns.shift()
        setColumns(columns);
      }
    }
  }, [infos])
  return (
    <div className="App">
      <h1>Listagem de componentes</h1>
      {!loading ? (<TableData data={data} columns={columns} error={error}></TableData>) : (<div>Carregando...</div>)}
    </div>
  );
}

export default App;
