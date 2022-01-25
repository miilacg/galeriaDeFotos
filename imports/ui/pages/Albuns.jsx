import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import { Header } from '../components/Header/Header';


export function Albuns() {
  const user = useTracker(() => Meteor.user());

  return (
    <div>
      { user ? (
        <Header page='album' user={ user }/>
      ) : (
        <h1>Carregando...</h1>
      )}      
    </div>
  )
}