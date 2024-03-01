import { ImSpinner2 } from "react-icons/im";
import styles from "./style.module.css";

export function Loading() {
   return (
      <>
         <div className={styles.div_container}>
            <div className={styles.spinner}>
               <ImSpinner2 size={28} />
            </div>
         </div>
      </>
   );
}
