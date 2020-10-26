import React, {useState} from 'react'
import {Input} from 'antd'
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'


function Search(props) {

    const history = useHistory()

    const {onSearch, defaultValueSearch} = props
    const [valueSearch, setValueSearch] = useState(defaultValueSearch)
    const {Search} = Input

    const handleSearch = (valueSearch) => {
        let vlS = valueSearch.trim()
        if (vlS === ""){
            setValueSearch('')
            return
        } else {
            history.push(`/admin/tim-kiem/${valueSearch}`)
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
    defaultValueSearch: PropTypes.string,
}
Search.defaultProps = { 
    defaultValueSearch: ''
}
export default Search

