import React from 'react';
import s from './SearchPanel.module.scss';

const SearchPanel = (props) => {
    return (
        <input type="text" className={s.search} onChange={props.onChange} />
    )
}

export default SearchPanel;
