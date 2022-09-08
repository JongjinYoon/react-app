import React from 'react';

class Content extends React.Component{
    render() {
        console.log('Content render');
        return(
            <article>
                <h2>{this.props.title}</h2>
                {this.props.sub}
            </article>
        )
    }
}

export default Content;
