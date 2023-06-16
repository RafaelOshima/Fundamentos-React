import { Header } from './components/Header';
import {Post} from './post';

import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/sidebar';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Rafael Oshima"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolorem odio? Ipsum fuga voluptatum asperiores dolore? Sunt sapiente voluptate beatae maxime repellat, excepturi obcaecati eaque optio architecto voluptates sint tempora." 
          />

          <Post
            author="Vinícius Oshima"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}


