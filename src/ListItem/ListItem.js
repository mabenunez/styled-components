import React from 'react';
import ReactDom from 'react-dom';
import '../ListItem/ListItem.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { rootCertificates } from "tls";

function ListItem(){
    return (
     <div className="list-item">
        <div class="row">
            <div class="col-6">
                <input type="checkbox" class="check" />
            </div>
            <div class="col-6">
                <p class="item">Item de lista</p>
            </div>
        </div>
     </div>
    )
}



export default ListItem;