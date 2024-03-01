import { ImSpinner2 } from "react-icons/im";
import styles from "./styles.module.css";

export function LoadingButton() {
   return (
      <div className={styles.div_spinner}>
         <ImSpinner2 size={22} />
      </div>
   );
}
