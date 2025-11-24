"use client";

import React from 'react';
import { ShoppingCart, Trash2, ArrowRight } from 'lucide-react';

// Mock selected items for now (will connect to store later)
const MOCK_SELECTED_ITEMS = [
    { id: '1', name: 'Modern Chair', price: 45, quantity: 2 },
    { id: '2', name: 'Round Table', price: 120, quantity: 1 },
    { id: '3', name: 'Spotlight', price: 30, quantity: 4 },
];

export default function CheckoutSidebar() {
    const subtotal = MOCK_SELECTED_ITEMS.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const vat = subtotal * 0.21; // 21% VAT
    const total = subtotal + vat;

    return (
        <aside className="w-80 h-full flex flex-col border-l border-foreground/10 bg-background z-20">
            <div className="p-4 border-b border-foreground/10 flex items-center justify-between">
                <h2 className="text-lg font-bold text-foreground">Summary</h2>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <ShoppingCart className="w-4 h-4" />
                    <span>{MOCK_SELECTED_ITEMS.length} items</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {MOCK_SELECTED_ITEMS.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-foreground/5 border border-foreground/10">
                        <div>
                            <div className="font-medium text-foreground">{item.name}</div>
                            <div className="text-xs text-foreground/60">
                                {item.quantity} x €{item.price}
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-foreground">€{item.price * item.quantity}</span>
                            <button className="text-red-400 hover:text-red-300 transition-colors">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
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
