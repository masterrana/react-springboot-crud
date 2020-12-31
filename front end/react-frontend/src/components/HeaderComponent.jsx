import React, { Component } from 'react'

 class HeaderComponent extends Component {

    constructor(props){
        super(props)

        this.state={

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav  className="navbar navbar-dark bg-dark">
                        <div> <a className="navbar-brand" href="http://masterrana.github.io/">Employee Management App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}
export default HeaderComponent
