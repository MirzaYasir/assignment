import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const config =  {headers: {
  'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content'),
  "Content-Type": "aplication/json",
  'application':'application/json'
}};

function Test(props) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        if(props.show){
            setShow(true);
        }
    },[]);
    return(
        <Modal show={show}>
          <Modal.Body>
            Model body
          </Modal.Body>
        </Modal>
    )
}

function Products() {
    const [list, setList] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState(null);
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('products/save');
    const [btnText, setBtnText] = useState('Save Product');

    useEffect(() => {
        getProducts();
    },[]);
    
    const getProducts = async () => {
        setShow(false);
        setLoading(true);
        await axios.get('products/list').then((response) => {
            setLoading(false);
            setList(response.data);
        }).catch((e) => {
            setIsLoading(false);
            console.log(e);
        });
    }

    const handleEditClick = (item) => {
        setBtnText('Update Product');
        setUrl('products/update');
        setTitle(item.title);
        setPrice(item.price);
        setId(item.id);
        item.description == null ? '' : setDescription(item.description);
        setShow(true);
    };

    const handleDeleteClick = async (id) => {
        var answer = window.confirm("are you sure want to delete?");
        if(answer){
            setLoading(true);
            await axios.post('products/softDelete',{'id':id},config).then((response) => {
                setLoading(false);
                if(response){
                    getProducts();
                }
            }).catch((err) => {
                setLoading(false);
                console.log(err);
            });
        }
    };

    const add = () => {
        setBtnText('Save Product');
        setUrl('products/save');
        setTitle('');
        setPrice('');
        setDescription('');
        if(show){
            setShow(false)
        } else {
            setShow(true);
        }
    }

    const save = async (e) => {
        e.preventDefault();
        if(title == ''){
            alert('Title is required');
            return;
        }
        if(price == ''){
            alert('Price is required');
            return;
        }
        var data = {};
        if(url == 'products/update'){
            data.id = id;
            data.title = title; 
            data.price = price; 
            data.description = description;
        } else {
            data.title = title; 
            data.price = price; 
            data.description = description;
        }
        await axios.post(url, data, config).then((response) => {
            if(response.data.result == "success"){
                setShow(false);
                setTitle('');
                setPrice('');
                setDescription('');
                getProducts();
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    return(
        isLoading ? <div style={{
            backgroundColor:'rgba(100, 100, 100, 0.5)',
            position:'absolute',
            right:0,
            left:0,
            bottom:0,
            top:0,
            paddingTop: '20%',
            textAlign:'center'
        }}>Loading...</div> :
        <div style={{padding: 25}}>
            <button className="btn btn-success btn-sm mb-2" onClick={add}>Add Product</button>

            {show ?
                <div className="card card-body mb-2 form-inline">
                    <div className="col-md-12">
                        <div className="form-group">
                            <div className="col-md-2"><label style={{float:'right'}}>Title</label></div>
                            <input type="text" className="col-md-4 form-control" placeholder="Product title..." value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-12 mb-2 mt-2">
                        <div className="form-group">
                            <div className="col-md-2"><label style={{float:'right'}}>Price</label></div>
                            <input type="number" className="form-control col-md-4" placeholder="Product price..." value={price} onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <div className="col-md-2"><label style={{float:'right'}}>Description</label></div>
                            <textarea row="5" cols="100" className="form-control col-md-4" placeholder="Product description..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="col-md-12 mb-2 row mt-2">
                        <div className="col-md-2">&nbsp;&nbsp;&nbsp;</div>
                        <button className="btn btn-success btn-sm" onClick={save}>{btnText}</button>
                    </div>
                </div> 
            : null 
            }          
            <hr/>
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th style={{width:50}}>Sr#.</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th style={{width:150}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.length > 0 ? list.map((item, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => handleEditClick(item)} className="btn btn-info btn-sm">Edit</button>
                                &nbsp;&nbsp;&nbsp;<button onClick={() => handleDeleteClick(item.id)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    )) : null}
                </tbody>
            </table>
        </div>
    );
}

export default Products;

if (document.getElementById('example')) {
    ReactDOM.render(<Products />, document.getElementById('example'));
}
