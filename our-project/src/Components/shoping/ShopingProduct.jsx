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
    );
}