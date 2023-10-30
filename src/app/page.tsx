import { MyCombobox } from "@/components/MyCombobox";

export default function Home() {
  return (
    <>
      <header className="text-center text-white py-6 px-2">
        <h1 className="text-4xl font-bold">
          My autocomplete
        </h1>
        <h2 className="text-xl font-medium">
          with Next.js + HeadlessUI
        </h2>
      </header>
      <MyCombobox />
    </>
  )
}
