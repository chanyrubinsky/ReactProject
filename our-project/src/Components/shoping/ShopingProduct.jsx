
export const ShopingProduct = (props) => {
    const { product } = props;
    console.log(product);
    
    return (
        
        <div>
            <li>{product.name} 
            </li>
        </div>
    );
}