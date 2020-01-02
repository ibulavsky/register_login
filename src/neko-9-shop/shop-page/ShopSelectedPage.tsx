import React, {useState} from 'react';
import {changePageShop} from "../shop-2-bll/shopActions";
import Paginator from "../shop-paginator/Paginator";
import {connect} from 'react-redux';


const ShopSelectedPage: React.FC = () => {

    // const [searchProduct, changeSearchWord] = useState('');
    //
    // const saveSearchWord = (e: any) => {
    //     changeSearchWord(e.currentTarget.value);
    // };

    const changePage = (pageNumber: number) => {
        // const {pageSize} = this.props;
        console.log(pageNumber);
        changePageShop(pageNumber);
    };

    return (
        <div>
            <div>
                <Paginator
                    changePage={changePage}
                    // selectedPage={props.selectedPage}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        selectedPage: state.shop.selectedPage
    }
};

export default connect(mapStateToProps, null)(ShopSelectedPage);



