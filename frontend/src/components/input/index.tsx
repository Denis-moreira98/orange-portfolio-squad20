import { InputHTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   icon?: ReactNode;
   label?: string;
   className?: string;
}

export function Input({ label, ...props }: InputProps) {
   return (
      <div className={styles.container}>
         <label htmlFor="input">{label}</label>
         <input {...props} id="input" />
      </div>
   );
}
