import { Metadata } from "next";
import Image from "next/image";
import COMPUTER from "../../assets/computer.jpg";

export const metadata: Metadata = {
	title: "About",
	description: "About",
};

export default function AboutPage() {
	return (
		<div className="h-screen">
			<section className="p-20">
				<div className="container mx-auto">
					<div className="flex justify-center">
						<div className="flex flex-col gap-5 text-center">
							<div className="flex flex-col gap-3">
								<h1 className="font-bold text-6xl">Roxana Narela Camara</h1>
								<p className="text-gray-500 text-sm">
									Senior Full Stack Web Developer (React, Node js, MySql)
								</p>
							</div>
							<a
								href="#"
								className="bg-gray-50 mx-auto w-32 text-center rounded-md p-2 border border-1 border-gray-100 hover:bg-white">
								Hire me!
							</a>
						</div>
					</div>
				</div>
			</section>
			<section id="about" className="sm:p-10 lg:p-20 bg-gray-50">
				<div className="container mx-auto">
					<div className="sm:columns-2">
						<Image
							width={800}
							height={800}
							alt="User photo"
							className="w-2/2 mb-10 sm:mb-0"
							src={COMPUTER}
						/>
						<div>
							<h2 className="text-bold text-2xl mb-3">
								Full Stack Web Developer
							</h2>
							<p className="mb-5 text-sm text-gray-400">
								Providing web solutions
							</p>
							<p className="text-gray-500 text-justify leading-10">
								Hello there! I&aposm a full stack web developer, and I&aposm
								very passionate and dedicated to my work. With more than 5 years
								of experience as a professional web developer, With this time
								period I have acquired the skills and knowledge necessary to
								make your project a success. I enjoy every step of the
								development process, from discussion and collaboration.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="about" className="sm:p-10 lg:p-20 bg-gray-50">
				<div className="container mx-auto">
					<div className="sm:columns-2">
						<div>
							<h2 className="text-bold text-2xl mb-3">
								Providing web solutions
							</h2>
							<p className="mb-5 text-sm text-gray-400">
								Providing web solutions
							</p>
							<p className="text-gray-500 text-justify leading-10">
								Hello there! I&aposm a full stack web developer, and I&aposm
								very passionate and dedicated to my work. With more than 5 years
								of experience as a professional web developer, With this time
								period I have acquired the skills and knowledge necessary to
								make your project a success. I enjoy every step of the
								development process, from discussion and collaboration.
							</p>
						</div>
						<Image
							width={800}
							height={800}
							alt="User photo"
							className="w-2/2 mb-10 sm:mb-0"
							src={COMPUTER}
						/>
					</div>
				</div>
			</section>

			<section id="services" className="sm:p-10 lg:p-20 p-5">
				<div className="sm:container mx-auto">
					<h2 className="text-center text-4xl font-bold pt-10 sm:pt-0 pb-10">
						Services
					</h2>
					<div className="sm:grid grid-cols-2">
						<div className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
							<h3 className="text-xl mb-5 font-bold">Web Design</h3>
							<p className="leading-10 text-gray-500 text-justify">
								As a dedicated web design professional, I bring a creative and
								strategic approach to crafting visually stunning and
								user-centric websites. With a keen eye for aesthetics and a
								commitment to delivering exceptional user experiences, my goal
								is to translate your brand identity into a captivating online
								presence.
							</p>
						</div>

						<div className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
							<h3 className="text-xl mb-5 font-bold">Web Development</h3>
							<p className="leading-10 text-gray-500 text-justify">
								As a seasoned web development professional, I offer
								comprehensive and tailored services to meet the diverse needs of
								businesses seeking a strong online presence. With a rich
								background in both front-end and back-end technologies, I
								specialize in crafting visually appealing and highly functional
								websites and web applications.
							</p>
						</div>

						<div className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
							<h3 className="text-xl mb-5 font-bold">Issue Fixing</h3>
							<p className="leading-10 text-gray-500 text-justify">
								Offering dedicated issue-fixing services, I bring a meticulous
								and solutions-oriented approach to address and resolve a wide
								array of challenges that may arise in your digital landscape.
								With a focus on efficiency and precision, I specialize in
								diagnosing and remedying issues across web applications,
								websites, and software systems.
							</p>
						</div>

						<div className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
							<h3 className="text-xl mb-5 font-bold">Server Management</h3>
							<p className="leading-10 text-gray-500 text-justify">
								Specializing in server management services, I offer a
								comprehensive solution to ensure the seamless and secure
								operation of your digital infrastructure. With expertise in
								configuring, monitoring, and optimizing server environments, I
								am committed to enhancing the reliability and performance of
								your servers.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="lg:p-20 p-5" id="portfolio">
				<div className="lg:container mx-auto">
					<h2 className="text-center text-4xl font-bold pb-10">Portfolio</h2>
					<div className="lg:columns-4 sm:columns-2">
						<div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
							<h3 className="text-xl mb-5">Food Delivery</h3>
							<Image
								width={150}
								height={150}
								alt="User_photo"
								className="rounded-md h-48 max-h-48 w-full"
								src="https://rabiulislam.dev/documents/images/portfolio/food-delivery.jpg"
							/>
						</div>

						<div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
							<h3 className="text-xl mb-5">CMS</h3>
							<Image
								width={150}
								height={150}
								alt="User_photo"
								className="rounded-md h-48 max-h-48 w-full"
								src="https://rabiulislam.dev/documents/images/portfolio/cms.jpg"
							/>
						</div>

						<div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
							<h3 className="text-xl mb-5">LMS</h3>
							<Image
								width={150}
								height={150}
								alt="User_photo"
								className="rounded-md h-48 max-h-48 w-full"
								src="https://rabiulislam.dev/documents/images/portfolio/lms.jpg"
							/>
						</div>

						<div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
							<h3 className="text-xl mb-5">SDR</h3>
							<Image
								width={150}
								height={150}
								alt="User_photo"
								className="rounded-md h-48 max-h-48 w-full"
								src="https://rabiulislam.dev/documents/images/portfolio/sdr.jpg"
							/>
						</div>

						<div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
							<h3 className="text-xl mb-5">VetQ</h3>
							<Image
								width={150}
								height={150}
								alt="User_photo"
								className="rounded-md h-48 max-h-48 w-full"
								src="https://rabiulislam.dev/documents/images/portfolio/vetq.jpg"
							/>
						</div>

						<div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
							<h3 className="text-xl mb-5">Ismile</h3>
							<Image
								width={150}
								height={150}
								alt="User_photo"
								className="rounded-md h-48 max-h-48 w-full"
								src="https://rabiulislam.dev/documents/images/portfolio/ismile.jpg"
							/>
						</div>

						<div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
							<h3 className="text-xl mb-5">Ehaul</h3>
							<Image
								width={150}
								height={150}
								alt="User_photo"
								className="rounded-md h-48 max-h-48 w-full"
								src="https://rabiulislam.dev/documents/images/portfolio/ecommerce.jpg"
							/>
						</div>

						<div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
							<h3 className="text-xl mb-5">Feedback</h3>
							<Image
								width={150}
								height={150}
								alt="User_photo"
								className="rounded-md h-48 max-h-48 w-full"
								src="https://rabiulislam.dev/documents/images/portfolio/feedback.jpg"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="sm:p-20 p-5" id="contact">
				<div className="sm:container mx-auto">
					<h2 className="text-center text-4xl font-bold pb-10">Contact</h2>
					<div className="w-full sm:flex">
						<div className="sm:w-1/2 w-full">
							<div className="mb-5">
								<h3 className="text-xl">Address</h3>
								<p className="text-gray-500">Khulna, Bangladesh</p>
							</div>

							<div className="mb-5">
								<h3 className="text-xl">Email</h3>
								<a className="text-gray-500" href="mailto:rir.cse.71@gmail.com">
									rir.cse.71@gmail.com
								</a>
							</div>

							<div className="mb-5">
								<h3 className="text-xl">Email</h3>
								<a className="text-gray-500" href="https:wa.me/01750009149">
									+8801750009149
								</a>
							</div>
						</div>

						<div className="sm:w-1/2 w-full bg-gray-50 p-10 rounded-md">
							<form action="#">
								<div className="mt-5 grid grid-cols-1 gap-y-8 sm:grid-cols-6">
									<div className="sm:col-span-4">
										<label
											form="username"
											className="block text-sm font-medium leading-6 text-gray-900">
											Name
										</label>
										<input
											type="text"
											name="username"
											id="username"
											className="block w-full outline-1 border border-1 flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
											placeholder="Rabiul Islam"
										/>
									</div>
								</div>

								<div className="mt-5 grid grid-cols-1  gap-y-8 sm:grid-cols-6">
									<div className="sm:col-span-4">
										<label
											form="subject"
											className="block text-sm font-medium leading-6 text-gray-900">
											Subject
										</label>
										<input
											type="text"
											name="subject"
											id="subject"
											className="block w-full outline-1 border border-1 flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
											placeholder="Hiring"
										/>
									</div>
								</div>

								<div className="mt-5 grid grid-cols-1  gap-y-8 sm:grid-cols-6">
									<div className="sm:col-span-4">
										<label
											form="message"
											className="block text-sm font-medium leading-6 text-gray-900">
											Message
										</label>
										<textarea
											name="message"
											id="message"
											className="block w-full outline-1 border border-1 flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
											placeholder="Message"></textarea>
									</div>
								</div>

								<div className="mt-5 grid grid-cols-1 gap-y-8 sm:grid-cols-6">
									<a
										href="#"
										className="bg-gray-200 mx-auto w-32 text-center rounded-md p-2 border border-1 border-gray-100 hover:bg-white">
										Submit
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			<footer className="bg-gray-50 lg:p-20 p-10">
				<section className="container mx-auto">
					<div className="sm:grid justify-between sm:grid-cols-2 lg:grid-cols-4">
						<div className="mt-10 sm:mt-0">
							<h3 className="text-xl font-bold">Quick links</h3>
							<ul>
								<li className="m-3 hover:text-gray-500">
									<a href="#about">About</a>
								</li>
								<li className="m-3 hover:text-gray-500">
									<a href="#services">Services</a>
								</li>
								<li className="m-3 hover:text-gray-500">
									<a href="#portfolio">Portfolio</a>
								</li>
								<li className="m-3 hover:text-gray-500">
									<a href="#contact">Contact</a>
								</li>
							</ul>
						</div>

						<div className="mt-10 sm:mt-0">
							<h3 className="text-xl font-bold">Quick links</h3>
							<ul>
								<li className="m-3 hover:text-gray-500">
									<a href="#about">About</a>
								</li>
								<li className="m-3 hover:text-gray-500">
									<a href="#services">Services</a>
								</li>
								<li className="m-3 hover:text-gray-500">
									<a href="#portfolio">Portfolio</a>
								</li>
								<li className="m-3 hover:text-gray-500">
									<a href="#contact">Contact</a>
								</li>
							</ul>
						</div>

						<div className="mt-10 sm:mt-0">
							<h3 className="text-xl font-bold">Quick links</h3>
							<ul>
								<li className="m-3 hover:text-gray-500">
									<a href="#about">About</a>
								</li>
								<li className="m-3 hover:text-gray-500">
									<a href="#services">Services</a>
								</li>
								<li className="m-3 hover:text-gray-500">
									<a href="#portfolio">Portfolio</a>
								</li>
								<li className="m-3 hover:text-gray-500">
									<a href="#contact">Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</footer>
		</div>
	);
}
