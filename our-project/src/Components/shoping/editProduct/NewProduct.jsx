import { nanoid } from 'nanoid';


export const NewProduct = (props) => {
    const { addProduct } = props;

    const createProduct = async (event) => {
        event.preventDefault();
        const NewProduct = {
            id: nanoid(),
             name: event.target.name.value,
              amount:'0', 
              status: props.condition,
              isBouht:false
        }
        event.target.reset();
        addProduct(NewProduct);
    }

    return <form onSubmit={createProduct}>
        <input type="text" name="name" placeholder='name' /> <br />
        <button> הוסף את המוצר </button>
    </form>;
}