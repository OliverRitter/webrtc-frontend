import React from 'react';
import {
  MdCallEnd,
  MdMic,
  MdMicOff,
  MdVideocam,
  MdVideocamOff,
  MdVideoLabel,
  MdCamera,
} from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';

import ConversationButton from './ConversationButton';
import {
  switchForScreenSharingStream,
  hangUp,
} from '../../../utils/webRTC/webRTCHandler';

import {
  setLocalCameraEnabled,
  setLocalMicrophoneEnabled,
} from '../../../store/actions/callActions';

const styles = {
  buttonContainer: {
    display: 'flex',
    position: 'absolute',
    bottom: '22%',
    left: '35%',
  },
  icon: {
    width: '25px',
    height: '25px',
    fill: '#e6e5e8',
  },
};

const ConversationButtons = (props) => {
  const dispatch = useDispatch();
  const {
    localMicrophoneEnabled,
    localStream,
    localCameraEnabled,
    groupCallActive,
    screenSharingActive,
  } = useSelector((store) => store.call);

  const handleMicButtonPressed = () => {
    const micEnabled = localMicrophoneEnabled;
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    dispatch(setLocalMicrophoneEnabled(!micEnabled));
  };

  const handleCameraButtonPressed = () => {
    const cameraEnabled = localCameraEnabled;
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    dispatch(setLocalCameraEnabled(!cameraEnabled));
  };

  const handleScreenSharingButtonPressed = () => {
    switchForScreenSharingStream();
  };

  const handleHangUpButtonPressed = () => {
    hangUp();
  };

  return (
    <div style={styles.buttonContainer}>
      <ConversationButton onClickHandler={handleMicButtonPressed}>
        {localMicrophoneEnabled ? (
          <MdMic style={styles.icon} />
        ) : (
          <MdMicOff style={styles.icon} />
        )}
      </ConversationButton>
      {!groupCallActive && (
        <ConversationButton onClickHandler={handleHangUpButtonPressed}>
          <MdCallEnd style={styles.icon} />
        </ConversationButton>
      )}
      <ConversationButton onClickHandler={handleCameraButtonPressed}>
        {localCameraEnabled ? (
          <MdVideocam style={styles.icon} />
        ) : (
          <MdVideocamOff style={styles.icon} />
        )}
      </ConversationButton>
      {!groupCallActive && (
        <ConversationButton onClickHandler={handleScreenSharingButtonPressed}>
          {screenSharingActive ? (
            <MdCamera style={styles.icon} />
          ) : (
            <MdVideoLabel style={styles.icon} />
          )}
        </ConversationButton>
      )}
    </div>
  );
};

export default ConversationButtons;
