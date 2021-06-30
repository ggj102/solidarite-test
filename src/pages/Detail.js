import React, { useEffect , useState} from 'react';

import DetailContents from '../styles/DetailStyle';
import { DetailAxios } from '../utiles/api';

function Detail(props)
{
    const {match,history} = props;
    const [detailData,setDetailData] = useState([]);
    
    // 뒤로가기 클릭 시 동작
    const onGoBack = () =>{
        return history.goBack();
    }

    useEffect(()=>{
        DetailAxios(match.params.tab,match.params.id).then((response)=>{
            setDetailData(response.data);
        })
    },[match.params.id,match.params.tab]);

    return(
        <DetailContents>
           <div className="info">
               <div className="info_title">{detailData.title}</div>
               <div className="info_content">{detailData.content}</div>
           </div>
          <button onClick={onGoBack}>뒤로가기</button>
        </DetailContents>
    )
}

export default Detail