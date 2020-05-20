import React, { Component } from 'react'
import Axios from 'axios';

import Input from './Input/Input';

import './Messenger.css'

class Messenger extends Component {
    state = {
       postForm : {           
            Message: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Message'
                },
                value: ''
            },
            author: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'Trent', displayValue: 'Trent'},
                        {value: 'Abbey', displayValue: 'Abbey'}
                    ]
                },
                value: 'Trent',
            },
    }
}

messageWriteHandler = ( event ) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.postForm) {
        formData[formElementIdentifier] = this.state.postForm[formElementIdentifier].value;
    }

    const post = {
      Message: this.props.Message,
      author: this.props.author,
      postData: formData
    };
    Axios.post(
      "https://react-my-messageboard.firebaseio.com/Messages.json",
      post
    ).then((response) => {
      console.log("[POST]" + response);
      window.location.reload(false);
    });
  };

inputChangedHandler = (event, inputIdentifier) => {
    const updatedPostForm = {
        ...this.state.postForm
    };
    const updatedPostFormElement = {
        ...updatedPostForm[inputIdentifier]
    };
    updatedPostFormElement.value = event.target.value;
    updatedPostForm[inputIdentifier] = updatedPostFormElement;
    this.setState({postForm: updatedPostForm});
}

    render() {
        const forElementsArray = [];
        for (let key in this.state.postForm) {
            forElementsArray.push({
                id: key,
                config: this.state.postForm[key],
            });
        }
        let form = (
                <form onSubmit={this.messageWriteHandler}>
                    {forElementsArray.map(formElement => (
                        <Input
                            className='Messenger'
                            key={formElement.id} 
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value} 
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                    ))}
                    <button className='Button' onClick={this.props.messageWrite}>SEND</button>
                </form>
        )
        return (
            <div>
                {form}
            </div>
        )
    }
}



export default Messenger;