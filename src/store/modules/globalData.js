// 글로벌 상태관리 목록
// 현재 탭
// 현재 검색어
// Aposts의 list 및 페이지 number
// Bposts의 list 및 페이지 number

const NOW_TAB = "NOW_TAB";
const NOW_SEARCH = "NOW_SEARCH";
const LIST_A = "LIST_A";
const LIST_B = "LIST_B";
const PAGE_NUM_A = "PAGE_NUM_A";
const PAGE_NUM_B = "PAGE_NUM_B";
const RESET_POST = "RESET_POST";

export const gSetTab = (state) =>({type:NOW_TAB,state});
export const gSetSearch = (value) =>({type:NOW_SEARCH,value});
export const gSetListA = (data) =>({type:LIST_A,data});
export const gSetListB = (data) =>({type:LIST_B,data});
export const gSetPageNumA = () =>({type:PAGE_NUM_A});
export const gSetPageNumB = () =>({type:PAGE_NUM_B});
export const gReset = () =>({type:RESET_POST});

export const initialState = {
    gTab: "a",
    gScroll: 0,
    gSearch: '',
    gApost: {pageNum: 0, list: []},
    gBpost: {pageNum: 0, list: []}
}

export default function globalData(state = initialState, action){
    switch(action.type)
    {
        case NOW_TAB:
            return{
                ...state,
                gTab: action.state
            }
        case NOW_SEARCH:
            return{
                ...state,
                gSearch: action.value
            }
        case LIST_A:
            return{
                ...state,
                gApost: {
                    ...state.gApost,
                    list: [...state.gApost.list, ...action.data],
                },
            }
        case LIST_B:
            return{
                ...state,
                gBpost:{
                    ...state.gBpost,
                    list: [...state.gBpost.list, ...action.data],
                }
            }
        case PAGE_NUM_A:
            return{
                ...state,
                gApost:{
                    ...state.gApost,
                    pageNum: state.gApost.pageNum+1
                }
            }
        case PAGE_NUM_B:
            return{
                ...state,
                gBpost:{
                    ...state.gBpost,
                    pageNum: state.gBpost.pageNum+1
                }
            }
        case RESET_POST:
            return{
                ...state,
                gApost:{
                    ...state.gApost,
                    list: [],
                    pageNum: 0
                },
                gBpost:{
                    ...state.gBpost,
                    list: [],
                    pageNum: 0
                }
            }
        default:
            return state;
    }
}