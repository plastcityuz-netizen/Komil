import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'IZO PLUS — Penaplast Zavodi | Sifatli EPS Penaplast', description:'IZO PLUS Penaplast Zavodi — qurilish va issiqlik izolyatsiyasi uchun sifatli EPS penaplast mahsulotlari.', openGraph:{title:'IZO PLUS — Penaplast Zavodi',description:'Sifatli EPS penaplast mahsulotlari.'} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="uz"><body>{children}</body></html>}
