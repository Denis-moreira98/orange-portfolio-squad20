import { ReactNode } from "react";
import styles from "./styles.module.css";

interface LabelProps {
   name?: string;
   children?: ReactNode;
}
export function Label({ name, children }: LabelProps) {
   return (
      <div className={styles.label}>
         {name}
         {children}
      </div>
   );
}
