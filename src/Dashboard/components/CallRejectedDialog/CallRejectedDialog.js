import React, { useEffect } from 'react';

import { setCallRejected } from '../../../store/actions/callActions';

import './CallRejectedDialog.css';

const CallRejectedDialog = ({ reason, dispatch }) => {
  useEffect(() => {
    setTimeout(() => {
      dispatch(
        setCallRejected({
          rejected: false,
          reason: '',
        })
      );
    }, [4000]);
  }, [dispatch]);

  return (
    <div className='call_rejected_dialog background_secondary_color'>
      <span>{reason}</span>
    </div>
  );
};

export default CallRejectedDialog;
