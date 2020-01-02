import React, {useState} from 'react';

interface IPaginatorProps {
    // selectedPage: number,
    changePage: (p: number) => void,
}

const Paginator: React.FC<IPaginatorProps> = (
    {
        // selectedPage,
        changePage
    }
) => {

    let totalItemsCount = 50;
    let portionSize = 5;

    let [pageSize, changePageSize] = useState(5);
    let [selectedPage, changePageLoc] = useState(1);

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    const clickLeft = () => {
        setPortionNumber(portionNumber - 1)
    };
    const clickRight = () => {
        setPortionNumber(portionNumber + 1)
    };

    const clickChangePage = (e: any) => {
        changePageSize(e.currentTarget.value);
    };

    const onChangePage = (p: number) => {
        changePageLoc(p);
        changePage(p);
    };


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100vw',
            height: '100px',
        }}>
            {portionNumber > 1 && <button onClick={clickLeft}>L</button>}
            <select name="" id="" onChange={clickChangePage} style={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                width: '40px',
                border: '1px solid blue',
                height: '21px'
            }}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
            </select>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span style={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '15px',
                        border: '1px solid blue',
                        height: '20px',
                        backgroundColor: selectedPage === p ? 'blue': 'white'
                    }} onClick={() => onChangePage(p)}>{p}</span>
                })}
            {portionCount > portionNumber && <button onClick={clickRight}>R</button>}
        </div>
    );
};

export default Paginator;
