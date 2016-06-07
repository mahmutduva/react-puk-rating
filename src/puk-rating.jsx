import React from 'react';


class PukRating extends React.Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }


    render() {
        return (
            <span>
                <div onClick={this._handleClick}>Hello</div>
                <div>Hello World</div>
                <div>Hello Human</div>
            </span>

        )
    }

    _handleClick() {
        console.log(this);
    }
}

export default PukRating;
