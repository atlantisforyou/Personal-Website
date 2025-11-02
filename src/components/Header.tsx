import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-center text-center rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-800 p-8 bg-white dark:bg-zinc-900">
      <Image
        className="rounded-full border-4 border-zinc-200 dark:border-zinc-700 shadow-sm mb-4"
        src="/elina.jpg"
        alt="Foto Elina Nurhaliza"
        width={130}
        height={130}
      />
      
      <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
        Elina Nurhaliza
      </h1>
      <h2 className="text-lg font-light text-zinc-600 dark:text-zinc-300">
        Mahasiswa STITEK Bontang
      </h2>

      <div className="mt-4 bg-zinc-100 dark:bg-zinc-800 px-5 py-2 rounded-lg inline-block">
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
          SEKOLAH TINGGI TEKNOLOGI BONTANG
        </span>
      </div>
    </header>
  );
}
