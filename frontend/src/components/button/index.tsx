import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   color?: string;
   icon?: ReactNode;
   className?: string;
}

export function Button({ children, color, className, ...props }: ButtonProps) {
   return (
      <>
         <button color={color} {...props} className={styles.button}>
            {children}
            {className}
         </button>
      </>
   );
}
