import Item from "./Item";

export default function ItemList({food, isLoading}: any) {
    return <div>
        {isLoading? <p>Loading...</p> : food.extendedIngredients.map((item: any) => <Item item={item} />)}
        
    </div>
}