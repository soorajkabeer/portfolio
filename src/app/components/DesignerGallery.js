"use client";
import Image from "next/image";
import { useTransform, motion } from "framer-motion";

// const images = [
//   "1.jpg",
//   "2.jpg",
//   "3.jpg",
//   "4.jpg",
//   "5.jpg",
//   "6.jpg",
//   "7.jpg",
//   "8.jpg",
//   "9.jpg",
//   "10.jpg",
//   "11.jpg",
//   "12.jpg",
//   "13.jpg",
//   "14.jpg",
//   "15.jpg",
//   "16.jpg",
//   "17.jpg",
//   "18.jpg",
//   "19.jpg",
//   "20.jpg",
//   "21.jpg",
// ];
const images = [
  ["1.jpg", "Hikerpedia Logo mockup on a t-shirt"],
  ["2.jpg", "UX design done for a BirdCare App"],
  ["3.jpg", "Sayanora Fashions logo on a Shirt"],
  ["4.jpg", "Hijab USA logo"],
  ["5.jpg", "Sooraj Kabeer Photography logo mockup"],
  ["6.jpg", "Wayand Wonders logo mockup"],
  ["7.jpg", "Aquazilla Homepage Design"],
  ["8.jpg", "Sarath Kannan Edits Logo mockup"],
  ["9.jpg", "Sayanora logo in Leather"],
  ["10.jpg", "Fishzilla Homepage Design"],
  ["11.jpg", "Purchase page ux design done for a clothing app"],
  ["12.jpg", "Sooraj Kabeer Photography logo on leather mockup"],
  ["13.jpg", "Smilecraft dental clinic logo mockup"],
  ["14.jpg", "UI prototype done for a Fish exporter in Kochi"],
  ["15.jpg", "Escort Tyres logo projection mockup"],
  ["16.jpg", "Hijab USA Logo"],
  ["17.jpg", "UI prototype done for a Fish exporter in Kerala"],
  ["18.jpg", "Chefmate logo on a card"],
  ["19.jpg", "Jafrum neon light"],
  ["20.jpg", "SeaFood Export logo on the wall of a corporate building"],
  ["21.jpg", "Aquazilla logo in neon lighting"],
];
const ImageSet = ({ images }) => {
  return (
    <div
      className="grid gap-6"
      //   style={{ y }}
    >
      {images.map((img, i) => {
        return (
          <motion.div
            key={i}
            initial={{ y: 50 }}
            whileInView={{
              y: 0,
              filter: "saturate(100%) grayscale(.5)",
            }}
            transition={{ duration: 0.5, type: "spring" }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
              filter: "saturate(150%) grayscale(0)",
            }}
          >
            <Image
              src={`/designer/${img[0]}`}
              className="h-full w-full max-w-full rounded-lg object-cover"
              alt={`${img[1]}`}
              width={500}
              height={500}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default function DesignerGallery() {
  return (
    <div className="mt-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ImageSet
          images={[images[0], images[1], images[6], images[3], images[4]]}
        />
        <ImageSet
          images={[images[5], images[2], images[7], images[8], images[9]]}
        />
        <ImageSet
          images={[
            images[10],
            images[11],
            images[12],
            images[13],
            images[14],
            images[15],
          ]}
        />
        <ImageSet
          images={[images[16], images[17], images[18], images[19], images[20]]}
        />
      </div>
    </div>
  );

  //     const gallery = useRef(null);
  //     const [dimension, setDimension] = useState({ width: 0, height: 0 });

  //     const { scrollYProgress } = useScroll({
  //       target: gallery,
  //       offset: ["start end", "end start"],
  //     });
  //     const { height } = dimension;
  //     const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  //     const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  //     const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  //     const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  //     useEffect(() => {
  //       const lenis = new Lenis();

  //       const raf = (time) => {
  //         lenis.raf(time);
  //         requestAnimationFrame(raf);
  //       };

  //       const resize = () => {
  //         setDimension({ width: window.innerWidth, height: window.innerHeight });
  //       };

  //       window.addEventListener("resize", resize);
  //       requestAnimationFrame(raf);
  //       resize();

  //       return () => {
  //         window.removeEventListener("resize", resize);
  //       };
  //     }, []);

  //   return (
  //     <div className="w-full">
  //       <div className="h-screen"></div>
  //       <div
  //         // ref={gallery}
  //         className="h-screen relative flex gap-[2vw] p-[2vw] box-border"
  //       >
  //         <Column
  //           images={[images[0], images[1], images[2]]}
  //           //   y={y}
  //           className="top-[-45%]"
  //         />
  //         <Column
  //           images={[images[3], images[4], images[5]]}
  //           //   y={y2}
  //           className="top-[-95%]"
  //         />
  //         <Column
  //           images={[images[6], images[7], images[8]]}
  //           //   y={y3}
  //           className="top-[-45%]"
  //         />
  //         <Column
  //           images={[images[9], images[10], images[11]]}
  //           //   y={y4}
  //           className="-top-3/4"
  //         />
  //       </div>
  //       <div className="h-screen"></div>
  //     </div>
  //   );
  // }

  // const Column = ({ images, y }) => {
  //   return (
  //     <motion.div
  //       className="relative h-full w-3/12 min-w-[250px] flex flex-col gap-[2vw]"
  //       //   style={{ y }}
  //     >
  //       {images.map((src, i) => {
  //         return (
  //           <div
  //             key={i}
  //             className="h-auto w-full relative overflow-hidden rounded-[1vw]"
  //           >
  //             <Image
  //               src={`/designer/${src}`}
  //               className="object-cover"
  //               alt="image"
  //               fill
  //             />
  //           </div>
  //         );
  //       })}
  //     </motion.div>
  //   );
}
