import restaurants from '../app/assets/data/restaurants.json';
import { MdLocationPin, MdStar } from 'react-icons/md';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';

export default function HomeGrid() {
  return (
    <>
      <section className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {restaurants.map((restaurant, index) => (
          <Card restaurant={restaurant} key={index} />
        ))}
      </section>
      <div className="mt-24 mb-32 flex flex-row justify-center">
        <button className="py-2 px-3.5 bg-primary text-white rounded-lg">Load More</button>
      </div>
    </>
  );
}

function Card({ restaurant }: { restaurant: (typeof restaurants)[0] }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex flex-col shadow-md rounded-2xl border border-[#E7E7E7] overflow-clip aspect-[310/331]">
      <div className="flex-1 relative">
        <img
          src={restaurant.food_image}
          alt={restaurant.dish_name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 p-4 flex flex-col bg-black bg-opacity-25">
          <div className="flex flex-row justify-between items-center">
            <span className="text-2xs px-3 py-1 bg-white rounded-full">{restaurant.food_type}</span>
            {isLiked ? (
              <AiFillHeart size={24} className="text-red-900" onClick={handleLike} />
            ) : (
              <AiOutlineHeart size={24} className="text-white" onClick={handleLike} />
            )}
          </div>
          <div className="flex-1"></div>
          <div className="flex flex-row justify-between items-center">
            <span className="text-sm text-white font-semibold">{restaurant.dish_name}</span>
            <span className="text-base text-primary text-right font-bold">
              £{restaurant.price}pp
            </span>
          </div>
        </div>
      </div>
      <div className="p-3 pb-5 flex flex-row gap-3 items-center">
        <img
          src={restaurant.owner_picture}
          alt={restaurant.owner_name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <p className="font-medium text-sm">{restaurant.owner_name}</p>
          <div className="flex flex-row items-center">
            <MdLocationPin size={11} className="text-primary" />
            <span className="text-2xs">{restaurant.location}</span>
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center gap-1 justify-end">
            <MdStar size={13} className="text-primary" />
            <span className="text-sm font-medium">{restaurant.average_review}</span>
          </div>
          <p className="text-2xs">({restaurant.number_of_reviews} Reviews)</p>
        </div>
      </div>
    </div>
  );
}
