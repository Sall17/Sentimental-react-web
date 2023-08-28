import React, { useState } from 'react';
import './Chat.css';
import constantData from '../Constants';
import AudioPlayer from '../Components/Audio';
import audioFile1 from '../audios/audio_1.ogg';
import audioFile2 from '../audios/audio_2.ogg';
const { row1Data1, row2Data1, row1Data2, row2Data2, messageData1, messageData2 } = constantData();

function Chat() {

  const [currentRows, setCurrentRows] = useState('row11');
  const [currentMessages, setCurrentMessages] = useState(messageData1);

  const handleDisplayChat1 = () => {
    setCurrentRows('row11');
    setCurrentMessages(messageData1);
  };

  const handleDisplayChat2 = () => {
    setCurrentRows('row21');
    setCurrentMessages(messageData2);
  };

  let row1Data;
  let row2Data;
  let messageData;
  let audioFile;

  if (currentRows === 'row11' || currentMessages === messageData1) {
    row1Data = row1Data1;
    row2Data = row2Data1;
    messageData = messageData1;
    audioFile = audioFile1;
  } else if (currentRows === 'row21' || currentMessages === messageData2) {
    row1Data = row1Data2;
    row2Data = row2Data2;
    messageData = messageData2;
    audioFile = audioFile2;
  }

  return (
    <div>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <div className="conv-container-wrapper">
        <div className='conv-container'>
          <div className='chatBox'>
            <div className="audio-container">
            <AudioPlayer key={audioFile} audioFile={audioFile} />
            </div>
            {messageData.map((message, index) => (
              <div className="message-container" key={index}>
                <div className={`message ${message.sender === 'CR' ? 'CR_message' : 'AG_message'}`}>
                  <p>{message.text}<br /><span>{message.timestamp}</span></p>
                </div>
                <div className={`mssg-state ${message.sender === 'CR' ? 'CR_message' : 'AG_message'}`} style={{ backgroundColor: message.color }} />
              </div>
            ))}
          </div>
        </div>
        <div className='chats-list'>
          <div className='chats-list-container'>
            <h2>Conversations List</h2>
            <ul>
              <li onClick={handleDisplayChat1}><span>1</span>Call [01122780877]</li>
              <li onClick={handleDisplayChat2}><span>2</span>Call [01153248888]</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='conv-analysis'>
        <table>
          <tbody>
            <tr>
              {row1Data.map((item, index) => (
                <td key={index}>
                  <span>{item.text}</span>
                  <div className={`w3-light-grey w3-round-xlarge ${item.color}`}>
                    <div className={`w3-container ${item.color} w3-round-xlarge`} style={{ width: item.percentage }}>{item.percentage}</div>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              {row2Data.map((item, index) => (
                <td key={index}>
                  <span>{item.text}</span>
                  <div className={`w3-light-grey w3-round-xlarge ${item.color}`}>
                    <div className={`w3-container ${item.color} w3-round-xlarge`} style={{ width: item.percentage }}>{item.percentage}</div>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Chat;