/* eslint-disable no-unused-vars */
import React from 'react';
import { saveAs } from 'file-saver';
import { Button } from 'react-bootstrap';
import flashing from './flashing.css';

function Recorder() {
  const MicRecorder = require('mic-recorder-to-mp3');
  const FileSaver = require('file-saver');

  const recorder = new MicRecorder({
    bitRate: 128,
  });

  // start recording function
  function record_start() {
    // toggle colour flashing
    document.querySelector('#rec').classList.add('flashing');
    recorder
      .start()
      .then(() => {})
      .catch((e) => {
        console.error(e);
      });
  }

  // stop recording function then save to client device
  function record_stop() {
    document.querySelector('#rec').classList.remove('flashing');
    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        var file = new File(buffer, 'voice-recording.mp3', {
          type: blob.type,
          lastModified: Date.now(),
        });
        FileSaver.saveAs(file);
      });
  }

  return (
    <div>
      <button id='rec' onClick={record_start}>
        Start
      </button>
      <button id='stop' onClick={record_stop}>
        <p>Stop</p>
      </button>
    </div>
  );
}

export default Recorder;
