import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import CheckoutPage from './checkout.component'


const GET_CART_ITEMS_AND_TOTAL = gql`
    {
        total @client
        cartItems @client
    }
`
const CheckoutPageContainer = () => (
    <Query query={GET_CART_ITEMS_AND_TOTAL}>
        {
            ({ data: { cartItems, total } }) => (
                <CheckoutPage total={total} cartItems={cartItems} />    
            ) 
        }   
    </Query>
)

export default CheckoutPageContainer