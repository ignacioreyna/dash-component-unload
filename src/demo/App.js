/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { DashComponentUnload } from '../lib';

class App extends Component {

    constructor() {
        super();
        this.state = {
            close: null
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <DashComponentUnload
                    setProps={this.setProps}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App;
