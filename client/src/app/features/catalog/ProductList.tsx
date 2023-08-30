import { Grid } from '@mui/material'
import { Product } from '../../models/products'
import ProductCard from './ProductCard'

interface Props{
    products: Product[]
}

export const ProductList = (props: Props) => {
  return (
    <Grid container spacing={4}>
          {props.products.map((product: Product) => (
        <Grid  key={product.id} item xs={4}>
            <ProductCard product={product}/>
        </Grid>
))}
  </Grid>
  )
}
