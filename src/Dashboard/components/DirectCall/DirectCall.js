import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalVideoView from '../LocalVideoView/LocalVideoView';
import RemoteVideoView from '../RemoteVideoView/RemoteVideoView';
import CallRejectedDialog from '../CallRejectedDialog/CallRejectedDialog';
import IncomingCallDialog from '../IncomingCallDialog/IncomingCallDialog';
import CallingDialog from '../CallingDialog/CallingDialog';
import { callStates, setMessage } from '../../../store/actions/callActions';
import ConversationButtons from '../ConversationButtons/ConversationButtons';
import Messenger from '../Messenger/Messenger';

const DirectCall = (props) => {
  const {
    localStream,
    remoteStream,
    callState,
    callRejected,
    callerUsername,
    callingDialogVisible,
    message,
  } = useSelector((store) => store.call);

  const dispatch = useDispatch();

  const setMessageHandler = (str, boolean) => {
    dispatch(setMessage(str, boolean));
  };

  return (
    <>
      <LocalVideoView localStream={localStream} />
      {remoteStream && callState === callStates.CALL_IN_PROGRESS && (
        <RemoteVideoView remoteStream={remoteStream} />
      )}
      {callRejected.rejected && (
        <CallRejectedDialog
          reason={callRejected.reason}
          hideCallRejectedDialog={dispatch}
        />
      )}
      {callState === callStates.CALL_REQUESTED && (
        <IncomingCallDialog callerUsername={callerUsername} />
      )}
      {callingDialogVisible && <CallingDialog />}
      {remoteStream && callState === callStates.CALL_IN_PROGRESS && (
        <ConversationButtons />
      )}
      {remoteStream && callState === callStates.CALL_IN_PROGRESS && (
        <Messenger message={message} setDirectCallMessage={setMessageHandler} />
      )}
    </>
  );
};

// function mapStoreStateToProps({ call }) {
//   return {
//     ...call,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     hideCallRejectedDialog: (callRejectedDetails) =>
//       dispatch(setCallRejected(callRejectedDetails)),
//     setCameraEnabled: (enabled) => dispatch(setLocalCameraEnabled(enabled)),
//     setMicrophoneEnabled: (enabled) =>
//       dispatch(setLocalMicrophoneEnabled(enabled)),
//     setDirectCallMessage: (received, content) =>
//       dispatch(setMessage(received, content)),
//   };
// }

export default DirectCall;
