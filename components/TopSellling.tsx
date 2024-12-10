import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const TopSelling = () => {
  const products = [
    {
      id: "1",
      name: "Vertical Striped Shirt",
      ratestar: "★★★★★",
      rating: 5,      
      fakeprice: "$232",
      discount: "-20%",
      price: "$212",
      image:
        "https://s3-alpha-sig.figma.com/img/e01f/5d3c/d9029bd465a4c7158689ab1619693014?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EueWyrVgo~G9vpRlqYVlc87xzLb~lxIXuaSokQ-20rq9jjlugTUiakaOK2wNatYl9gU2sBnyQmcfg4YQMZJB~XRSRSVrCCisf6Aeq0si00DTBP~2Eyuo510FzCz8Ii9wutCo1LWVDVUTIXnfgOvPd9bHn5CPwUvg6wPtRrjOJRVXuGGDHwiH2TOqBG8y8KibQmVaCzDr1ez14dCzuB8DBEW4nB48pK8Donobr1IpGLAwx4sCieDUXFBsJa-Cn2-uvv34gh7LeDFZI~zG39efErs6p1qhBufGIP63Zdfhs8U1saPKrYyvrqEkFJDdwP289UCeel~JUtBtz1zaG85eZg__",
    },
    {
      id: "2",
      name: "Courage Graphic T-shirt",
      ratestar: "★★★★",
      rating: 4,
      price: "$145",

      image:
        "https://s3-alpha-sig.figma.com/img/5723/4b01/d5fcac5632cf6823570ca2d1d53d7d73?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9Wr9HtnDWeGaQudQyHB7mjjfkAjuWvJdTPQCyNh6Kh1LyyV5tWyN0~FvrnNZibnzhwc1IWNi6EI2xgnnmq-v6eRRzUV3ScZuYzcPEyaYuIuEsv4cMbhPLn9wYu5lxDOtuWZkUNo3hcO4VDOCEoa8UIF6WXdINnCH9XPlwi5IlBtTrmYGeMcokvZAGJ93nEjS7cUctEf-9vyT8POmrUEKnC-2HDS25dcFlfKowt80D5Mi338FrcXxmAtyi9Ut7Pmm9sKQNgGhOV~LcENR0TvCEE--wLSGQ6BiO6k4h3i9WQOjjKwKEskEXE6J~PINniTbldzmUZp25H0iC9ud6Lp7A__",
    },
    {
      id: "3",
      name: "Loose Fit Bermuda Shorts",
      ratestar: "★★★",
      rating: 3,
      price: "$80",
      image:
        "https://s3-alpha-sig.figma.com/img/8951/5d71/4a66d9ca1401101dee4cc689f8bb5ad2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsTpGVGo3iiHrKUtY-SniBMxRhG2oU5H7NBAuSM-vdr85to8XkEUsa-6odPRuPYkxzS6hBAdwFfqK8TFLtZByuV-J9auXa0OoYjkAeVTjSFNnsjjkUkXybByJXKnfuU3FF8BXEQcclLcpk0~le4sdqBK8rmUvUUj0TWmAdDYTYBHfqBGxKmqNpXhP2YAGkiPgF~IJllRrfNH7tQSU5TMjsRX2Tg4FsNis0cNx4CUUGfvUssidiB-EHt-hC38kpF38ZLlydYC3vZGcbXEztfV-iXJQg3IeXmLAWeJliQ8dOT5em~OY2cBKQpaBtKUIYx6YZ1xWIStnUAZO6tM3MbanA__",
    },
    {
      id: "4",
      name: "Faded Skinny Jeans",
      ratestar: "★★★★☆",
      rating: 4.5,
      price: "$210",
      image:
        "https://s3-alpha-sig.figma.com/img/f180/c768/08e2ff8a46be56aa933f031aed3abe75?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a87C1cphdhYbKSf1~9oQhWXeHTNHU97jfpujV7pu4d-7Ca1df2q50TLR2w-lbEwWtEBJFrDBVun8CgxJ0jXSm1VxOHEBMe9Dpns48ZvhGLgWAJ4UwE8pQfvtd90QFZC-XwOCF4P7kVpQIHIGR2w1S-UzA8AixnCLSLCdYKLBqo1eqs2cc03vyg~xB03AxV9MQlQeqtn7CLTkCrdlnOBj~p5~~Etf-GmWhVrd9HtmlVytTR6szUAngCWlrL3AJbVzcnrYLQpoQz9J~Wo-oYnNI6wSVKiRmoWG-yVEe0tOKb1msoiv-nEu0ZdFiUajj3bFBF9QVmj-WfmvOWfG70nQHw__",
    },
  ];

  return (
    <div id="brand" className="container flex flex-col items-center justify-center p-6 mx-auto mb-10 space-y-16">
      <h1 className="mb-4 text-4xl text-center text-black font-bold-1">
        TOP SELLING
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

export default TopSelling;
