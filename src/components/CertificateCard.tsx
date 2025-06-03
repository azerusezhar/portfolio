import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";

type CertificateCardProps = {
  title: string;
  as: string;
  category: string;
  imageUrl: string;
  fileUrl: string;
};

const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  category,
  imageUrl,
  fileUrl,
  as,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col justify-between border border-[#3D3D3D]  text-white rounded-lg shadow-lg hover:shadow-xl transition"
    >
      <div className="w-full rounded-t-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={320}
          height={180}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-4 pt-4 pb-5">
        <h3 className="text-lg font-satoshi font-semibold">{title}</h3>
        <div className="flex justify-between items-center font-sans mt-2">
          <p className="text-sm text-gray-400">{category}</p>
          <p className="text-sm text-gray-400">{as}</p>
        </div>
        <div>
          <Link href={fileUrl} download>
            <button
              className="group mt-4 flex justify-center items-center w-full text-black px-4 py-2.5 rounded-md bg-[#F6F6F6] font-semibold font-sans text-sm border 
                      hover:bg-black hover:text-white transition duration-400 ease-in-out cursor-pointer"
            >
              <Download className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300" />
              <p className="ml-2 group-hover:text-white">Download PDF</p>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
