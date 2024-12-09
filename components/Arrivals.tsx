import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Arrivals = () => {
  const products = [
    {
      id: "1",
      name: "T-shirt with Tapa Details",
      ratestar: "★★★★☆",
      rating: 4.5,
      price: "$120",
      image:
        "https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N467qjnuMQRS0d40H4Z16YEYUnYViWhyD~kzMCwXPxGhASArDiFwcVKZ6fx6qHXXOBr~BgM6aACxrTv9JJf4JtqrTHE2u716LdWwFLvhCw5eHO-Ivuxzpr2R1u8FWudlQapRQyM6dhrlsIR-R-t2fm-lS4lLdeJq9-QbhHzAQbFFQBUg6NB74gMOgCD6SmICBSUKe5W10WKqEmh1LYV55nX2~7SEsdxZuq-cp7Mn8OrU9NvS493XG3nYQIzM63XxD5ciHEOd8O-zCdTAm0-x0ZIF8ySlZKUOR8oHGsOvSwmugAImS4ejq7K2aVYgOsZ2OUUfghWMWliQU6wtv3mmjQ__",
    },
    {
      id: "2",
      name: "Skinny Fit Jeans",
      ratestar: "★★★☆☆",
      rating: 3.5,
      price: "$240",
      fakeprice: "$260",
      discount: "-20%",
      image:
        "https://s3-alpha-sig.figma.com/img/769b/9d60/ff941dde9bc0e54431b8d8fe3182f5e9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gqcLL5UmMTnyPt9DvALODCglbRkma8WTB8Wb2rSdpGwQgz1oRRxOHRn2a62WzfL6OZj-qqVtbbo3w~4L5zhulyuteZnnG~A0KlNk-SdSHYnPBDaU877kleeDQY2W7rKbK-bTuxi1wKKOYGtYGvBWQyKCkL8UcarLoe2mdZoDGeqx5W~EwlPeCPHh2cb9R9KHpZ2eSBRZQVI1t8fjGnT~s6G2QtgQM6U3KibhoZkasMAQDjX8PavjtMny7hsBRTGanVyprSXELRnwaPDwFBxNcc8y2tZ~IEm9ljqsr1wSaYyv2xxtIpCvpe~NEBbZ1w1Yt2sMM02fqNHbYyWuwlGIyA__",
    },
    {
      id: "3",
      name: "Checkered Shirt",
      ratestar: "★★★★☆",
      rating: 4.5,
      price: "$180",
      image:
        "https://s3-alpha-sig.figma.com/img/bbf4/11c2/5fc84f87eeac1062fbe47f49c192d4f2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j2zRJvvq9tM5IRPO74vJiPhtF6BOd5s0Ee3Tjh2MTz0N3-TFTRXDwXN2BbT8QXDf9mZeNYmStRD8tz5FJucFT-FSQfEPxGc09FJQRoLwRCGaFBB1LeLgUJVcrIRfZ3VH11QygxPv~Ihy~NAsplH7zOS7ctbN0F-YOTi7PiYM20RW6Z0dxEvMb-hX3fLiU0rCrASgKvYJ4jo~HYur0O4HfeQZJWCIwep~Rhjuq92NffqcGAZZl30rb-gFn5SQXQSMUfBQSvgeG3UFOrdQrHBX8ADmEB8Fw47vMdZzNmqd1UavVZ7htorOdB4SsccWqo2fc~DXzlAOqpsTMfYf9FIOJw__",
    },
    {
      id: "4",
      name: "Sleeve Stripted T-shirt",
      ratestar: "★★★★☆",
      rating: 4.5,
      price: "$130",
      fakeprice: "$160",
      discount: "-30%",
      image:
        "https://s3-alpha-sig.figma.com/img/3457/42c2/7cc557f42cf1d489f7cc811856b90e9f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TtH9dFseVJHa~LsbYDgZvpO9lYcC3kbKcG-4gXhmXknILWHrbfdoYjnN7v9lUSqFbGdc1b7j~zZYzVOZyorZDVus5KTUrarfDdNlmpPdXKNwgzfwq7pzuAyvjKKJ2bKxOTGDvdFYE-2nsmq8Y5YKuDeNvtMFgT59Ozkzk0NkXA9roUN-gv9otcMT8xVKkQS3qIEt7B4XyBVy1yZNWSsCqFWgYJpdsobZgQlLWa3vsDTN5xqjVVjZQB440Opd-tSbc1XLtcYpZ6L7nG5GPsogJky0T1gcy2BnzDhWtGReQy2Xy7FtVfqOYXk0M2t7yQvZZoOLOIHKpERHCnpnwGoJlg__",
    },
  ];

  return (
    <div id="newarrivals" className="container flex flex-col items-center justify-center p-6 mx-auto mb-10 space-y-16">
      <h1 className="mb-4 text-4xl text-center text-black font-bold-1">
        NEW ARRIVALS
      </h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-center p-1 transition-shadow duration-300 bg-white rounded shadow-lg jus hover:shadow-xl"
          >
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover w-full h-40 rounded-md"
              />
              <h2 className="mt-4 text-xl font-semibold text-black/80 line-clamp-1">
                {product.name}
              </h2>
              <p className="flex items-center justify-start gap-2 text-2xl text-yellow-400">
                {product.ratestar}{" "}
                <span className="text-xs text-black"> {product.rating}/5</span>
              </p>
              <div className="flex items-center justify-between">
                <p className="flex items-center justify-between gap-2 font-medium justify-betw text-black/60">
                  {product.price}{" "}
                  <span className="text-xs line-through text-black/50">
                    {product.fakeprice}
                  </span>{" "}
                </p>
                <span className="text-xs text-right text-red-500">
                  {product.discount}
                </span>
              </div>
            </Link>{" "}
          </div>
        ))}
      </div>

      <Button variant={"secondary"} className="px-10 py-2 rounded ">
        View All
      </Button>
    </div>
  );
};

export default Arrivals;
