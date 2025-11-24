import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function GlassCard({ children, className = '', hoverEffect = false, ...props }: GlassCardProps) {
    return (
        <div
            className={`
                glass rounded-2xl p-6 
                ${hoverEffect ? 'hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer' : ''}
                ${className}
            `}
            {...props}
        >
            {children}
        </div>
    );
}
