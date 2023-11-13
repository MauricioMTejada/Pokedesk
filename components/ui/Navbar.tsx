import { useTheme } from "next-themes";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";


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

        <span>P</span>
        <span>ókemon</span>
        <Spacer style={{ flex: 1}}/>
        <span> Favoritos </span>
    </div>
  )
}
