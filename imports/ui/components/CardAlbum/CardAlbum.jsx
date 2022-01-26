import React from 'react';

import Typography from '@mui/material/Typography';

import { cardAlbumStyle } from './CardAlbumStyle';



export function CardAlbum({ descricao, titulo }) {
  const style = cardAlbumStyle();

  return (
    <div className={ style.card }>
      <div className={ style.foto }>

      </div>

      <div className={ style.textos }>
        <Typography variant='h6'>{ titulo }</Typography>
        <Typography variant='caption'>{ descricao }</Typography>
      </div>
    </div>
  )
}