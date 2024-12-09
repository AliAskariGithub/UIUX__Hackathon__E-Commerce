import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineLabel } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
}

const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    image:
      "https://s3-alpha-sig.figma.com/img/f04a/017d/b094f9a20c2328f54a31b153619784f3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TdXM50mhn6bTCgy5ZIKXsA-QjkRV4OaWX-Cnze9In8KoiidKM66~GMFQpGbd092AChJXdOH87aE7q6hd4B1aki0Zz21BapPXWfD-ZAzl0lGNR~NulEIkdSnE0jX-oJqDrfSsv-jSbNtcdHYlXxSvFTZm-AB00loKN8T-Mhiy9cl866BvdooVFZzcYdQ~1RiMRLltq2fST3WpaC9SBLc~x-TGafP45Zx4drobNz~D3j59Pp9iOCBHkQ9haqy425Ct361dCDYxZr626Le81QLSCBQRdkwfU1Z2aniwh1PeZn~oL6HzotM1wzQDPrdZkY~jkuEs62dpjO-DdRcUCOah6Q__", // Replace with actual image path
    price: 145,
    size: "Large",
    color: "White",
    quantity: 1,
  },
  {
    id: 2,
    name: "Checked Shirt",
    image:
      "https://s3-alpha-sig.figma.com/img/bbf4/11c2/5fc84f87eeac1062fbe47f49c192d4f2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j2zRJvvq9tM5IRPO74vJiPhtF6BOd5s0Ee3Tjh2MTz0N3-TFTRXDwXN2BbT8QXDf9mZeNYmStRD8tz5FJucFT-FSQfEPxGc09FJQRoLwRCGaFBB1LeLgUJVcrIRfZ3VH11QygxPv~Ihy~NAsplH7zOS7ctbN0F-YOTi7PiYM20RW6Z0dxEvMb-hX3fLiU0rCrASgKvYJ4jo~HYur0O4HfeQZJWCIwep~Rhjuq92NffqcGAZZl30rb-gFn5SQXQSMUfBQSvgeG3UFOrdQrHBX8ADmEB8Fw47vMdZzNmqd1UavVZ7htorOdB4SsccWqo2fc~DXzlAOqpsTMfYf9FIOJw__", // Replace with actual image path
    price: 180,
    size: "Medium",
    color: "Red",
    quantity: 4,
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    image:
      "https://s3-alpha-sig.figma.com/img/769b/9d60/ff941dde9bc0e54431b8d8fe3182f5e9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gqcLL5UmMTnyPt9DvALODCglbRkma8WTB8Wb2rSdpGwQgz1oRRxOHRn2a62WzfL6OZj-qqVtbbo3w~4L5zhulyuteZnnG~A0KlNk-SdSHYnPBDaU877kleeDQY2W7rKbK-bTuxi1wKKOYGtYGvBWQyKCkL8UcarLoe2mdZoDGeqx5W~EwlPeCPHh2cb9R9KHpZ2eSBRZQVI1t8fjGnT~s6G2QtgQM6U3KibhoZkasMAQDjX8PavjtMny7hsBRTGanVyprSXELRnwaPDwFBxNcc8y2tZ~IEm9ljqsr1wSaYyv2xxtIpCvpe~NEBbZ1w1Yt2sMM02fqNHbYyWuwlGIyA__", // Replace with actual image path
    price: 240,
    size: "Large",
    color: "Blue",
    quantity: 2,
  },
];

const Cart = () => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="flex flex-col justify-between gap-5 p-6 space-y-6 lg:flex-row lg:space-y-0">
      {/* Cart Items Section */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-semibold">Your Cart</h2>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border-b border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-black">
                  Size:{" "}
                  <span className="text-xs text-gray-500"> {item.size}</span>
                </p>
                <p className="text-sm text-black">
                  Color:{" "}
                  <span className="text-xs text-gray-500"> {item.color}</span>
                </p>
                <p className="font-medium">${item.price}</p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-center gap-8">
              <RiDeleteBinFill color="red" size={24} />
              <div className="flex items-center justify-center gap-5">
                <FaMinus />
                <span>{item.quantity}</span>
                <FaPlus />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary Section */}
      <div className="w-full p-4 border rounded-lg lg:w-1/3 bg-gray-50">
        <h3 className="text-xl font-semibold">Order Summary</h3>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-black/70">Subtotal: </p>
            <b>${subtotal}</b>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-black/70">Discount (-20%): </p>
            <b> -${discount.toFixed(2)}</b>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-black/70">Delivery Fee: </p>
            <b> ${deliveryFee}</b>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-black/70">Total: </p>
            <b> ${total.toFixed(2)}</b>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-center border border-gray-300 gap-">
            <MdOutlineLabel
              size={20}
              className="-rotate-[120deg] mx-2"
              color="gray"
            />
            <input
              type="text"
              placeholder="Add promo code"
              className="w-full p-3 rounded-md"
            />
          </div>
          <div className="flex items-center justify-end">
            <Button className="px-6 rounded-full">Apply</Button>
          </div>
        </div>

        <div className="flex items-center justify-center mt-3">
          <Button className="w-full py-6 rounded-full">
            Go to Checkout <FaArrowRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
