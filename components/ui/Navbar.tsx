import { useTheme } from "next-themes";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";


export const Navbar = () => {
    const { theme } = useTheme();

  return (
    <div style={{
        display:'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        // backgroundColor: theme?.colors.gray900.value
    }}>

        <Image
            src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="icono de la app"
            width={70}
            height={70}
            // priority={false}
            priority={true}
        />

        <Link href='/'>
          <div className="flex items-center">
            <span className="text-4xl">P</span>
            <span className="text-xl">ókemon</span>
          </div>
        </Link>
        <Spacer style={{ flex: 1}}/>
        <Link href='/favorites'>
          <span> Favoritos </span>
        </Link>
    </div>
  )
}
