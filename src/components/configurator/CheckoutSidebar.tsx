"use client";

import React from 'react';
import { ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import { useConfiguratorStore } from '@/store/configuratorStore';
import { products } from '@/data/products';

export default function CheckoutSidebar() {
    const furniture = useConfiguratorStore((state) => state.furniture);

    // Group items by type to calculate quantities
    const groupedItems = furniture.reduce((acc, item) => {
        const product = products.find(p => p.type === item.type);
        if (!product) return acc;

        if (!acc[item.type]) {
            acc[item.type] = {
                ...product,
                quantity: 0,
                totalPrice: 0
            };
        }
        acc[item.type].quantity += 1;
        acc[item.type].totalPrice += product.price;
        return acc;
    }, {} as Record<string, typeof products[0] & { quantity: number; totalPrice: number }>);

    const cartItems = Object.values(groupedItems);

    const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
    const vat = subtotal * 0.21; // 21% VAT
    const total = subtotal + vat;

    return (
        <aside className="w-80 h-full flex flex-col border-l border-foreground/10 bg-background z-20">
            <div className="p-4 border-b border-foreground/10 flex items-center justify-between">
                <h2 className="text-lg font-bold text-foreground">Summary</h2>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <ShoppingCart className="w-4 h-4" />
                    <span>{furniture.length} items</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {cartItems.length === 0 ? (
                    <div className="text-center text-foreground/40 py-8">
                        Your cart is empty
                    </div>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-foreground/5 border border-foreground/10">
                            <div>
                                <div className="font-medium text-foreground">{item.name}</div>
                                <div className="text-xs text-foreground/60">
                                    {item.quantity} x €{item.price}
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-foreground">€{item.totalPrice}</span>
                                {/* Remove button logic would be complex with grouped items, skipping for now as per plan */}
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="p-4 border-t border-foreground/10 bg-foreground/5 space-y-4">
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-foreground/60">
                        <span>Subtotal</span>
                        <span>€{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-foreground/60">
                        <span>VAT (21%)</span>
                        <span>€{vat.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-foreground pt-2 border-t border-foreground/10">
                        <span>Total</span>
                        <span>€{total.toFixed(2)}</span>
                    </div>
                </div>

                <button className="w-full py-3 bg-easyfairs-green text-easyfairs-dark font-bold rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </aside>
    );
}
