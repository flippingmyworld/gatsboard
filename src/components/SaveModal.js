import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Button } from 'rebass/styled-components';
import { Input, Label } from '@rebass/forms/styled-components';
import { updateSettings } from '../redux/actions/settings';
import Icon from './ui/Icon';
import Modal from './ui/Modal';
import { navigate } from 'gatsby';
const SaveModal = ({ state, dispatch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { settings } = state;
  const saveSettings = (settingsToSave) => {
    dispatch(updateSettings(settingsToSave));
  };
  const save = () => {
    if (settings.name !== '' && state.pads.length) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      };
      fetch('/api/save', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          navigate('/board/' + data.result);
        });
    }
  };
  if (state.pads.length) {
    return (
      <>
        <Button
          pl={2}
          variant="ninja"
          onClick={() => {
            setIsOpen(true);
          }}
          width="40px"
        >
          <Icon icon="save" color="text" />
        </Button>
        <Modal
          isOpen={isOpen}
          onClickBg={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Box width={1} p={2} variant="card" sx={{ position: 'relative', zIndex: '2' }}>
            <Heading textAlign="center" pb={1}>
              Save this GatsbBoard
            </Heading>

            <Box width={1 / 1} p={2}>
              <Label htmlFor="board-name">GatsbBoard name</Label>
              <Input
                name="board-name"
                type="text"
                placeholder="My Funky GatsbBoard name"
                value={settings.name}
                onChange={(e) =>
                  saveSettings({
                    name: e.target.value,
                  })
                }
              />
            </Box>
            <Box width={1 / 1} p={2}>
              <Button opacity={settings.name !== '' ? 1 : 0.5} onClick={save} mr={1}>
                Save this board
              </Button>
            </Box>
          </Box>
        </Modal>
      </>
    );
  }
  return null;
};

const mapStateToProps = (state) => {
  return { state: state };
};
export default connect(mapStateToProps)(SaveModal);
