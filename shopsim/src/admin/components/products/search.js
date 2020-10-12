import React, {useState} from 'react'
import {Input} from 'antd'
import PropTypes from 'prop-types'


function Search(props) {
    const {onSearch, defaultValueSearch} = props
    const [valueSearch, setValueSearch] = useState(defaultValueSearch)
    const {Search} = Input

    const handleSearch = (valueSearch) => {
        let vlS = valueSearch.trim()
        if (vlS === ""){
            setValueSearch('')
            return
        }
        if(onSearch) {
            onSearch(vlS)
        }
    }

    console.log("log defaultValue:", defaultValueSearch);

    return (
        <Search
            placeholder="Nhập số cần tìm..."
            onSearch={value => handleSearch(value)}
            style={{ width: 200 }}
            defaultValue={valueSearch}
        />
    )
}

Search.propTypes = {
    onSearch: PropTypes.func,
    defaultValueSearch: PropTypes.string,
}
Search.defaultProps = { 
    onSearch: null,
    defaultValueSearch: ''
}
export default Search

