import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import React from 'react'
import { Product } from '../../models/products'

interface Props{
    products: Product[]
}

export const ProductList = (props: Props) => {
  return (
    <List>
    {props.products.map((product : Product) => (
        <ListItem key={product.id}>
            <ListItemAvatar>
                <Avatar src={product.pictureUrl} />
            </ListItemAvatar>
            <ListItemText>
        {product.name} - {product.price}
            </ListItemText>
        </ListItem>
))}
  </List>
  )
}
