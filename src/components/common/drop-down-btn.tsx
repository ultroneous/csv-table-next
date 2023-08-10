import React, { useRef, useState } from "react";
import Link from "next/link";

import useOnClickOutside from "@hooks/use-on-click-outside";
import ActionIcon from "./icons/action-icon";
import ImportIcon from "./icons/import-icon";
import UserIcon from "./icons/user-icon";

const DropdownButton: React.FC = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="flex gap-x-2 items-center px-4 py-2 text-sm font-medium text-black  border rounded-md focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
      >
        <ActionIcon width={18} height={18} /> Action
      </button>

      <div
        className={`absolute z-20 text-center left-0 mt-2 w-36 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ${
          !isOpen ? "hidden" : ""
        }`}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <Link
            href="/bulk-import"
            className="flex items-center gap-x-2 px-3 py-2.5  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            <ImportIcon width={20} height={20} />
            Bulk import
          </Link>
          <Link
            href="#"
            className="flex items-center gap-x-2 px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            <UserIcon width={20} height={20} />
            Assign cards
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownButton;
