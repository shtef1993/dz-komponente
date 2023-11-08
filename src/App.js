// App.js
import React, { Component } from 'react';
import FunctionComponent1 from './FunctionComponent1';
import ClassComponent2 from './ClassComponent2';
import FunctionComponentWithChildren from './FunctionComponentWithChildren';

class App extends Component {
  state = {
    korisnici: [
      { ime: 'Korisnik1', godine: 25 },
      { ime: 'Korisnik2', godine: 30 },
      { ime: 'Korisnik3', godine: 35 },
    ],
  };

  render() {
    return (
      <div>
        <ClassComponent2 ime={this.state.korisnici[0].ime} godine={this.state.korisnici[0].godine} />
        <FunctionComponentWithChildren ime={this.state.korisnici[1].ime} godine={this.state.korisnici[1].godine}>
          <p>Dodatni sadržaj koji je proslijeđen kao "children" prop.</p>
        </FunctionComponentWithChildren>
      </div>
    );
  }
}

export default App;
