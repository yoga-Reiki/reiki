import React, { useState } from "react";
import img1 from "../../assets/img/blog1.png";
import img2 from "../../assets/img/blog2.png";
import img3 from "../../assets/img/blog3.png";
import img4 from "../../assets/img/blog4.png";
import img5 from "../../assets/img/blog5.png";
import img6 from "../../assets/img/blog6.png";
import img7 from "../../assets/img/blog7.png";
import img8 from "../../assets/img/blog8.png";
import img9 from "../../assets/img/course1.png";
import img10 from "../../assets/img/course2.png";
import img11 from "../../assets/img/blog4.png";
import img12 from "../../assets/img/error yoga 2.png";

function GalleryPeace() {
    const initialImages = [
        img1, img2, img3,
        img4, img5, img6,
        img7, img8, img9,
        img10, img11, img12,
        img1, img2, img3,
        img4, img5, img6,
    ];

    const [images, setImages] = useState(initialImages);
    const [draggedItem, setDraggedItem] = useState(null);

    return (
        <div className="py-9 sm:py-14 md:py-16 px-4 xl:px-0 text-[#464646]">
            <h2 className="text-3xl md:text-[56px] font-Raleway Raleway-bold">Moments of Peace</h2>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-14">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-3xl shadow-md"
                        draggable
                        onDragStart={(e) => {
                            setDraggedItem(index);
                            e.dataTransfer.effectAllowed = "move";
                        }}
                        onDragOver={(e) => {
                            e.preventDefault();
                            e.dataTransfer.dropEffect = "move";
                        }}
                        onDrop={(e) => {
                            e.preventDefault();
                            if (draggedItem !== null && draggedItem !== index) {
                                const newImages = [...images];
                                const draggedImage = newImages[draggedItem];

                                newImages.splice(draggedItem, 1);

                                newImages.splice(index, 0, draggedImage);

                                setImages(newImages);
                                setDraggedItem(null);
                            }
                        }}
                    >
                        <img
                            src={img}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-48 md:h-60 lg:h-72 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GalleryPeace;
