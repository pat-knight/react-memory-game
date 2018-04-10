import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './components/Characters'
import characters from './characters.json'
import Wrapper from './components/Wrapper'

class App extends Component {

  state = {
    newScore: 0,
    topScore: 0,
    cards: characters,
    unclicked: characters
}

  isClicked = name => {
    const clickedCharacter = this.state.unclicked.find(char => char.name === name);
  
    //character not yet selected
    if(!clickedCharacter){
      this.setState({
        topScore: (this.state.newScore > this.state.topScore) ? this.state.newScore : this.state.topScore,
        newScore: 0,
        cards: characters,
        unclicked: characters

      })
    }
  }
  render() {
    return (
      <Wrapper>
        {
          this.state.cards.map(char => {
              return <CharacterCard 
                id={char.id}
                name={char.name}
                image={char.image}
                isClicked={this.isClicked} 
                newScore={this.state.newScore}
              />
          })
        }
      </Wrapper>
    );
  }
}

export default App;
