export interface OrderItem {
    id: string;
    product: {
        id: string;
        name: string;
        price: number;
        imageUrl: string;
        description: string;
    };
    quantity: number;
    totalPrice: number;
}