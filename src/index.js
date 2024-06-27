import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)



// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()}
//   }

//   componentDidMount() {
//     this.time_id = setInterval(() => this.tick(), 1000)
//   }

//   componentWillUnmount () {
//     clearInterval(this.time_id)
//   }

//   tick() {
//     this.setState({date: new Date()})
//   }
//   render() {
//     return(
//       <div>
//         <h1>Hello World</h1>
//         <h1>it is{this.state.date.toLocaleTimeString()}</h1>
//       </div>
//     )
//   }
// }


