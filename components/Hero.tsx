import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <>
      <section className="max-h-full py-16 bg-gray-50">
        <div className="container flex flex-col md:flex-row items-center justify-between px-6 mx-auto text-center md:text-left">
          {/* Hero Text */}
          <div className="relative z-10 flex flex-col items-start justify-center max-w-lg">
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-7xl font-extrabold w-max leading-tight">
              FIND CLOTHES
            </h1>
            <h1 className="mb-4 -mt-2 text-3xl md:text-4xl lg:text-7xl font-extrabold leading-tight w-max">
              THAT MATCHES
            </h1>
            <h1 className="mb-6 -mt-2 text-3xl md:text-4xl lg:text-7xl font-extrabold w-max leading-tight">
              YOUR STYLE
            </h1>

            <p className="mb-6 text-sm md:text-base text-gray-600">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <div className="flex justify-center md:justify-start w-full">
              <Button
                variant="default"
                className="w-full md:w-auto px-6 py-2 text-xs md:text-sm rounded-full"
              >
                Shop Now
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <Image
            src="https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZdDO3aGizO-wZt5YOgeQ~J6YYZ5VPfIEMLyM1FQtcOLXbkHRhZoDLkxD3IcS6wcRkTLoITyuV6Q9DHHg8C1jH0dC3riWszZeeI1C6~NdZYOHGHg3TCY6vwZHHtAXr1q6dITGpLqdoLnh7wwk5~HvaXn28Q3o~6fJC1TjLeN6p-vPmqU8uxbxbrLDz8McmAqJlR-rODizOep0o9-hk0wI8tA2F2cKWyawKk51pQpqeCFhT2Vy~LMy8x49dM3OqEdoH7GDwaVjXNHNDUISgTHqR5R3aGk7UvDOC2~EgVEiesdJCpR4jmdbZ~YrQQZ9Vxe~-Av7tVaozmJ0GLt15v4uUg__"
            alt="hero"
            width={1000}
            height={1000}
            className="w-auto md:w-[500px] -ml-0 md:-ml-10 mt-8 md:mt-0"
          />
        </div>

        {/* Footer Section */}
        <footer className="relative z-10 py-4 bg-black">
          <div className="container flex items-center justify-center px-4 mx-auto text-center text-white w-full">
            <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 w-full">
              <Image
                src="/comp-logo-1.png"
                alt="Company Logo 1"
                width={1000}
                height={1000}
                className="w-auto"
              />
              <Image
                src="/comp-logo-2.png"
                alt="Company Logo 2"
                width={1000}
                height={1000}
                className="w-auto"
              />
              <Image
                src="/comp-logo-3.png"
                alt="Company Logo 3"
                width={1000}
                height={1000}
                className="w-auto"
              />
              <Image
                src="/comp-logo-4.png"
                alt="Company Logo 4"
                width={1000}
                height={1000}
                className="w-auto"
              />
              <Image
                src="/comp-logo-5.png"
                alt="Company Logo 5"
                width={1000}
                height={1000}
                className="w-auto"
              />
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Hero;
