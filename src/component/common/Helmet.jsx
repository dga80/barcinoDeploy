import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Bringing the Flavors of Spain to Your Doorstep </title>
                    <meta name="description" content="Helmet application" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
