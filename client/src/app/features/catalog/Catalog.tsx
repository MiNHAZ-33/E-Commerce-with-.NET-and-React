import React from 'react'
import { Product } from '../../models/products'
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { ProductList } from './ProductList'

interface Props {
    products: Product[]
}

const Catalog = (props : Props ) => {
  return (
      <>
          <ProductList products={props.products} />
          <Button variant='outlined' color='primary'>Add to Cart</Button>
      </>
  )
}

export default Catalog