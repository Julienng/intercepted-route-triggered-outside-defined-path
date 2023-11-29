import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex gap-1">
        <div>shortcuts</div>
        <Link
          className="underline text-blue-500 visited:text-purple-500"
          href={"/user/1"}
        >
          shortcut user 1
        </Link>
        <Link
          className="underline text-blue-500 visited:text-purple-500"
          href={"/user/2"}
        >
          shortcut user 2
        </Link>
      </div>
    </main>
  );
}
