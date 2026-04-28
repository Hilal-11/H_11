"use client";

import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FormWrapper } from "./FormWrapper";
interface Props {
  scheduleCallOpen: boolean;
  setScheduleCallOpen: (v: boolean) => void;
} 

interface Props {
  scheduleCallOpen: boolean;
  setScheduleCallOpen: (v: boolean) => void;
}

export function ScheduleCallModal({ scheduleCallOpen, setScheduleCallOpen }: Props) {

  return (
    <AnimatePresence>
      {scheduleCallOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm overflow-y-scroll"
            onClick={() => setScheduleCallOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed z-50 inset-x-0 top-20 mx-auto w-[92%] lg:w-[68%] max-w-3xl h-[80%] lg:h-[780px] rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-y-scroll flex flex-col"
          >
            <button
              onClick={() => setScheduleCallOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <IoClose className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            </button>

            {/* Pass user so FormWrapper can pre-fill Step 1 */}
            <FormWrapper />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}