import React, { Component } from 'react';
import './App.css';
import CharacterCard from './components/Characters';
import characters from './characters.json';
import Wrapper from './components/Wrapper';
import Header from './components/Header';

class App extends Component {

  state = {
    newScore: 0,
    topScore: 0,
    cards: characters,
    unclicked: characters
}

randomize = array => {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
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
    else {
      const filterCharacters = this.state.unclicked.filter(char => char.name !== name);

      this.setState({
        newScore: this.setState.newScore ++,
        cards: characters,
        unclicked: filterCharacters
      })
    }
    this.randomize(characters);
  }
  render() {
    return (
      <Wrapper>
      {/* <Header/> */}
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
