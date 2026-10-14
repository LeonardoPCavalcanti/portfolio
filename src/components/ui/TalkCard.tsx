import thumb from '../../assets/me/leo-thumb.webp';

interface TalkCardProps {
  kicker: string;
  name: string;
  role: string;
  href: string;
}

export default function TalkCard({ kicker, name, role, href }: TalkCardProps) {
  return (
    <a href={href} className="group flex w-[260px] items-center gap-3 rounded-lg bg-ink p-2.5 text-white">
      <img src={thumb} alt="" width={48} height={48} className="h-12 w-12 rounded bg-orange-bright object-cover" />
      <span className="text-[11px] leading-tight">
        <span className="block text-white/55">{kicker}</span>
        <span className="block text-[13px] font-extrabold">{name}</span>
        <span className="block text-white/55">{role}</span>
      </span>
      <span
        aria-hidden
        className="ml-auto grid h-7 w-7 place-items-center rounded bg-white font-bold text-ink transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      >
        ↗
      </span>
    </a>
  );
}
