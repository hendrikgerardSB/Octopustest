import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function Card({ children, className = '', hoverEffect = false, ...props }: CardProps) {
    return (
        <div
            className={`
                bg-white dark:bg-white/5 rounded-2xl p-6 border border-foreground/10 shadow-sm
                ${hoverEffect ? 'hover:shadow-md transition-all duration-300 hover:scale-[1.01] cursor-pointer' : ''}
                ${className}
            `}
            {...props}
        >
            {children}
        </div>
    );
}
