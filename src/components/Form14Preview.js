import React from 'react';
import './Form14Preview.css';

class Form14Preview extends React.Component {

    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
        );
    }
}

export default Form14Preview;
