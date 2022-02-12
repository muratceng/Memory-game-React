import {useEffect} from 'react'

import {useSelector, useDispatch } from 'react-redux';
import {initialcards} from '../../redux/Game/gameSlice';


function Game() {
    const cards = useSelector((state)=> state.game.cards);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(initialcards());  
    }, [])
   
   
  return (
    <div>
        {cards.map((card)=><div key={card.id}>
            <img src={card.src} alt='card'/>
        </div>)}
    </div>
  )
}

export default Game