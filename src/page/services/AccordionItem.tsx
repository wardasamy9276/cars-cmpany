import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-right group transition-all"
      >
        <span
          className={`text-xl font-bold transition-colors ${isOpen ? "text-[#D4A757]" : "text-[#001534] group-hover:text-[#D4A757]"}`}
        >
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`p-2 rounded-full ${isOpen ? "bg-[#D4A757] text-white" : "bg-gray-50 text-[#001534]"}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 text-lg leading-relaxed font-medium">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
