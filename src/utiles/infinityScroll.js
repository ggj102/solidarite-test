export default function infinityScroll(target,fnc)
{  
    if(target)
    {
        new IntersectionObserver(([entry], observer)=>{
            if(entry.isIntersecting)// target을 찾았을 경우
            {
                observer.unobserve(entry.target); //찾은 target을 해제
                fnc(); // addList 함수가 동작하여 list를 추가함
            }
        },{threshold: 1}).observe(target); //갱신된 target을 추가
    }
}