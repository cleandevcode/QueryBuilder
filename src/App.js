import React, {Component} from 'react';
import './App.css';
// import QueryBuilder from 'react-querybuilder';
import TwoWayQuerybuilder from 'react-two-way-querybuilder';
import { isTSParameterProperty } from '@babel/types';
const fields = [
  { name: 'gender', operators: 'all', label: 'Gênero', input: {
    type: 'select',
    options: [
      {value: 'man', name: 'Homem'},
      {value: 'woman', name: 'Mulher'},
    ]
  }},
  { name: 'haircolor', operators: 'all', label: 'Cor cabelo', input: {
    type: 'select',
    options: [
      {value: 'light_blonde', name: 'Loiro claríssimo'},
      {value: 'light_blond', name: 'Loiro claro'},
      {value: 'dark_blond', name: 'Loiro escuro'},
      {value: 'light_brown', name: 'Castanho Claro'},
      {value: 'red_head', name: 'Ruivo'},
      {value: 'reddish_brown', name: 'Marrom'},
      {value: 'dark_brown', name: 'Avermelhado'},
      {value: 'black', name: 'Castanho escuro'},
      {value: 'grey', name: 'Preto'},
      {value: 'white', name: 'Branco'},
    ]
  } },
  { name: 'hairlength', operators: 'all', label: 'Comprimento cabelo', input: {
    type: 'select',
    options: [
      {value: '0', name: '0'},
      {value: '3', name: '3'},
      {value: '5', name: '5'},
      {value: '10', name: '10'},
      {value: '15', name: '15'},
      {value: '20', name: '20'},
      {value: '30', name: '30'},
      {value: '40', name: '40'},
      {value: '50', name: '50'},
      {value: '60', name: '60'},
      {value: '70', name: '70'},
      {value: '80', name: '80'},
      {value: '100', name: '100'},
    ]
  } },
  { name: 'frequency', operators: 'all', label: 'Frequência visita dias', input: {
    type: 'select',
    options: [
      {value: '15', name: '15'},
      {value: '20', name: '20'},
      {value: '30', name: '30'},
      {value: '45', name: '45'},
      {value: '60', name: '60'},
      {value: '90', name: '90'},
    ]
  } },
  { name: 'natural', operators: 'all', label: 'Natural', input: {
    type: 'select',
    options: [
      {value: 'yes', name: 'Sim'},
      {value: 'no', name: 'Não'},
    ]
  } },
  { name: 'baldness', operators: 'all', label: 'Calvície', input: {
    type: 'select',
    options: [
      {value: 'not', name: 'Não'},
      {value: 'moderate', name: 'Moderada'},
      {value: 'severe', name: 'Severa'},
      {value: 'total', name: 'Total'},
    ]
  } },
  { name: 'bytheface', operators: 'all', label: 'Pelos rosto', input: {
    type: 'select',
    options: [
      {value: 'not', name: 'Não'},
      {value: 'moustache', name: 'Bigode'},
      {value: 'beard', name: 'Barba'},
      {value: 'goatee', name: 'Cavanhaque'},
      {value: 'porkchop', name: 'Costeleta'},
    ]
  } },
];

const buttonsText = {
  addRule: '+condição',
  addGroup: '+grupo',
  clear: 'claro',
  delete: 'excluir'
}

export class App extends Component {
  constructor(props) {
    super(props);
  }
  logQuery(query) {
    console.log(query.data);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Criador de consultas Vitual
          </p>
        </header>
        <div className="App-container">
          <TwoWayQuerybuilder fields={fields} buttonsText={buttonsText} onChange ={this.logQuery} />
        </div>
      </div>
    )
  }
}

export default App;
