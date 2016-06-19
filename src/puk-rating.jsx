import React from 'react';

class PukRating extends React.Component {


    static defaultProps = {
        pukCount: 1,
        pukModel: 0
    };



    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);


        this.state = {
            pukItem: this.getPuk()
        }
    }


    render() {
        var pukList = [];
        for (var i = 0; i < this.state.pukItem; i++) {
            pukList.push(<li>Item</li>)
        }
        return (
            <ul>
                {pukList}
                <div onClick={this._handleClick}>Button</div>
            </ul>
        )
    }

    getPuk() {
        this.setState({count: this.state.count + 1})
    }
}

export default PukRating;
