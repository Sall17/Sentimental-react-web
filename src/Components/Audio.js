import React, { useState, useEffect } from 'react';

const AudioPlayer = ({ audioFile }) => {
  const [audioSource, setAudioSource] = useState(audioFile);

  useEffect(() => {
    setAudioSource(audioFile);
  }, [audioFile]);

  return (
    <div>
      <audio controls>
        <source src={audioSource} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;