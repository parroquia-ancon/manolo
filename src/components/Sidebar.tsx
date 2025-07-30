"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  Transition,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  XMarkIcon,
  HomeIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const menu = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "Settings",
    icon: Cog6ToothIcon,
    children: [
      { name: "Levels", href: "/settings/levels" },
      { name: "Location", href: "/settings/location" },
      { name: "Roles", href: "/settings/roles" },
    ],
  },
  {
    name: "Participant",
    icon: UserGroupIcon,
    children: [
      { name: "Catechist", href: "/participant/catechist" },
      { name: "Catechumen", href: "/participant/catechumen" },
      { name: "Representative", href: "/participant/representative" },
    ],
  },
  { name: "About", href: "/about", icon: InformationCircleIcon },
];

export default function Sidebar(props: SidebarProps) {
  const { sidebarOpen, setSidebarOpen } = props;

  return (
    <>
      {/* Mobile */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          {/* Backdrop fade */}
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black" />
          </TransitionChild>

          <div className="fixed inset-0 flex">
            {/* Panel slide */}
            <TransitionChild
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex w-full max-w-xs flex-col bg-gray-900 p-6">
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="absolute top-0 right-0 m-2 text-gray-400 hover:text-white"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
                {/* Logo */}
                <div className="flex h-16 items-center">
                  <Image
                    alt="Catequizandos"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                    width={40}
                    height={40}
                  />
                </div>
                {/* Nav items */}
                <nav className="mt-8 space-y-2">
                  {menu.map((item) =>
                    item.children ? (
                      <div key={item.name}>
                        <div className="flex items-center text-gray-400">
                          <item.icon className="h-6 w-6" />
                          <span className="ml-2 text-sm font-semibold">
                            {item.name}
                          </span>
                        </div>
                        <div className="mt-2 ml-8 space-y-1">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setSidebarOpen(false)}
                              className="block rounded-md px-2 py-1 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className="flex items-center rounded-md px-2 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                      >
                        <item.icon className="h-6 w-6" />
                        <span className="ml-2 text-sm font-medium">
                          {item.name}
                        </span>
                      </Link>
                    )
                  )}
                </nav>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col bg-gray-900 p-6">
        <nav className="space-y-4">
          {menu.map((item) =>
            item.children ? (
              <div key={item.name}>
                <div className="flex items-center text-gray-400">
                  <item.icon className="h-6 w-6" />
                  <span className="ml-2 text-sm font-semibold">
                    {item.name}
                  </span>
                </div>
                <div className="mt-2 ml-8 space-y-1">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block rounded-md px-2 py-1 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center rounded-md px-2 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <item.icon className="h-6 w-6" />
                <span className="ml-2 text-sm font-medium">{item.name}</span>
              </Link>
            )
          )}
        </nav>
      </div>
    </>
  );
}
