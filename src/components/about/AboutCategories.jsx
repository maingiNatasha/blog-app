import Food from "../../assets/FoodImg.jpg";
import Destinations from "../../assets/HomeImage.png";
import Lifestyle from "../../assets/LifestyleImg.jpg";
import Sports from "../../assets/SportsImg.jpg";
import Family from "../../assets/FamilyImg.jpg";

const categories = [
    {
        picture: Destinations,
        name: "Destinations"
    },
    {
        picture: Food,
        name: "Food"
    },
    {
        picture: Lifestyle,
        name: "Lifestyle"
    },
    {
        picture: Sports,
        name: "Sports"
    },
    {
        picture: Family,
        name: "Family"
    }
]

const AboutCategories = () => {
    return (
        <div>
            <h1 className="font-bold">What We Offer</h1>
            <p className="py-4">Below are some of the blog categories we feature in our website</p>
            <div className="flex overflow-hidden space-x-6 lg:space-x-10 hover:overflow-x-scroll transform transition-all">
                {categories.map((category, index) => (
                    <div key={index} className="relative rounded-md flex-shrink-0">
                        <img src={category.picture} alt={category.name} className="tint-image object-cover h-[300px] w-[400px]" />
                        <strong className="category-label text-white font-extrabold tracking-widest absolute top-[50%] left-[40%] transform translate(-50%, -40%)">{category.name}</strong>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutCategories