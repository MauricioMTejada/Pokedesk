import { useTheme } from "next-themes";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";


export const Navbar = () => {
    const { theme } = useTheme();

    console.log(theme);


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
        />

        <text>P</text>
        <text>ókemon</text>
        <Spacer style={{ flex: 1}}/>
        <text> Favoritos </text>
    </div>
  )
}
