export interface Order {
    id?: number;
    userId: number;
    items: { groceryId: number; quantity: number }[];
}