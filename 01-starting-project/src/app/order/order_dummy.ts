import { Order } from "./order";

export const orders : Order[]=[
    {

        id: '1',
        userId: '1',
        items: [
            {
                id: '1',
                 product: {
                    id: '1',
                    name: 'Phone XL',
                    price: 799,
                    imageUrl: 'assets/img/phone-cover.jpg',
                    description: 'A large phone with one of the best screens'
                 },
                quantity: 1,
                totalPrice: 799
            }],
        datePlaced: 1600000000000,
        total: 799,
        status: 'Order Placed'
    },
    {

        id: '12',
        userId: '12',
        items: [
            {
                id: '1',
                 product: {
                    id: '1',
                    name: 'Phone XL',
                    price: 799,
                    imageUrl: 'assets/img/phone-cover.jpg',
                    description: 'A large phone with one of the best screens'
                 },
                quantity: 1,
                totalPrice: 800
            },
            {
                id: '2',
                 product: {
                    id: '2',
                    name: 'Samsung XL',
                    price: 799,
                    imageUrl: 'assets/img/phone-cover.jpg',
                    description: 'A large Samsung phone with one of the best screens'
                 },
                quantity: 4,
                totalPrice: 3200
            }],
        datePlaced: 1600000000000,
        total: 4000,
        status: 'Order Placed'
    }    
]