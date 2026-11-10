import Image from 'next/image';
import Link from 'next/link';

export function SectionFrame({ title, children, breadcrumb, wide = false, eyebrow = 'АЗИМУТ' }) {
  return <main className="relative min-h-screen overflow-x-hidden bg-white px-5 pb-16 pt-12 text-slate-700 dark:bg-[#03000a] dark:text-slate-200 sm:px-8 sm:pt-16">
    <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
      <div className="absolute inset-0 dark:hidden"><Image src="/bank-bg-light.jpg" alt="" fill unoptimized className="object-cover object-center brightness-95" /></div>
      <div className="absolute inset-0 hidden dark:block"><Image src="/bank-bg-dark.jpg" alt="" fill unoptimized className="object-cover object-center" /></div>
    </div>
    <div className={`relative mx-auto w-full ${wide ? 'max-w-[1800px]' : 'max-w-6xl'} space-y-8 sm:space-y-10`}>
      {breadcrumb && <nav aria-label="Навигация" className="flex flex-wrap gap-2 text-sm font-medium text-slate-500 dark:text-slate-300"><Link href="/" className="hover:text-sky-600">Главная</Link><span>/</span><Link href={breadcrumb.href} className="hover:text-sky-600 dark:hover:text-purple-300">{breadcrumb.label}</Link><span>/</span><span>{title}</span></nav>}
      <header className="mx-auto max-w-4xl text-center">
        <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-black uppercase tracking-wider text-sky-600 dark:border-purple-500/30 dark:bg-purple-950/40 dark:text-purple-300">{eyebrow}</span>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-sky-600 dark:text-purple-300 sm:text-4xl md:text-5xl">{title}</h1>
      </header>
      {children}
    </div>
  </main>;
}

export function HubTiles({ items }) {
  return <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
    {items.map((item) => <Link key={item.href} href={item.href} className="group flex min-h-[190px] items-center rounded-[28px] border border-blue-100/60 bg-white/80 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:border-purple-500/20 dark:bg-purple-950/10 dark:hover:border-[#634EE4] dark:hover:bg-[#634EE4] dark:focus-visible:outline-purple-400 sm:min-h-[220px]">
      <h2 className="text-2xl font-black leading-tight text-slate-800 group-hover:text-white dark:text-white">{item.title}</h2>
    </Link>)}
  </div>;
}
