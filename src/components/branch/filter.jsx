import {useState } from 'react'
import {useDispatch } from 'react-redux'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import * as albumAction from '../../store/actions/album'

const options = [
   {value : 'ALL' , label:'All'},
   { value : 'LOCAL', label:'Local'},
   { value : 'QOBUZ', label:'Qobuz'},
];

export default function UnstyledSelectsMultiple() {
    const [value, setValue] =useState(options[0]);
    const dispatch = useDispatch();

    const filterAlbum = (selcted) => {
        setValue(selcted)
        dispatch(albumAction.albumFilter(selcted.value))
    }

  return (
    <div id='dropdown-filter'>
    <Dropdown options={options} 
              className='dropdonw-main'
              onChange={event=>filterAlbum(event)} 
              value={value} 
              placeholder="Select an option" />;
    </div>
  );
}
