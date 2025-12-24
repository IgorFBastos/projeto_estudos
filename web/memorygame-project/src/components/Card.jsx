/* eslint-disable no-unused-vars */
import './Card.css'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import bootstrapImage from '../assets/images/bootstrap.png'
import cssImage from '../assets/images/css.png'
import electronImage from '../assets/images/electron.png'
import firebaseImage from '../assets/images/firebase.png'
import htmlImage from '../assets/images/html.png'
import javascriptImage from '../assets/images/javascript.png'
import jqueryImage from '../assets/images/jquery.png'
import mongoImage from '../assets/images/mongo.png'
import nodeImage from '../assets/images/node.png'
import reactImage from '../assets/images/react.png'
import GameTools from './GameTools'

const images = {
    'bootstrap.png': bootstrapImage,
    'css.png': cssImage,
    'electron.png': electronImage,
    'firebase.png': firebaseImage,
    'html.png': htmlImage,
    'javascript.png': javascriptImage,
    'jquery.png': jqueryImage,
    'mongo.png': mongoImage,
    'node.png': nodeImage,
    'react.png': reactImage
}

const Card = props => {
    const cardContainerRef = useRef(null)

    const handleflip = () => {
        if(!GameTools.GameBlockPlayed) {
            if (cardContainerRef.current) {
                const cardBack = cardContainerRef.current.querySelector('.card-back')
                const cardFront = cardContainerRef.current.querySelector('.card-front')

                cardBack.classList.add('flip')
                cardFront.classList.remove('flip')
            }
        }
    }


    return (
        <div className='card-container' id={props.cardID} ref={cardContainerRef}>
            <div className="card-back" onClick={(e) => {handleflip(); props.handlePlayed(e)}}>
                <p>&lt;/&gt;</p>
            </div>
            <div className='card-front flip'>
                <img src={images[props.tech + '.png']} alt={props.tech} />
            </div>
        </div>
    )
}

Card.propTypes = {
    tech: PropTypes.string,
    cardID: PropTypes.string,
    handlePlayed:PropTypes.func,
    
}

export default Card
