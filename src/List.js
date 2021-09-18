
import  React,{useEffect, useState }from 'react';

const  ListItem=(props)=>{
    const [isedit , setEdit]= useState(false);
    const [ite, setIte] = useState(props.item)
    const saveItemHandler=(e)=>{
        props.saveItems([props.ind, ite])
        setEdit(false);
    }

    const editItemHandler=()=>{
        setEdit(true);
    }
    const deleteItemHandler=()=>{
        setEdit(false);
        props.deleteItems(props.ind)
    }

    const onChangeInput=(e)=>{
        var text = e.target.value
        if(text.trim()){
            setIte(text)
        }
    }
    
    if(isedit){
        return(
            <div className="list-item">
                <input defaultValue={props.item} onChange={onChangeInput}/>
             <div class="action-box">
                 <button className="edit" onClick={saveItemHandler}>
                    save
                 </button>
                 <button className="delete" onClick={deleteItemHandler}>
                     Delete
                 </button>
             </div>
           </div>)
       
    }else{
       return(
       <div className="list-item">
           <div className="text">{props.item}
        </div>
        <div class="action-box">
            <button className="edit" onClick={editItemHandler}>
                Edit
            </button>
            <button className="delete" onClick={deleteItemHandler}>
                Delete
            </button>
        </div>
      </div>)

    }
}
const List =()=>{
    const [addItem , setAddItem] = useState('');
    const [ items, setItems] = useState([]);
    const addListHandler=()=>{
        var t = addItem.trim()
        if(t){
            const p = [t];
            setItems([...items,...p])
        }
    }
    const  deleteItems=(ind)=>{
        var temp = [...items];
        temp.splice(ind, 1)
        setItems(temp)
    }
    const saveItems=(arr)=>{
        var in1 =arr[0];
        var item = arr[1].trim();
        console.log(in1)
        console.log(item)
        var itel = [...items] //object deep copy method
        if(item){
            itel[in1] = item;
            setItems(itel);
        }

    }
    const onChangeInput =(e)=>{
        var t = e.target.value;
        if(t.trim()){
            setAddItem(e.target.value);
        }
    }
    return(
        <div className="container">
            <div className="todo">
             <div className="todo-head">To do List</div>
            <div className="add-box">
                <input onChange={onChangeInput}/>
                <button onClick={addListHandler}>add</button>
                <div className="list">
                    {items.map( (item,index)=>(
                        <ListItem saveItems={saveItems} item={item} ind={index}  deleteItems={deleteItems}/>
                    ) 
                    )}

                </div>
            </div>
            </div>
        </div>
    )
}
export default List;
