import { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

import { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   label?: string;
   name: string;
   register: UseFormRegister<any>;
   type: string;
   error?: string;
   rules?: RegisterOptions;
}

export function Input({
   label,
   name,
   register,
   type,
   error,
   rules,
}: InputProps) {
   return (
      <>
         <div className={styles.container}>
            <input
               placeholder=""
               id={name}
               className={styles.form__input}
               {...register(name, rules)}
               type={type}
            />
            <label htmlFor={name} className={styles.form__label}>
               {label}
            </label>
            {error && (
               <p
                  style={{
                     color: "#ff4433",
                     fontSize: "14px",
                     marginTop: "1px",
                     marginLeft: "5px",
                     fontWeight: "500",
                  }}
               >
                  {error}
               </p>
            )}
         </div>
      </>
   );
}
