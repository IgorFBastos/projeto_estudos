/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'

import Card from './Card'
import { useEffect, useState } from 'react'
import GameTools from './GameTools'


const GameBoard = props => {

  const [cards, setCards] = useState([]);

  useEffect( () => {
    console.log("primeira impressão Cards: ", GameTools.Cards);
    GameTools.createCards();
    GameTools.shuffleCards();
    console.log("segunda impressão Cards: ", GameTools.Cards);
    setCards(GameTools.Cards);
  },[])

  const handlePlayed = (e) => {
    // Pego o valor de ID do elemento clicado
    let CardID;
    // Verifica se o elemento clicado é uma tag <p>
      if (e.target.tagName.toLowerCase() === 'p') {
        CardID = e.target.parentElement.parentElement.id;
      } else {
        CardID = e.target.parentElement.id;
      }
      // Encotra a carta correspondente dentro do Game
      const Card = GameTools.Cards.filter(card => card.CardID === CardID)[0];
      // Seta o par de Cartas e verifica se Ambas são iguais ou diferentes
      if(!GameTools.GameBlockPlayed) {
        console.log("entrou")
        if(GameTools.setPairCards(Card)) {
          if(!GameTools.checkPlayed()) {
            console.log("Cartas Diferentes");
            let firstCardID = GameTools.setFirstCard.CardID
            let secundCardID = GameTools.setSecundCard.CardID
            let FirstCardDOM = document.getElementById(firstCardID).children;
            let SecundCardDOM = document.getElementById(secundCardID).children;
            setTimeout(() => {
              FirstCardDOM[0].classList.remove('flip');
              FirstCardDOM[1].classList.add('flip');
              SecundCardDOM[0].classList.remove('flip');
              SecundCardDOM[1].classList.add('flip');
              GameTools.GameBlockPlayed = false;
            }, 1000);
          
            GameTools.setFirstCard = null;
            GameTools.setSecundCard = null;

          } else {
            console.log("Cartas Iguais")

            GameTools.setFirstCard.flipped = true;
            GameTools.setSecundCard.flipped = true;
            GameTools.setFirstCard = null;
            GameTools.setSecundCard = null;
            GameTools.GameBlockPlayed = false;

            console.log(GameTools.Cards);
          }
        }
      }
  }


  return (
    <div className='gameboard-container'>
      {cards.map((card, key) => {
        return <Card 
                  tech={card.CardName} 
                  key={key} 
                  cardID={card.CardID}
                  handlePlayed={handlePlayed}
                  ></Card>
      }
      )}
    </div>
  )
}

export default GameBoard
