import Image from "next/image";

export default function Home() {
	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-3 bg-blue-100">
				<div>Booking</div>
				<div className="col-span-2 bg-red-100 order-first md:order-last">
					Map
				</div>
			</div>
		</div>
	);
}
