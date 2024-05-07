import React, { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App() {
  const [name, setName]= useState('midudev');

  return (
    <section className="App">
      <TwitterFollowCard isFollowing userName={name}>
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} userName="MarcoVillegas89">
        Marco Villegas
      </TwitterFollowCard>

      <button onClick={() => setName('pedromichel')}>
        Cambio nombre
      </button>
    </section>
  );
}