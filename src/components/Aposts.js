import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { gSetListA,gSetPageNumA,gSetEmptyStateA} from '../store/modules/globalData';
import Posts from './Posts';
import { ApostsAxios } from '../utiles/api';

function Aposts(props)
{
    const {listA,pageNumA,setListA,setPageNumA,emptyStateA,setEmptyStateA} = props;

    return(
        <Posts 
        list={listA}
        pageNum={pageNumA}
        setList={setListA}
        setPageNum={setPageNumA}
        emptyState = {emptyStateA}
        setEmptyState = {setEmptyStateA}
        axiosUrl={ApostsAxios}
        />
    )
}

const mapStateToProps = state =>({
    listA: state.globalData.gApost.list,
    pageNumA: state.globalData.gApost.pageNum,
    emptyStateA: state.globalData.gApost.empty
})

const mapDispatchToProps = dispatch =>({
    setListA: data => dispatch(gSetListA(data)),
    setPageNumA: () => dispatch(gSetPageNumA()),
    setEmptyStateA: state => dispatch(gSetEmptyStateA(state))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Aposts));
