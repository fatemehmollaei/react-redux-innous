import './list.css'
const Branch = (props)=>{
    return(
        <div className="album">
            <div className="imgs">
                <img className="cover" src={props.item.cover?'./assets/covers/'+props.item.cover:'./assets/images/undefined_album_cover.png' }  alt={props.item.source} />
               {(props.item.source==='QOBUZ')?<img className="source" src={'./assets/images/qobuz.png'}  alt={props.item.source} />:null}
            </div>
           <div className="title">
               <h6> {props.item.album}</h6>
               <p>{props.item.artist}</p>
           </div>
        </div>
    )
}
export default Branch 