"use client";

import React, { useState, useRef, useEffect } from "react";
import { redirect } from "next/navigation";

const ProfilePopover: React.FC = () => {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block md:hidden" ref={popoverRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-1 bg-gray-800 text-white rounded-md"
      >
        <span className="text-sm">Menu</span>
      </button>

      {/* Popover */}
      {open && (
        <div className="absolute w-48 bg-gray-600 shadow-lg rounded-md mt-0.5 border z-50">
          <ul className="text-sm">
            <li className="px-4 py-2 text-amber-200 cursor-pointer">
              <button onClick={() => {
                setOpen((prev) => !prev)
                redirect("/pages/dashboard");
              }}> Dashboard </button>
            </li>
            <li className="px-4 py-2 text-amber-200 cursor-pointer">
              <button onClick={() => {
                setOpen((prev) => !prev)
                redirect("/pages/dashboard/projects");
              }}> Projects </button>
            </li>
            <li className="px-4 py-2 text-amber-200 cursor-pointer">
              <button onClick={() => {
                setOpen((prev) => !prev);
                redirect("/pages/dashboard/employee")
              }}> Employee </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfilePopover;