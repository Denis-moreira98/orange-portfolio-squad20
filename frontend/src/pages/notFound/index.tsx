import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function NotFound() {

   return (
      <main className={styles.container__main}>
         <p className={styles.menssage}>OPS! PÁGINA NÃO ENCONTRADA</p>
         <div className={styles.n__404}>
            <svg
               width="100%"
               height="auto"
               viewBox="0 0 636 324"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <g id="OBJECTS">
                  <g id="Group">
                     <path
                        id="Vector"
                        d="M101.3 255.2C101.3 255.2 111.1 272.6 181.8 280.5C252.5 288.4 288.2 314.9 333.1 322.8C378 330.7 433.6 278.5 481.8 286.5C530 294.4 588.2 264.2 592.8 255.2H101.3Z"
                        fill="#111133"
                     />
                     <path
                        id="Vector_1"
                        opacity="0.45"
                        d="M611.9 251.7H601.4L140.8 251.8C140.8 251.8 136.1 248.1 128.9 241.8C125.8 239.1 122.2 235.9 118.3 232.3C116.9 231 115.4 229.6 113.9 228.2C100.2 215.3 83.6 198.2 70.1 180.1C55.9 161 45.1 140.6 44.8 122.6C50.5 119.6 63.9 113.5 75 116.3C89.5 119.9 92.6 137.2 92.6 137.2C92.6 137.2 103 128.8 113.9 132.8C124.8 136.8 126.5 148.4 126.5 148.4C126.5 148.4 139.4 141.8 150.9 144.6C162.5 147.4 171.8 158.6 159.4 165.9C147.1 173.1 133.3 167.5 132.9 167.4C133.1 167.6 137.9 174.2 129.1 182.2C120.1 190.4 154.6 197.5 154.6 197.5C154.6 197.5 155.9 175.1 179 177.6C202.1 180.1 220.8 192.6 220.8 192.6C220.8 192.6 222 158.3 240.5 152C259 145.7 268.5 165.9 268.5 165.9C268.5 165.9 309.5 139.4 323.4 164.1C337.3 188.8 337.9 193.5 337.9 193.5C337.9 193.5 349.8 128.5 387 131.5C424.2 134.5 431.1 160.3 430.5 162.9C429.9 165.5 441.2 146.2 452.4 156.7C463.6 167.2 470.1 181.8 470.1 181.8L529 174.9C529 174.9 523 163.3 525.4 153.8C570.6 193.1 602.3 230.4 611.9 251.7Z"
                        fill="url(#paint1_linear)"
                     />
                     <path
                        id="Vector_2"
                        d="M431.9 83.6H257.8C279.6 83.6 283.9 75.7 296.8 71.4C297.4 71.2 298 71 298.6 70.9C310.7 67.8 320.6 74.7 328.3 74.4C336.4 74.1 345.3 65.5 354.6 62.5C357.7 61.5 361 61.8 364.3 62.6C370.8 64.1 377.6 67.4 384.5 66.1C390.5 65 391 62.5 393.4 60.8C406.6 68 419.5 75.6 431.9 83.6Z"
                        fill="url(#paint2_linear)"
                     />
                     <path
                        id="Vector_3"
                        d="M206.5 67.7H56.9C61.8 57.7 68.3 48.1 76.9 39.4C77 39.3 77.2 39.1 77.3 39C80.8 38.3 84.6 37.8 88.7 37.6C112.4 36.6 117.4 54.5 117.4 54.5C117.4 54.5 123.6 46.2 134.8 50.2C146 54.2 142.1 59.1 151 61.8C152.2 62.1 153.4 62.2 154.7 62.1C163.2 61.4 173.9 52.1 183.4 55.5C194.4 59.4 187.3 67.7 206.5 67.7Z"
                        fill="url(#paint3_linear)"
                     />
                     <path
                        id="Vector_4"
                        d="M631.8 258.5H75.5C73.6 258.5 72.1 257 72.1 255.1C72.1 253.2 73.6 251.7 75.5 251.7H631.8C633.7 251.7 635.2 253.2 635.2 255.1C635.2 257 633.7 258.5 631.8 258.5Z"
                        fill="#111133"
                     />
                     <path
                        id="Vector_5"
                        opacity="0.25"
                        d="M364.4 62.5C354.5 65 343.3 75.8 336 77.4C326.9 79.4 316.3 74.8 306 72.2C302.9 71.4 300.5 71 298.6 70.8C310.7 67.7 320.6 74.6 328.3 74.3C336.4 74 345.3 65.4 354.6 62.4C357.8 61.4 361 61.7 364.4 62.5Z"
                        fill="white"
                     />
                     <path
                        id="Vector_6"
                        opacity="0.25"
                        d="M154.7 62.1C145.8 66.8 141.6 56.2 133.9 52.7C125 48.7 118.7 61.2 116.1 59C113.5 56.9 112.3 47.6 102.2 42.8C96.5 40.1 85.4 39.5 77 39.5C77.1 39.4 77.3 39.2 77.4 39.1C80.9 38.4 84.7 37.9 88.8 37.7C112.5 36.7 117.5 54.6 117.5 54.6C117.5 54.6 123.7 46.3 134.9 50.3C146.1 54.3 142.2 59.2 151.1 61.9C152.2 62.1 153.5 62.2 154.7 62.1Z"
                        fill="white"
                     />
                     <path
                        id="Vector_7"
                        d="M394.9 40.3C394.9 40.3 457.4 96.1 482.1 88.5C507 80.9 351.2 7.20001 394.9 40.3Z"
                        fill="url(#paint4_linear)"
                     />
                     <path
                        id="Vector_8"
                        d="M35 97C35 97 13.7 134.4 50.9 173.8C59.5 182.9 60.5 199.9 43.3 200.8C26.1 201.7 -0.599994 159.8 0.300006 126.1C1.30001 92.4 40.8 77.1 35 97Z"
                        fill="url(#paint5_linear)"
                     />
                  </g>
                  <g id="Group_2">
                     <g id="Group_3">
                        <path
                           id="Vector_9"
                           d="M376.1 240.6C376.1 240.6 378.7 238.3 380.6 235.8C380.9 235.4 381.3 234.9 381.5 234.5L382.7 235.9L382.3 233.7C382.3 233.7 390.4 230.9 393.3 223.1C391.5 231.6 388.1 238 384.1 240.9C382.3 242.2 380.5 242.8 378.6 242.7C372.3 242.5 376.1 240.6 376.1 240.6Z"
                           fill="#bbee88"
                        />
                        <g id="Group_4" opacity="0.25">
                           <path
                              id="Vector_10"
                              opacity="0.25"
                              d="M393.3 223.1C392.6 225.3 391.8 227.5 390.8 229.6C389.8 231.7 388.7 233.7 387.4 235.6C386.1 237.5 384.5 239.3 382.6 240.6C380.7 242 378.3 242.7 376 242.6C375.9 242.6 375.8 242.5 375.8 242.4C375.8 242.3 375.9 242.2 376 242.2C378.3 242.4 380.5 241.7 382.4 240.4C384.3 239.1 385.9 237.4 387.2 235.5C388.6 233.6 389.7 231.6 390.7 229.5C391.7 227.5 392.5 225.3 393.3 223.1Z"
                              fill="white"
                           />
                        </g>
                     </g>
                     <g id="Group_5">
                        <path
                           id="Vector_11"
                           d="M374 241.1L368.7 241.5C372.5 238.1 371.9 234.8 371.4 233.3C371.2 232.8 371 232.4 371 232.4L373.5 232L372.1 230.1C372.1 230.1 376.6 224.9 378.3 211.1C383.6 220.4 381.5 228.8 378.7 234.3C376.6 238.6 374 241.1 374 241.1Z"
                           fill="#bbee88"
                        />
                        <g id="Group_6" opacity="0.25">
                           <path
                              id="Vector_12"
                              opacity="0.25"
                              d="M378.3 211.1C378.9 213.7 379.2 216.3 379.3 218.9C379.4 221.5 379.4 224.2 379 226.8C378.6 229.4 378 232 377 234.4C376 236.8 374.5 239.1 372.7 241.1C372.6 241.2 372.5 241.2 372.4 241.1C372.3 241 372.3 240.9 372.4 240.8C374.2 238.9 375.6 236.7 376.7 234.3C377.7 231.9 378.4 229.3 378.8 226.8C379.2 224.2 379.3 221.6 379.2 219C379.1 216.3 378.9 213.7 378.3 211.1Z"
                              fill="white"
                           />
                        </g>
                     </g>
                     <path
                        id="Vector_13"
                        d="M408.3 251.1H323L336.7 240C336.7 240 354.9 230.6 362.5 232.6C370.1 234.5 368.9 240.9 368.9 240.9C368.9 240.9 369.4 240.4 370.1 239.8C371.8 238.5 375 236.7 378.2 238.6C382.8 241.4 382.1 245 382.1 245.2C382.2 245.1 385 242.4 387.3 243.2C389.6 244.1 390.5 246.6 390.5 246.6C390.5 246.6 393.5 242.5 396 244C398.5 245.5 400 248.6 400 248.6C400 248.6 404 244.6 408.3 251.1Z"
                        fill="#006622"
                     />
                  </g>
                  <g id="Group_7">
                     <path
                        id="Vector_14"
                        d="M237.3 191.1V97.5H201.8V97.8L159 166.6L140.3 196.7L142.4 218.4H201.8V251H237.3V218.4H253V191H237.3V191.1ZM201.8 191.1H174.2L199.6 147.4L201.8 143.8V191.1Z"
                        fill="url(#paint6_linear)"
                     />

                     <path
                        id="Vector_15"
                        d="M487.5 191.1V97.5H452V97.8L390.5 196.7L392.6 218.4H452V251H487.5V218.4H503.1V191H487.5V191.1ZM452 191.1H424.4L449.8 147.4L452 143.8V191.1V191.1Z"
                        fill="url(#paint8_linear)"
                     />
                     <path
                        id="Vector_16"
                        opacity="0.25"
                        d="M230.7 97.5C225.9 103.6 209.6 101.4 206 101.8C201.8 102.2 172.9 153.1 169 159.6C166.4 163.8 161.9 165.8 159.1 166.7L201.9 97.9V97.6H230.7V97.5Z"
                        fill="white"
                     />
                     <path
                        id="Vector_17"
                        opacity="0.25"
                        d="M487.5 97.5V168.3C478.4 160.7 483.4 104.9 482 103.1C480.5 101.1 461.5 102.4 458 101.3C455.7 100.6 453.8 98.6 452.8 97.4H487.5V97.5Z"
                        fill="white"
                     />
                  </g>
                  <g className={styles.zero}>
                     <path
                        id="Vector_18"
                        d="M361.2 110.3C351.9 99 338.7 93.3 321.6 93.3C304.6 93.3 291.4 98.9 282.1 110.2C272.8 121.5 268.1 137.4 268.1 158.2V186.3C268.1 206.9 272.8 222.9 282.1 234.2C291.5 245.5 304.7 251.2 321.8 251.2C338.7 251.2 351.9 245.6 361.2 234.3C370.5 223 375.2 207.1 375.2 186.3V158.3C375.2 137.6 370.5 121.6 361.2 110.3ZM303.8 151.3C304 141 305.5 133.4 308.3 128.3C311.1 123.2 315.5 120.7 321.6 120.7C327.9 120.7 332.4 123.4 335.3 128.9C338.2 134.4 339.6 142.6 339.6 153.6V191.6C339.5 202.6 338.1 210.7 335.2 215.9C332.3 221.1 327.8 223.7 321.8 223.7C315.5 223.7 311 221 308.1 215.7C305.4 210.7 303.9 202.9 303.8 192.5C303.8 191.9 303.8 191.2 303.8 190.6V151.3V151.3Z"
                        fill="url(#paint7_linear)"
                     />
                     <path
                        id="Vector_19"
                        d="M291.5 110.1C291.5 110.1 279.6 101.5 278.3 88.1C286.9 90.5 291.5 101 291.5 101C291.5 101 289.3 91.4 291.5 84.9C297.8 94.1 296.1 101.6 291.5 110.1Z"
                        fill="url(#paint9_linear)"
                     />
                  </g>
                  <g id="Group_8">
                     <path
                        id="Vector_20"
                        d="M523.5 247.4C523.5 247.4 521.5 234.8 531.8 226.1C531.7 236.3 528.9 245 523.5 247.4Z"
                        stroke="#1F3247"
                        stroke-width="0.9271"
                        stroke-miterlimit="10"
                     />
                     <g id="Group_9">
                        <g id="Group_10" opacity="0.25">
                           <path
                              id="Vector_22"
                              opacity="0.25"
                              d="M429.6 222C432.1 222.6 434.6 223.5 437 224.6C439.4 225.7 441.7 226.9 443.9 228.3C446.1 229.8 448.1 231.5 449.9 233.5C451.6 235.5 453 237.8 454 240.3C454 240.4 454 240.6 453.9 240.6C453.8 240.6 453.6 240.6 453.6 240.5C452.7 238.1 451.4 235.8 449.7 233.8C448 231.8 446 230.1 443.9 228.6C441.7 227.1 439.4 225.9 437 224.8C434.6 223.6 432.1 222.6 429.6 222Z"
                              fill="white"
                           />
                        </g>
                     </g>
                     <g id="Group_11">
                        <path
                           id="Vector_23"
                           d="M531.8 215.8C512.6 231.6 507.7 239.4 507.7 239.4L504.3 237.9C504.3 237.9 504.3 238 504.3 238.2C504.3 239.1 504.4 241.5 504.3 242.4C504.2 243.1 497.4 246.8 493.5 248.8C491.9 249.6 490.9 250.2 490.9 250.2L487.7 247L488 246.4L489.7 243.2C489.7 243.2 494.1 236.9 501.6 230.3C508.9 223.7 519.4 216.9 531.8 215.8Z"
                           fill="#bbee88"
                        />
                        <g id="Group_12" opacity="0.25">
                           <path
                              id="Vector_24"
                              opacity="0.25"
                              d="M489.6 248.9C492.2 245.1 495.1 241.5 498.1 238.1C501.1 234.7 504.4 231.4 507.8 228.4C511.3 225.4 515 222.7 519 220.4C523 218.2 527.3 216.5 531.8 215.7C527.3 216.5 523 218.2 519 220.5C515 222.8 511.4 225.5 507.9 228.5C504.5 231.5 501.3 234.8 498.3 238.2C495.3 241.6 492.5 245.2 489.9 249C489.8 249.1 489.7 249.1 489.6 249.1C489.5 249.2 489.5 249 489.6 248.9Z"
                              fill="white"
                           />
                        </g>
                     </g>
                     <g id="Group_12">
                        <path
                           id="Vector_25"
                           d="M519.7 205.4C506 216.8 499.7 226.4 497.1 231.2C495.9 233.4 495.5 234.7 495.5 234.7L492.5 233.6L493.7 236.3L489.3 245.1L487.4 249V233.6C488 232.5 488.8 231 489.8 229.3C491.7 226.1 494.4 222.2 497.9 218.4C499.5 216.7 501.2 215 503 213.4C507.8 209.6 513.3 206.5 519.7 205.4Z"
                           fill="#bbee88"
                        />
                        <g id="Group_14" opacity="0.25">
                           <path
                              id="Vector_26"
                              opacity="0.25"
                              d="M487.3 239.8C488.7 236 490.6 232.4 492.7 228.9C494.8 225.4 497.3 222.2 500 219.2C502.7 216.2 505.8 213.5 509.1 211.1L511.6 209.4L514.3 207.9C514.7 207.7 515.2 207.4 515.6 207.2L517 206.6L519.8 205.4L517 206.6L515.6 207.2C515.2 207.4 514.7 207.7 514.3 207.9L511.7 209.4L509.2 211.1C505.9 213.5 502.9 216.2 500.2 219.2C497.5 222.2 495.1 225.5 493.1 229C491 232.5 489.2 236.1 487.9 239.9C487.9 240 487.7 240.1 487.6 240C487.3 240.1 487.3 239.9 487.3 239.8Z"
                              fill="white"
                           />
                        </g>
                     </g>
                     <path
                        id="Vector_27"
                        d="M537.2 251.1H487.5V244.1C487.5 244.1 488.2 242.4 490.2 241.4C490.8 241.1 491.6 240.8 492.4 240.7C496.1 240.2 497.4 243.3 497.4 243.3C497.4 243.3 498.3 240.6 502 240.3C505.6 240 507.8 245.6 507.9 246C507.9 245.7 507.6 242.6 510.4 242.4C513.3 242.2 513.3 246 513.3 246C513.3 246 515.6 243.5 518.6 243.6C521.6 243.8 522.2 246.7 522.2 246.7C522.2 246.7 523.9 244.2 527.5 245.1C531.2 245.9 531.7 251.1 537.2 251.1Z"
                        fill="#006622"
                     />
                  </g>
                  <g id="Group_15">
                     <path
                        id="Vector_28"
                        d="M174.2 250.2C174.2 250.2 161.8 247.6 154.1 238.3C167.3 239.7 173 244.4 174.2 250.2Z"
                        stroke="#1F3247"
                        stroke-width="0.9271"
                        stroke-miterlimit="10"
                     />
                     <g id="Group_16">
                        <path
                           id="Vector_29"
                           d="M215.5 194.6C214.4 219.4 217 228.3 217 228.3L213.6 229.9C213.6 229.9 213.7 230 213.8 230.1C214.5 230.7 216.3 232.3 216.9 232.9C217.4 233.4 215.6 241 214.5 245.2C214.1 246.9 213.8 248.1 213.8 248.1L209.3 248.3L209.1 247.6L207.8 244.2C207.8 244.2 206 236.7 206.1 226.8C206.1 216.9 208.1 204.5 215.5 194.6Z"
                           fill="#bbee88"
                        />
                        <g id="Group_17" opacity="0.25">
                           <path
                              id="Vector_30"
                              opacity="0.25"
                              d="M212 248.1C210.9 243.6 210.2 239.1 209.6 234.6C209.1 230 208.8 225.5 208.9 220.9C209 216.3 209.4 211.7 210.4 207.3C211.4 202.8 213 198.5 215.5 194.6C213.1 198.5 211.5 202.8 210.5 207.3C209.5 211.8 209.1 216.3 209.1 220.9C209 225.5 209.4 230 209.9 234.6C210.5 239.1 211.3 243.6 212.4 248.1C212.4 248.2 212.4 248.4 212.2 248.4C212.2 248.3 212 248.3 212 248.1Z"
                              fill="white"
                           />
                        </g>
                     </g>
                     <g id="Group_18">
                        <path
                           id="Vector_31"
                           d="M233 211.6C226.9 222.3 225.1 230 224.6 233.7C224.4 235.4 224.4 236.3 224.4 236.3H222.2L223.6 237.8L222.9 244.6L222.6 247.6L218.9 237.7C219 236.8 219.2 235.7 219.4 234.3C219.9 231.8 220.7 228.6 222 225.3C222.6 223.8 223.3 222.3 224.1 220.9C226.3 217.2 229.1 213.9 233 211.6Z"
                           fill="#bbee88"
                        />
                        <g id="Group_19" opacity="0.25">
                           <path
                              id="Vector_32"
                              opacity="0.25"
                              d="M220.2 241.7C220.2 238.9 220.5 236.1 221.1 233.3C221.6 230.5 222.4 227.9 223.5 225.3C224.5 222.7 225.9 220.2 227.4 217.9L228.6 216.2L230 214.6C230.2 214.3 230.5 214.1 230.7 213.8L231.5 213.1L233 211.7L231.5 213.2L230.8 213.9C230.6 214.2 230.3 214.4 230.1 214.7L228.8 216.3L227.6 218C226.1 220.3 224.7 222.8 223.8 225.4C222.8 228 222.1 230.7 221.5 233.4C221 236.1 220.7 238.9 220.7 241.7C220.7 241.8 220.6 241.9 220.5 241.9C220.3 241.9 220.2 241.8 220.2 241.7Z"
                              fill="white"
                           />
                        </g>
                     </g>
                     <path
                        id="Vector_33"
                        d="M254 251H241.6L187.6 251.1H171.6C171.6 251.1 172.9 246.8 179.2 244.8C185.5 242.8 187.3 246.9 187.3 246.9C187.3 246.9 187 238.7 194.4 235.9C201.8 233.1 205.1 242.5 205.1 242.5C205.1 242.5 206.6 237.9 214.5 237.5C222.4 237.1 221.6 243.3 221.6 243.3C221.6 243.3 226.1 238.3 234.2 239.4C242.3 240.5 243.1 247 243.1 247C243.1 247 250.2 244.8 254 251Z"
                        fill="#006622"
                     />
                  </g>
               </g>
               <defs>
                  {/* NUVENS */}
                  <linearGradient
                     id="paint1_linear"
                     x1="326.925"
                     y1="147.902"
                     x2="330.395"
                     y2="242.079"
                     gradientUnits="userSpaceOnUse"
                  >
                     <stop stop-color="#ff5522" />
                     <stop offset="1" stop-opacity="0" />
                  </linearGradient>
                  {/* montanhas ao fundo */}
                  <linearGradient
                     id="paint2_linear"
                     x1="344.3"
                     y1="64.1527"
                     x2="344.961"
                     y2="87.284"
                     gradientUnits="userSpaceOnUse"
                  >
                     <stop stop-color="#FF5522" />
                     <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  {/* 4 */}
                  <linearGradient
                     id="paint6_linear"
                     x1="197.311"
                     y1="242.736"
                     x2="195.989"
                     y2="148.447"
                     gradientUnits="userSpaceOnUse"
                  >
                     <stop stop-color="#ff5522" />
                     <stop offset="1" stop-color="#ff8833" />
                  </linearGradient>
                  {/* 0 */}
                  <linearGradient
                     id="paint7_linear"
                     x1="322.636"
                     y1="240.979"
                     x2="321.314"
                     y2="146.691"
                     gradientUnits="userSpaceOnUse"
                  >
                     <stop stop-color="#ff5522" />
                     <stop offset="1" stop-color="#ff8833" />
                  </linearGradient>
                  {/* 4 */}
                  <linearGradient
                     id="paint8_linear"
                     x1="447.456"
                     y1="239.229"
                     x2="446.134"
                     y2="144.941"
                     gradientUnits="userSpaceOnUse"
                  >
                     <stop stop-color="#ff5522" />
                     <stop offset="1" stop-color="#ff8833" />
                  </linearGradient>
                  {/* folha verde */}
                  <linearGradient
                     id="paint9_linear"
                     x1="281.068"
                     y1="73.4007"
                     x2="292.303"
                     y2="109.089"
                     gradientUnits="userSpaceOnUse"
                  >
                     <stop stop-color="#118822" />
                     <stop offset="1" stop-color="#bbee88" />
                  </linearGradient>
               </defs>
            </svg>
         </div>
         <p className={styles.text__return}>
            Volte para a <Link to={"/"} className={styles.text__link}>home</Link>
         </p>
      </main>
   );
}
