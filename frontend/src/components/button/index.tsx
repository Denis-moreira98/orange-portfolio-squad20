import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: string;
   color?: string;
   icon?: ReactNode;
   className?: string;
}

export function Button({ children, variant, ...props }: ButtonProps) {
   const getBackgroundColor = () => {
      switch (variant) {
         case "orange":
            return "#ff5522";
         case "gray":
            return "#DFDFDF";
         default:
            return "#015197";
      }
   };

   return (
      <>
         <button
            style={{
               backgroundColor: getBackgroundColor(),
            }}
            {...props}
            className={styles.button}
         >
            {children}
         </button>
      </>
   );
}
