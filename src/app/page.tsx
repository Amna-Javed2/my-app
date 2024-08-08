import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24 gap-5">
      <Link href={"react"}>React Learning</Link>
      Step03, 04 & 05 settings setting1 setting2 setting3
      <div>settings/setting1</div>
      <div>settings/setting2</div>
      <div>settings/setting3</div>
    </main>
  );
}
