import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdBanner } from './assets/components/CreateAdBanner';
import { CreateAdPage } from './assets/components/CreateAdPage';
import { GameBanner } from './assets/components/GameBanner';
import './styles/main.css';
import logoImg from './assets/logo1.svg';
import { CreateAdModal } from './assets/components/CreateAdModal';
import axios from 'axios';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data)
    })
  },[])

  return(
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-6">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-12">
        Seu <span className='text-transparent bg-gradient bg-clip-text'>GAME</span> está aqui.
        </h1>

        <div className="grid grid-cols-6 gap-6 mt-12">
          {games.map(game => {
            return (
              <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
              />
            )
          })}
        </div>
          
        <Dialog.Root>
          <CreateAdPage/>
          <CreateAdBanner/>
          <CreateAdModal/>
        </Dialog.Root>
        
    </div>
  )
}

export default App