import React, {useState} from 'react'
import * as XLSX from 'xlsx'
import PropTypes from 'prop-types'
import {Input, Button} from 'antd'
import { useForm } from 'antd/lib/form/Form';

function CreateFormExcel(props) {

    const [dataExcel, setDataExcel] = useState([]);

    const handleChange = (e) => {
        let reader = new FileReader();
        reader.onload = function(){
            let fileData = reader.result;
            let wb = XLSX.read(fileData, {type: 'array'});

            wb.SheetNames.forEach(function(sheetName){
                let rowObj = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);
                setDataExcel(rowObj)
            })
        }
        reader.readAsArrayBuffer(e.target.files[0]);
    }
    console.log("data excel: ", dataExcel);

    const handleSubmit = (e) => {
        e.preventDefault();
        //declare
        let title;
        let description;
        let price;
        let category;
        let product_type;
        
        for(let i = 0; i < dataExcel.length; i++){
            const form_data = new FormData();
            console.log(typeof(dataExcel[i].PhoneNumbers));
        }



    }

    return (
        <div>
            <Input type="file" accept="*/.xsl, */.xlsx" onChange={handleChange} bordered={false}/>
            <Button className="mt-1" type="primary" onClick={handleSubmit} >Bắt đầu thêm sim</Button>

        </div>
    )
}

CreateFormExcel.propTypes = {

}

export default CreateFormExcel

