import Image from "next/image";

export interface ImageItem {
  src: string;
  alt: string;
  aspectRatio?: string;
  width?: number;
  height?: number;
}

export interface ImageGalleryProps {
  images: ImageItem[];
  className?: string;
}

export function ImageGallery({ images, className = "" }: ImageGalleryProps): React.ReactElement {
  return (
    <section className={`flex flex-col ${className}`}>
      {images.map((image, index) => {
        if (image.aspectRatio) {
          return (
            <div key={index} className={`relative w-full ${image.aspectRatio}`}>
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </div>
          );
        }
        return (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={image.width || 800}
            height={image.height || 400}
            className="w-full h-auto"
          />
        );
      })}
    </section>
  );
}

