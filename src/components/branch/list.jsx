import { useEffect , useState } from 'react'
import { useSelector} from 'react-redux'
import Album from './album'
import './list.css'

const List = (props)=>{
    const [list,setList] = useState(null)
    const selectedFilter  = useSelector(state => state.album.selectedFilter)
   

    useEffect(()=>{
        let list = null
        if(selectedFilter=='ALL'){
            list  = props.list.map((item,i)=>{
                return  <Album key={i} item={item}/>
             })
        }else{
            list = props.list.filter((item)=> item.source == selectedFilter)
            list = list.map((item,i)=>{
                return  <Album key={i} item={item}/>
             })
               
        }
         setList(list)
    },[selectedFilter])

  
    return(
        <div id="List">
           {list}
        </div>
    )
}
export default List 