import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { gSetListB,gSetPageNumB, gSetEmptyStateB} from '../store/modules/globalData';
import Posts from './Posts';
import { BpostsAxios } from '../utiles/api';

function Bposts(props)
{
    const {listB,pageNumB,setListB,setPageNumB,emptyStateB,setEmptyStateB} = props;

    return(
        <Posts 
        list={listB}
        pageNum={pageNumB}
        setList={setListB}
        setPageNum={setPageNumB}
        emptyState = {emptyStateB}
        setEmptyState = {setEmptyStateB}
        axiosUrl={BpostsAxios}
        />
    )
}

const mapStateToProps = state =>({
    listB: state.globalData.gBpost.list,
    pageNumB: state.globalData.gBpost.pageNum,
    emptyStateB: state.globalData.gBpost.empty
})

const mapDispatchToProps = dispatch =>({
    setListB: data => dispatch(gSetListB(data)),
    setPageNumB: () => dispatch(gSetPageNumB()),
    setEmptyStateB: state => dispatch(gSetEmptyStateB(state))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Bposts));