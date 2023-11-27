import { useTheme } from "next-themes";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
	const { theme } = useTheme();

	return (
		<div className="flex justify-between items-center pl-5 pr-10">
			<div className="flex items-center">
				<Image
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
					alt="icono de la app"
					width={70}
					height={70}
					priority={true}
				/>

				<Link href="/">
					<div className="flex items-center font-bold">
						<span className="text-4xl">P</span>
						<span className="text-xl">ókemon</span>
					</div>
				</Link>
			</div>

			{/* <Spacer style={{ flex: 1}}/> */}
			<Link href="/favorites">
				<span className="text-xl font-bold pr-70"> Favoritos </span>
			</Link>
		</div>
	);
};
