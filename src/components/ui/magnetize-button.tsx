"use client" 

import * as React from "react"

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Magnet } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

interface MagnetizeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    particleCount?: number;
    attractRadius?: number;
    particleClassName?: string;
}

interface Particle {
    id: number;
    x: number;
    y: number;
}

function MagnetizeButton({
    className,
    particleCount = 12,
    attractRadius = 50,
    children,
    particleClassName,
    ...props
}: MagnetizeButtonProps) {
    const [isAttracting, setIsAttracting] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const particlesControl = useAnimation();

    useEffect(() => {
        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            x: Math.random() * (attractRadius * 2) - attractRadius,
            y: Math.random() * (attractRadius * 2) - attractRadius,
        }));
        setParticles(newParticles);
    }, [particleCount, attractRadius]);

    const handleInteractionStart = useCallback(async () => {
        setIsAttracting(true);
        await particlesControl.start({
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
            },
        });
    }, [particlesControl]);

    const handleInteractionEnd = useCallback(async () => {
        setIsAttracting(false);
        await particlesControl.start((i) => ({
            x: particles[i]?.x ?? 0,
            y: particles[i]?.y ?? 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        }));
    }, [particlesControl, particles]);

    return (
        <Button
            className={cn(
                "min-w-40 relative touch-none select-none overflow-visible",
                "bg-[#0f1424]/90 hover:bg-[#161c32]",
                "text-[#f3ecdf] hover:text-[#ffd8a8]",
                "border border-[#8791a8]/40 hover:border-[#ffd23f]",
                "transition-all duration-300",
                className
            )}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            {...props}
        >
            {particles.map((_, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    initial={{ x: particles[index]?.x ?? 0, y: particles[index]?.y ?? 0 }}
                    animate={particlesControl}
                    className={cn(
                        "absolute w-1.5 h-1.5 rounded-full pointer-events-none z-20",
                        particleClassName || "bg-[#ffd23f]",
                        "transition-opacity duration-300 shadow-[0_0_8px_rgba(255,210,63,0.6)]",
                        isAttracting ? "opacity-100 scale-125" : "opacity-40"
                    )}
                />
            ))}
            <span className="relative z-10 w-full flex items-center justify-center gap-2">
                {children ? (
                    children
                ) : (
                    <>
                        <Magnet
                            className={cn(
                                "w-4 h-4 transition-transform duration-300 text-[#ffd23f]",
                                isAttracting && "scale-110 rotate-12"
                            )}
                        />
                        <span>{isAttracting ? "Attracting" : "Hover me"}</span>
                    </>
                )}
            </span>
        </Button>
    );
}

export { MagnetizeButton }
