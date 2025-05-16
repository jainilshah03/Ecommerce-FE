"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";

import { Image as ImageType } from "@/types";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col items-center gap-4">
      
      {/* Main Image */}
      <Tab.Panels className="w-full flex justify-center">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="relative w-[700px] h-[450px] sm:rounded-lg overflow-hidden">
              {/* ↑ increased width and height */}
              <Image
                fill
                src={image.url}
                alt="Image"
                className="object-contain object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>

      {/* Thumbnails */}
      <Tab.List className="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <GalleryTab key={image.id} image={image} />
        ))}
      </Tab.List>

    </Tab.Group>
  );
};

export default Gallery;
