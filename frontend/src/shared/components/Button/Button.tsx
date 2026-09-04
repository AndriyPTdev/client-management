import { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.scss";



interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    chilfren: ReactNode,
    variant?: 'primary' | 'secondary'
}


export const Button = ({
    children,
    variant = "primary",
    className = "",
    ...props
} : ButtonProps) => {
    return (
        <button 
            className={`${styles.button} ${styles[variant]} ${className}`} 
            {...props}
        >
            {children}
        </button>
    )
}