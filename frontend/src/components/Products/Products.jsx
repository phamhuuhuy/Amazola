
import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Product from './Product/Product'


const Products = () => {
    const array = [
        {
            _id: '1',
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: 'https://picsum.photos/200',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id: '2',
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: 'https://picsum.photos/200',
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id: '3',
            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: 'https://picsum.photos/200',
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',
        },
        {
            _id: '4',
            name: 'Nike Slim Pant',
            category: 'Pants',
            image: 'https://picsum.photos/200',
            price: 78,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            _id: '5',
            name: 'Puma Slim Pant',
            category: 'Pants',
            image: 'https://picsum.photos/200',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id: '6',
            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: 'https://picsum.photos/200',
            price: 139,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product',
        },
    ]
    return (
        <Container style={{ marginTop: "20px" }}>
            <Grid container
                spacing={4}
            >
                {array.map((item) => (
                    <Grid key={item._id} item xs={12} sm={12} md={6} lg={3}>
                        <Product product={item} />
                    </Grid>
                ))}

            </Grid>
        </Container>

    )
}

export default Products
