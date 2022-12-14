import React from 'react';
import TOC from './components/TOC'
import Subject from './components/Subject'
import Content from './components/Content'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mode:'read',
            subject: {title: 'WEB', sub: 'World Wide Web!'},
            welcome:{title: 'welcome', desc:'Hello, React!!'},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for information'},
                {id: 2, title: 'CSS', desc: "CSS is for design"},
                {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
            ]
        }
    }
  render() {
        console.log('App render');
        var _title, _desc = null;
        if(this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if(this.state.mode === 'read') {
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }
    return (
      <div className="App">
          {/* <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}
          <header>
              <h1><a href="/" onClick={function (e){
                  console.log(e);
                  debugger;
                  alert("hi");
                 }
              }>{this.state.subject.title}</a></h1>
              {this.state.subject.sub}
          </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} sub={_desc}></Content>
      </div>
    );
  }
}
export default App;
