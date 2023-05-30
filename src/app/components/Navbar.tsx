"use client";
import { useEffect, useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firestore";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const users = auth.currentUser;
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe(); // Unsubscribe from the auth state change listener
    };
  }, []);

  const handleSignOut = async () => {
    const auth = getAuth();
    await auth.signOut();
  };

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Link href="/" className="flex justify-center items-center">
              <Image width={50} height={50} src="/hospital.png" alt="Logo" />
              <h2 className="pl-2 text-lg text-bold">Care Finder</h2>
            </Link>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 items-center">
          <Link href="#" className="text-sm font-semibold leading-6 ">
            Documentaion
          </Link>
          <Link href="/about" className="text-sm font-semibold leading-6 ">
            About
          </Link>
          {user ? (
            <>
              <Link
                href="/hospitals/add"
                className="text-sm font-semibold leading-6 "
              >
                Add Hospital
              </Link>
              <Link
                href="/hospitals/edit"
                className="text-sm font-semibold leading-6 "
              >
                Edit Hospital
              </Link>
              <Link
                href="/hospitals/export"
                className="text-sm font-semibold leading-6 "
              >
                Export Data
              </Link>
            </>
          ) : (
            <button></button>
          )}
          <ThemeToggle />
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <button>
              <Link href="/login" className="text-sm font-semibold leading-6 ">
                Log in
              </Link>
            </button>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image width={50} height={50} src="/hospital.png" alt="Logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                {user ? (
                  <button onClick={handleSignOut}>Sign Out</button>
                ) : (
                  <button>
                    <Link
                      href="/login"
                      className="text-sm font-semibold leading-6 "
                    >
                      Log in
                    </Link>
                  </button>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;
