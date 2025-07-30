"use client";

import { Fragment } from "react";
import Image from "next/image";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from "@headlessui/react";
import { BellIcon, Bars3Icon } from "@heroicons/react/24/outline";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
}

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function Header(props: HeaderProps) {
  const { setSidebarOpen } = props;

  return (
    <div className="sticky top-0 z-40 flex h-16 items-center gap-x-4 border-b bg-white px-4 shadow-sm sm:px-6 lg:px-8">
      <button
        className="text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Search */}
      <div className="relative flex-1">
        <MagnifyingGlassIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          placeholder="Search"
          className="w-full rounded-md border px-3 py-2 pl-10 focus:border-indigo-600 focus:ring-indigo-600"
        />
      </div>

      {/* Notifications */}
      <button className="text-gray-400 hover:text-gray-500">
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" />
      </button>

      {/* Profile Dropdown */}
      <Menu as="div" className="relative">
        <MenuButton className="flex items-center">
          <Image
            alt="User avatar"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="h-8 w-8 rounded-full"
            width={40}
            height={40}
          />
          <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" />
        </MenuButton>
        <Transition as={Fragment}>
          <MenuItems className="absolute right-0 mt-2 w-48 divide-y divide-gray-100 rounded-md bg-white shadow-lg">
            {userNavigation.map((item) => (
              <MenuItem key={item.name}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-gray-100" : ""
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
