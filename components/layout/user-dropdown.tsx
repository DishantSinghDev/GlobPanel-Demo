import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { LayoutDashboard, LogOut, Settings, User } from "lucide-react";
import Popover from "@/components/shared/popover";
import Image from "next/image";
import { motion } from "framer-motion";
import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { useRouter } from "next/router";
import Link from "next/link";
import LoadingDots from "../shared/icons/loading-dots";

export default function UserDropdown() {
  const router = useRouter();
  const pageName = router.pathname.split("/")[1];
  const { data: session } = useSession();
  const { email, image } = session?.user || {};
  const [openPopover, setOpenPopover] = useState(false);
  const [signInClicked, setSignInClicked] = useState(false);

  if (!email) return null;

  return (
    <motion.div
      className="relative inline-block text-left"
      {...FADE_IN_ANIMATION_SETTINGS}
    >
      <Popover
        content={
          <div className="w-full rounded-md bg-white p-2 md:w-56">
            <Link
              className="relative flex w-full items-center justify-center md:justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
              href="/dashboard"
            >
              <LayoutDashboard className="h-4 w-4" />
              <p className="text-sm">Dashboard</p>
            </Link>
            <Link
              className={`${
                pageName === "my-account" ? "bg-gray-200 hover:bg-gray-200" : ""
              } relative flex w-full items-center justify-center md:justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100`}
              href="/my-account"
            >
              <User className="h-4 w-4" />
              <p className="text-sm">My Account</p>
            </Link>
            <Link
              className={`${
                pageName === "settings" ? "bg-gray-200 hover:bg-gray-200" : ""
              } relative flex w-full items-center justify-center md:justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100`}
              href="/settings"
            >
              <Settings className="h-4 w-4" />
              <p className="text-sm">Settings</p>
            </Link>
            <button
              className="relative flex w-full items-center justify-center md:justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
              onClick={() => {
                signOut({ redirect: false });
                setSignInClicked(true);
              }}
            >
              {signInClicked ? (
                <LoadingDots color="#808080" className="relative flex w-full items-center justify-center md:justify-start space-x-2 rounded-md p-2"/>
              ) : (
                <>
                  <LogOut className="h-4 w-4" />
                  <p className="text-sm">Logout</p>
                </>
              )}
            </button>
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9"
        >
          <Image
            alt={email}
            src={image || `https://avatars.dicebear.com/api/micah/${email}.svg`}
            width={40}
            height={40}
            draggable={false}
          />
        </button>
      </Popover>
    </motion.div>
  );
}
