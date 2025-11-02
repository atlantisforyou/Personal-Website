export default function Contact() {
	return (
		<section id="contact" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wider font-medium text-zinc-500 dark:text-zinc-300">
				Contact
			</h3>

			<p className="text-zinc-800 dark:text-zinc-200">
				Let’s collaborate or connect to build something great together!
			</p>

			<div className="flex flex-col md:flex-row items-center gap-4 mt-6">
				<span className="text-zinc-600 dark:text-zinc-300">
					elinanurhaliza50@gmail.com
				</span>

				<a
					href="https://github.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-x-2 text-zinc-600 dark:text-zinc-300 hover:text-blue-500 transition-colors"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="w-5 h-5 flex-shrink-0"
						fill="currentColor"
						aria-label="GitHub logo"
					>
						<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.24-.02-2.25-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.0.4 11.5 11.5 0 013.0-.4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.82 1.1.82 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
					</svg>
					<span>GitHub</span>
				</a>
			</div>
		</section>
	);
}
