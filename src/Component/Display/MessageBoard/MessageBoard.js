import React, { Component } from "react";
import Axios from "axios";

import Message from "./Message/Message";
import Messenger from "./Messenger/Messenger";

import "./MessageBoard.css";

class MessageBoard extends Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    Axios.get(
      "https://react-my-messageboard.firebaseio.com/Messages.json"
    ).then(response => {
        const fetchedMessages=[];

        for (let key in response.data) {
            fetchedMessages.unshift({
                ...response.data[key],
                id: key
            });
        }
    //   console.log("[MB GET]" + response.data);
     
      this.setState({ messages: fetchedMessages });
      console.log("[MB STATE]" + JSON.stringify(this.state.messages));
    });
  }

  render() {
      return (
        <div>  
            <div className='Messages'>            
                {this.state.messages.map(message => (
                    <Message 
                        key={message.id}
                        author={message.postData.author}
                        message={message.postData.Message} />
                ))}
            </div>
            <div className='Form'>
                <Messenger />           
            </div>
        </div>
      );
    };
};
       
export default MessageBoard;
