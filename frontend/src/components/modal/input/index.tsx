import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

import styles from "./styles.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function InputModal({ ...props }: InputProps) {
   return <input className={styles.input} {...props}></input>;
}

export function TextArea({ ...props }: TextAreaProps) {
   return <textarea className={styles.input} {...props}></textarea>;
}
