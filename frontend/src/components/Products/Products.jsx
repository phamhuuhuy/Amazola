import { CircularProgress, Container, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import Product from './Product/Product'
import Alert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';


const Products = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)

    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <Container style={{ marginTop: "20px" }}>
            {loading ? (
                <CircularProgress color="secondary" />
            ) : error ? (
                <Alert severity="error">{error}</Alert>
            ) : (
                <Grid container
                    spacing={4}
                >
                    {products.map((item) => (
                        <Grid key={item._id} item xs={12} sm={12} md={6} lg={3}>
                            <Product product={item} />
                        </Grid>
                    ))}

                </Grid>
            )}

        </Container>

    )
}

export default Products
