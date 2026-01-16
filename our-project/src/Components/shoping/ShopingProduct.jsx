
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
          
    );
}