export const ShopingList = (props) => {
    const { products } = props;

    return (
        <div>
            <ul>
                {products.map((product) => (
                    <ShopingProduct key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
}   