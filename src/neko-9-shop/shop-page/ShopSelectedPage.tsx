import React, {useState} from 'react';
import {changePage} from "../shop-2-bll/shopActions";
import Paginator from "../shop-paginator/Paginator";
import {connect} from 'react-redux';


const ShopSelectedPage: React.FC = () => {

    // const [searchProduct, changeSearchWord] = useState('');
    //
    // const saveSearchWord = (e: any) => {
    //     changeSearchWord(e.currentTarget.value);
    // };

    const onPageChanged = (pageNumber: number) => {
        // const {pageSize} = this.props;
        console.log(pageNumber);
        changePage(pageNumber);
    };

    return (
        <div>
            <div>
                <Paginator
                    onPageChanged={onPageChanged}
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



