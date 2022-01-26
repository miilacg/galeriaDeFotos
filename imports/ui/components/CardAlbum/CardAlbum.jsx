import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Meteor } from 'meteor/meteor';

import Typography from '@mui/material/Typography';

import { cardAlbumStyle } from './CardAlbumStyle';



export function CardAlbum() {
  const style = cardAlbumStyle();

  return (
    <div className={ style.card }>
      <div className={ style.foto }>

      </div>

      <div className={ style.textos }>
        <Typography variant='h6'>Álbum 1</Typography>
        <Typography variant='caption'>Descrição álbum 1</Typography>
      </div>
    </div>
  )
}