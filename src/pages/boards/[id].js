import React, { useEffect ,useState} from 'react';
import App from '../../components/App';
import ReduxWrapper from "../../redux"

const Board = ({ id }) => {
  const [project, setProject] = useState(false);
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id }),
    };
    fetch('/api/board', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.result.length) {
          console.log(data.result[0], 'data.result[0]');
          setProject(data.result[0])
        }
      });
  }, []);
  return <ReduxWrapper><App project={project}/></ReduxWrapper>;
};

export default Board;
