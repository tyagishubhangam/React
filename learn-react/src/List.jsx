
function List() {

    const list = [
        {id:1, name:"apple", quantity:100},
        {id:2, name:"pineapple", quantity:10},
        {id:3, name:"orange", quantity:90},
        {id:4, name:"banana", quantity:30},
        {id:5, name:"mango", quantity:100},
    ];

    const liItems = list.map(itm => <li key={itm.id}>{itm.name}:&nbsp; <b>{itm.quantity}</b></li>);

    return(
        <ul>
            {liItems}
        </ul>
    );
    
}

export default List;