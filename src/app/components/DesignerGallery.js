"use client";
import Image from "next/image";
import { useTransform, motion } from "framer-motion";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
];
const ImageSet = ({ images }) => {
  return (
    <div
      className="grid gap-4"
      //   style={{ y }}
    >
      {images.map((src, i) => {
        return (
          <div key={i}>
            <Image
              src={`/designer/${src}`}
              className="h-full w-full max-w-full rounded-lg object-cover"
              alt="image"
              width={500}
              height={500}
            />
          </div>
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
