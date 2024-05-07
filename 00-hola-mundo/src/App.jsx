import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users =[
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
  },
  {
    userName: 'MarcoVillegas89',
    name: 'Marco Villegas',
    isFollowing: false
  }
]

export function App() {
  return (
    <section className="App">
      {
      users.map(({userName, name, isFollowing}) =>(
        <TwitterFollowCard
        key={userName}
        userName ={userName} 
        initialFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))
    }
    </section>
  );
}