import Image from 'next/image';

export default function Projects() {
	return (
		<section
			id="projects"
			className="py-10 px-6 md:px-12 
			bg-gradient-to-b from-blue-50 to-blue-100 
			dark:from-zinc-950 dark:to-zinc-900 
			rounded-3xl shadow-lg transition-all duration-500"
		>
			<h3 className="text-lg uppercase tracking-widest font-semibold 
				text-blue-700 dark:text-zinc-100 
				border-b border-blue-200 dark:border-zinc-700 
				pb-2 mb-8 text-center">
				Projects
			</h3>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Proyek 1 */}
				<div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-md 
					hover:shadow-xl transition-all duration-300 p-6 flex flex-col border border-transparent dark:border-zinc-800">
					<Image
						alt="Arsip Digital"
						src="/Arsip.jpg"
						className="w-full aspect-video rounded-2xl object-cover shadow-md hover:scale-[1.02] transition-transform duration-300"
						width={800}
						height={500}
					/>
					<div className="mt-5 flex flex-col justify-between flex-grow">
						<div>
							<h4 className="text-xl font-semibold text-blue-900 dark:text-zinc-100 mb-3">
								Sistem Informasi Arsip Digital
							</h4>
							<p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
								Aplikasi Arsip Digital merupakan sistem yang dirancang untuk mempermudah proses pengelolaan, penyimpanan, dan pencarian dokumen secara elektronik.
								Dengan antarmuka yang sederhana dan terstruktur, aplikasi ini membantu admin maupun pengguna dalam menjaga kerapian data arsip organisasi.
							</p>
						</div>
						<div className="flex flex-wrap gap-2 mt-4">
							<span className="px-3 py-1 bg-blue-100 dark:bg-zinc-800 text-blue-700 dark:text-zinc-200 rounded-full text-xs font-medium">
								Arsip Digital
							</span>
							<span className="px-3 py-1 bg-blue-100 dark:bg-zinc-800 text-blue-700 dark:text-zinc-200 rounded-full text-xs font-medium">
								Sistem Informasi
							</span>
							<span className="px-3 py-1 bg-blue-100 dark:bg-zinc-800 text-blue-700 dark:text-zinc-200 rounded-full text-xs font-medium">
								Manajemen Dokumen
							</span>
						</div>
					</div>
				</div>

				{/* Proyek 2 */}
				<div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-md 
					hover:shadow-xl transition-all duration-300 p-6 flex flex-col border border-transparent dark:border-zinc-800">
					<Image
						alt="Game Batu Kertas Gunting"
						src="/games.jpg"
						className="w-full aspect-video rounded-2xl object-cover shadow-md hover:scale-[1.02] transition-transform duration-300"
						width={800}
						height={500}
					/>
					<div className="mt-5 flex flex-col justify-between flex-grow">
						<div>
							<h4 className="text-xl font-semibold text-blue-900 dark:text-zinc-100 mb-3">
								Game Batu Kertas Gunting
							</h4>
							<p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
								Game Batu Kertas Gunting merupakan permainan sederhana berbasis web yang dikembangkan menggunakan HTML, CSS, dan JavaScript.
								Pemain dapat memilih antara batu, kertas, atau gunting untuk melawan pilihan acak dari komputer.
								Setiap ronde akan menampilkan hasil kemenangan, kekalahan, atau seri secara interaktif.
							</p>
						</div>
						<div className="flex flex-wrap gap-2 mt-4">
							<span className="px-3 py-1 bg-blue-100 dark:bg-zinc-800 text-blue-700 dark:text-zinc-200 rounded-full text-xs font-medium">
								Game Web
							</span>
							<span className="px-3 py-1 bg-blue-100 dark:bg-zinc-800 text-blue-700 dark:text-zinc-200 rounded-full text-xs font-medium">
								Javascript
							</span>
							<span className="px-3 py-1 bg-blue-100 dark:bg-zinc-800 text-blue-700 dark:text-zinc-200 rounded-full text-xs font-medium">
								Interaktif
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
