import { Header } from './components/Header';
import {Post} from './post';
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      
      <Post 
        author="Rafael Oshima"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolorem odio? Ipsum fuga voluptatum asperiores dolore? Sunt sapiente voluptate beatae maxime repellat, excepturi obcaecati eaque optio architecto voluptates sint tempora." 
      />

      <Post
        author="Vinícius Oshima"
        content="Um novo post muito legal"
      />
    </div>
  )
}


