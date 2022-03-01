import { useEffect , useState } from 'react';
import {useSelector , useDispatch } from 'react-redux';
import * as albumAction from '../../store/actions/album'
import Filter from '../branch/filter'
import List from '../branch/list'
import './index.css'
const Index = ()=>{
    const [displayList,setDisplay] = useState(false)
   
    const albumsData = useSelector(state => state.album.data )
    const dispatch = useDispatch()

    function getAlbum() {
        const link = './assets/data/albums.json';
        dispatch(albumAction.getAlbum(link))
    }

    useEffect(()=>{

        if(albumsData){
            setDisplay(true)
        }

    },[albumsData])  
    const container  = <>
                        <Filter />
                        <List list={albumsData}/>
                      </>
    return(
        <div className="container">
            {!displayList?
            <button id="getAlbum-btn" onClick={getAlbum}>Get Albums</button>
            :container};
        </div>
    )

}
export default Index 