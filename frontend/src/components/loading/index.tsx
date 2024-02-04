import { ImSpinner3 } from "react-icons/im";
import style from "./style.module.css";

export function Loading() {
   return (
      <>
         <div className={style.div_spinner}>
            <ImSpinner3 size={28} />
         </div>
      </>
   );
}
