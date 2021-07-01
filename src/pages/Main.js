import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {gSetTab, gSetSearch} from '../store/modules/globalData';
import Aposts from '../components/Aposts';
import Bposts from '../components/Bposts';
import MainContents from '../styles/MainStyle';
import Icon from '../img/search_icon.png';

function Main(props)
{
    const {tabState,searchState,setTab,setSearch} = props;
    // 글로벌 상태관리
    // tabState - 현재 탭 위치 
    // searchState - 현재 검색어
    
    const searchInput = useRef(); // 검색어 input 제어용도
    const [inputFocus,setInputFocus] = useState(false); // 포커스 상태
    const [inputVal,setInputVal] = useState(''); // 검색창에 보여지는 input value
    const [timeState,setTimeState] = useState(0);
    
    // detail 페이지에서 main으로 돌아왔을 경우 검색어 보존
    useEffect(()=>{
        if(searchState !== "")
        {
            setInputVal(searchState);
        }
    },[searchState])

    const inputBlur = () =>{
        setInputFocus(false);
    }

    const inputFocusing = () =>{
        setInputFocus(true);
        searchInput.current.focus();
    }

    const tabChange = (type) =>{
        setTab(type);
    }

    // input에 검색어 입력시 이벤트 동작
    // 검색어 입력시 글로벌 데이터 초기화
    // 검색어 입력 후 150ms동안 입력이 없을 시 검색이 되도록 함
    const searchValue = (e) =>{
        setInputVal(e.target.value);
        if(timeState)
        {
            clearTimeout(timeState);
        }
        setTimeState(setTimeout(()=>{
            setSearch(e.target.value);
            setTimeState(0);
        },150))
    }

    return(
        <MainContents>
            <div className="search_area">
                <div className="text">게시물을 검색해보세요</div>
                <div className={!inputFocus ? "input_area" : "input_area input_focus"}
                    onClick={inputFocusing}>
                    <img src={Icon} alt="img"/>
                    <input placeholder="검색어를 입력하세요" 
                           value={inputVal}
                           ref={searchInput}
                           onBlur={inputBlur}
                           onChange={searchValue}/>
                </div>
            </div>
            <div>
                <div className="tab_area">
                    <div className={tabState === "a" ? "posts_tab tab_focus" : "posts_tab"} onClick={()=>{tabChange("a")}}>A Posts</div>
                    <div className={tabState === "b" ? "posts_tab tab_focus" : "posts_tab"} onClick={()=>{tabChange("b")}}>B Posts</div>
                </div>
                {tabState === "a" ? <Aposts/> : <Bposts/>}
            </div>
        </MainContents>
    )
}

const mapStateToProps = state =>({
    tabState: state.globalData.gTab,
    searchState: state.globalData.gSearch
})

const mapDispatchToProps = dispatch =>({
    setTab: state => dispatch(gSetTab(state)),
    setSearch: value => dispatch(gSetSearch(value)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Main));
