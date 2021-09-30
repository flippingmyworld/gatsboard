import React, { useEffect } from 'react';
import App from '../app';
import { connect } from 'react-redux';
import { loadProject } from '../../redux/actions/settings';
const Board = ({ id, dispatch }) => {
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
          dispatch(loadProject(data.result[0]));
        }
      });
  }, []);
  return <App />;
};

export default connect()(Board);
