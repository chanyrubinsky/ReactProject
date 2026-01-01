
export const ShopingProduct = (props) => {
    const { product } = props;
    const [isBought, setIsBought] = useState(false);
    const [amount, setAmount] = useState(product.amount);
    if (amount > 0 && !isBought) {
        setIsBought(true);
    }
    console.log(product);
    
    return (
        
        <div>
            <li>{product.name} 
                <input type="checkbox" disabled={isBought} />
               <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />

            </li>
        </div>
    );
}