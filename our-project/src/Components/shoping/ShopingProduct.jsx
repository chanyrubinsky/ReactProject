<<<<<<< HEAD
export const ShopingProduct = (item, arr, setArr, ifEdit) => {
    ifEdit=true;
    const { product } = item;
    console.log(product);
    const To_delete = (id) => {
        setArr(arr.filter((index) => index.id !== id));

    }
    return (

        <><div>
            <li>{product.name}
            </li>
        </div>
            {ifEdit && <button onClick={() => To_delete(product.id)}>Delete</button>}
        </>
=======

export const ShopingProduct = ({product,productList,setProductList}) => {
    console.log(product);
    const deleteProduct = (id) => {
        setProductList(productList.filter((index) => index?.id !== id));}
    return (
        
        <>
            <li>{product?.name} 
            </li>
            <button onClick={() => deleteProduct(product?.id)}>למחיקה</button>
        </>
          
>>>>>>> 7903e5593d475869b242c587a22c231f42d55beb
    );
}