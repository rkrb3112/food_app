import FoodItem from "./FoodItem";

export default function Foodlist({foodData, setFoodId}: any){
    return <div>
        {foodData.map((food:any) => <FoodItem setFoodId={setFoodId} key={food.id} food={food} />)}
    </div>
}