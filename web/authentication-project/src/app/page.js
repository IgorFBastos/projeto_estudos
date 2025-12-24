import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href="pages/login" className="text-indigo-600 hover:underline">
              Login
      </Link>
    </div>
  );
}
