import React from 'react';
import { saveAs } from 'file-saver';

function Recorder() {
    
    // style for stop button
    const stopStyle = {
      color: "black",
      height: "45px",
      width: "45px",
    }

    // style for start button
    const startStyle = {
      height: "50px",
      width: "50px",
      backgroundColor: "red",
      borderRadius: "50%",
      marginRight:"2em",
      color:"white"
    }

    const MicRecorder = require('mic-recorder-to-mp3');
    const FileSaver = require('file-saver');
    // New instance
    const recorder = new MicRecorder({
        bitRate: 128
    });    

    // add function to show that recording is in progress, toggle off when stop is pressed
    function record_start() {
      // start recording
      recorder.start().then(() => {
        // something else
      }).catch((e) => {
        console.error(e);
      });
    }

    function record_stop () {
      recorder
      .stop()
      .getMp3().then(([buffer, blob]) => {
        // do what ever you want with buffer and blob
        // Example: Create a mp3 file and play
        var file = new File(buffer, 'voice-recording.mp3', {
          type: blob.type,
          lastModified: Date.now()
        });
        FileSaver.saveAs(file)       
      },
    )}


    return (
  
      <div>


        <button style = {startStyle} onClick = {record_start}>Start</button>
      
        <button style = {stopStyle} onClick = {record_stop}>Stop</button>

        {/* <button style = {stopStyle} onClick = {Play}>Play</button> */}
 
        </div>
    );
}

export default Recorder;
