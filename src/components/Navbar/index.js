import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { initialcards } from '../../redux/Game/gameSlice';


function Navbar() {
  const score = useSelector((state) => state.game.score);


  return (
    <div>
      Navbar {score}

    </div>
  )
}

export default Navbar