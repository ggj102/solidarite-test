import styled from 'styled-components';

export default styled.div`
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
    padding: 35px;
    .navlink{
        text-decoration: none;
    }
    .navlink:link{
        text-decoration: none;
        color:#646464;
    }
    .navlink:visited{
        text-decoration: none;
        color:#646464;
    }
    .navlink:hover{
        text-decoration: none;
        color:#646464;
    }
    .navlink:active{
        text-decoration: none;
        color:#646464;
    }
    .title{
        font-size: 50px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .search_area{
        margin-bottom: 40px;
    }
    .search_area .text{
        font-size: 20px;
        color: #6B7280;
        margin-bottom: 40px;
    }
    .input_area{
        display: flex;
        width: 300px;
        margin: 0 auto;
        border: 1px solid #E5E7EB;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 14px;
    }
    .input_focus{
        border: 1px solid #3b82f6;
    }
    .input_area:hover{
        border: 1px solid #3b82f6;
    }
    .input_area img{
        display: block;
    }
    .input_area input{
        display: block;
        width: 250px;
        border: none;
    }
    .input_area input:focus{
        outline: none;
    }
    .tab_area{
        font-weight: bold;
        display: flex;
        border-bottom: 1px solid #E5E7EB;
        margin-bottom: 5px;
    }
    .posts_tab{
        padding: 15px;
        border-radius: 4px;
        cursor: pointer;
    }
    .posts_tab:hover{
        background-color: #F3F4F6;
        color: rgba(59,130,246,0.5);
    }
    .tab_focus{
        color: #3b82f6;
    }
    .list_area{
        border: 1px solid #E5E7EB;
        border-radius: 4px;
        padding: 17px;
    }
    .list_area ul{
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: left;
    }
    .list_area li{
        box-sizing: border-box;
        color: #000;
        padding: 17px;
        font-size: 14px;
        cursor: pointer;
    }
    .list_area li:hover{
        background-color: #F3F4F6;
    }
    .li_number{
        color: #3b82f6;
        font-weight: bold;
    }
    .li_title{
        font-weight: bold;
    }
    .li_content{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
`