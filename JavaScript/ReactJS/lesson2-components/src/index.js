import { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css'
import Card from './Card';


class App extends Component {
  render() {
    return <>
    <Card title="Niko Miko"/>
    <Card title="Echo leko"/>
    <Card />
    <Card />
    <Card />
    </>
  }
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);


