import React, { useRef, useEffect } from 'react';

const styles = {
  videoContainer: {
    width: '350px',
    height: '350px',
    borderRadius: '12px',
    position: 'absolute',
    top: '2%',
    right: '20%',
    overflow: 'hidden',
  },
  videoElement: {
    width: '100%',
    height: '100%',
  },
};

const LocalVideoView = (props) => {
  const { localStream } = props;
  const localVideoRef = useRef();

  useEffect(() => {
    if (localStream) {
      const localVideo = localVideoRef.current;
      localVideo.srcObject = localStream;

      localVideo.onloadedmetadata = () => {
        localVideo.play();
      };
    }
  }, [localStream]);

  return (
    <div style={styles.videoContainer} className='background_secondary_color'>
      <video style={styles.videoElement} ref={localVideoRef} autoPlay muted />
    </div>
  );
};

export default LocalVideoView;
