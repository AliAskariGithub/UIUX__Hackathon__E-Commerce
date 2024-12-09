import { AiFillStar } from "react-icons/ai";
import { FcOk } from "react-icons/fc";


interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
  date?: string;
}

const ReviewCard = ({ name, rating, review, date }: ReviewCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
        <div className="flex text-yellow-500 mb-4">
          {Array.from({ length: rating }).map((_, idx) => (
            <AiFillStar key={idx} />
          ))}
        </div>
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold flex justify-center items-center gap-4">{name} <FcOk size={20} /></h4>
      </div>
      <p className="text-gray-600">{review}</p>
      <p className="text-gray-400 text-sm mt-2">Posted on {date}</p>
    </div>
  );
};

export default ReviewCard;
