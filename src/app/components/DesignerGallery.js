"use client";
import Image from "next/image";
import { useTransform, motion } from "framer-motion";

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
            initial={{ y: 50, filter: "saturate(50%) grayscale(1)" }}
            whileInView={{
              y: 0,
              filter: "saturate(100%) grayscale(.3)",
            }}
            transition={{ duration: 0.5, type: "spring" }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
              filter: "saturate(110%) grayscale(0)",
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
      <div className="grid grid-cols-4 xs:grid-cols-1 ml:grid-cols-2 lg:grid-cols-3 gap-4 md:px-1 ml:px-4 px-8">
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
}
