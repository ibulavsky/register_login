import React, {useEffect, useState} from 'react';
import Neko from "./Neko";

const NekoContainer: React.FC = () => {
        // logic
        const [top, changeTop] = useState(-50);
        const [open, changeOpen] = useState(false);
        const timer = () => setTimeout(() => {
            changeTop(top + 10)
        }, 1000);
        console.log(top);

        useEffect(() => {
            if (open) {
            // debugger
                console.log('timer');
                timer();
                if (top === 40) {
                    console.log('clear');
                    changeOpen(false);
                    return () => clearTimeout(timer())
                }
            }
        }, [top, open]);


        return (<>
            <Neko/>
        <button onClick={()=> changeOpen(true)}>Change Open</button>
            </>
            );
    }
;

export default NekoContainer;
