import { OrderItem } from "./order-item";

export interface Order {
    id: string;
    userId: string;
    items: OrderItem[];
    datePlaced: number;
    total: number;
    status: string;
}