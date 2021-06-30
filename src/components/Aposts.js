import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { gSetListA,gSetPageNumA} from '../store/modules/globalData';
import Posts from './Posts';
import { ApostsAxios } from '../utiles/api';

function Aposts(props)
{
    const {listA,pageNumA,setListA,setPageNumA} = props;

    return(
        <Posts 
        list={listA}
        pageNum={pageNumA}
        setList={setListA}
        setPageNum={setPageNumA}
        axiosUrl={ApostsAxios}
        />
    )
}

const mapStateToProps = state =>({
    listA: state.globalData.gApost.list,
    pageNumA: state.globalData.gApost.pageNum
})

const mapDispatchToProps = dispatch =>({
    setListA: data => dispatch(gSetListA(data)),
    setPageNumA: () => dispatch(gSetPageNumA())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Aposts));
