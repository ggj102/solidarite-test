import React, { useCallback, useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import InfinityScroll  from '../utiles/infinityScroll';

function Posts(props)
{
    const {list,pageNum,setList,setPageNum,emptyState,setEmptyState,axiosUrl,searchState,tabState} = props;
    const [target,setTarget] = useState(null);

    // 스크롤이 지정한 target을 찾은 경우
    // 다음 data를 추가함
    const addList = useCallback(() => {
        if(!emptyState)
        {
            axiosUrl(pageNum+1, searchState).then((response)=>{
                if(response.data.length === 0) {
                    setEmptyState(true);
                }else{
                    setPageNum();
                    setList(response.data);
                }
            });
        }
    }, [axiosUrl, searchState, setList, pageNum, setPageNum,emptyState,setEmptyState]);

    // target이 바뀔 경우 target 갱신
    useEffect(()=>{
        InfinityScroll(target, addList);
    },[target, addList]);

    // list가 비어 있을 경우 data를 받아옴
    useEffect(()=>{
        if(list.length === 0) {
            axiosUrl(0, searchState).then((response)=>{
                setList(response.data);
            });
        }
    }, [searchState, setList, axiosUrl, list.length]);

    const listMap = list.map((val,idx)=>{
        return(
            <NavLink className="navlink" key={val.id} to={"/detail/"+tabState+"/"+val.id}>
                <li>
                    <div>
                        <span className="li_number">{val.id}. </span>
                        <span className="li_title">{val.title}</span>
                    </div>
                    <div className="li_content">{val.content}</div>
                </li>
                {idx === list.length-1 && <div ref={setTarget}></div>}
            </NavLink>
        )
    })

    return(
        <div className="list_area">
            <ul>
                {listMap}
            </ul>
        </div>
    )
}

const mapStateToProps = state =>({
    tabState: state.globalData.gTab,
    searchState: state.globalData.gSearch,

})

const mapDispatchToProps = null

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Posts));