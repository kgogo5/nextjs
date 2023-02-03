import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <>
      <nav>
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </nav>

      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
        }

        .active {
          color: tomato;
        }
      `}</style>
    </>
  );
}
