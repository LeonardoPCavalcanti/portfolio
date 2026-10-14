import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useT } from '../../i18n/useT';
import { ui } from '../../i18n/ui';
import { profile } from '../../data/profile';
import { featured } from '../../data/projects';
import Polaroid from '../ui/Polaroid';
import TalkCard from '../ui/TalkCard';
import photoWebp from '../../assets/me/leo-1200.webp';
import photoPng from '../../assets/me/leo-1200.png';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Coreografia de entrada (≤ 1,2 s): o nome sobe letra por letra sob máscara
 * enquanto a foto assenta; frase, local, polaroide e cartão chegam depois, em
 * sequência curta. No scroll, a marca d'água e a foto se movem em velocidades
 * diferentes (profundidade). Com movimento reduzido, tudo nasce no lugar.
 */
export default function Hero() {
  const { t } = useT();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const ghostY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const lead = featured[0];
  const letters = profile.firstName.toUpperCase().split('');

  const enter = (delay: number) =>
    reduce
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: EASE },
        };

  return (
    <section id="top" ref={ref} className="hero-grid relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-orange text-white">
      <motion.p
        aria-hidden
        style={{ y: ghostY }}
        className="pointer-events-none absolute inset-x-0 top-[max(9vh,6rem)] select-none whitespace-nowrap text-center text-[clamp(48px,15.5vw,230px)] font-black leading-none tracking-crush text-white/[0.12]"
      >
        {profile.lastName.toUpperCase()}
      </motion.p>

      {/* Três camadas: centralização (CSS), parallax (scroll) e entrada; cada uma dona do seu transform. */}
      <div className="absolute bottom-0 left-1/2 z-10 h-[min(88svh,780px)] -translate-x-[46%] max-md:h-[62svh]">
        <motion.div style={{ y: photoY }} className="h-full">
          <motion.picture
            className="block h-full"
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 40, scale: 1.03 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  transition: { duration: 0.9, ease: EASE },
                })}
          >
            <source srcSet={photoWebp} type="image/webp" />
            <img
              src={photoPng}
              alt={t(ui.hero.photoAlt)}
              width={894}
              height={1200}
              // React 18 só repassa o atributo em minúsculas.
              {...{ fetchpriority: 'high' }}
              className="h-full w-auto max-w-none object-contain object-bottom"
            />
          </motion.picture>
        </motion.div>
      </div>

      <div className="container-x relative z-20 flex flex-1 flex-col pb-8 pt-[calc(max(9vh,6rem)+min(15.5vw,230px)+1rem)]">
        <motion.p {...enter(0.25)} className="max-w-[270px] text-xs font-semibold uppercase leading-relaxed md:text-[13px]">
          {t(profile.lede)}
        </motion.p>

        <div className="mt-auto flex items-end justify-between gap-6">
          <div>
            <motion.p {...enter(0.35)} className="mb-3 font-mono text-xs">
              {t(ui.hero.place)}
            </motion.p>
            <h1 aria-label={profile.fullName} className="flex overflow-hidden text-[clamp(64px,13vw,190px)] font-black leading-[0.82] tracking-crush">
              {letters.map((ch, i) => (
                <motion.span
                  key={i}
                  aria-hidden
                  className="inline-block"
                  {...(reduce
                    ? {}
                    : {
                        initial: { y: '105%' },
                        animate: { y: '0%' },
                        transition: { duration: 0.7, delay: 0.1 + i * 0.04, ease: EASE },
                      })}
                >
                  {ch}
                </motion.span>
              ))}
            </h1>
          </div>
          <motion.div {...enter(0.55)} className="hidden lg:block">
            <TalkCard kicker={t(ui.hero.talkKicker)} name={`${profile.firstName} ${profile.lastName}`} role={t(ui.hero.talkRole)} href="#contato" />
          </motion.div>
        </div>
      </div>

      {lead.shot && (
        <motion.div {...enter(0.45)} className="absolute right-[4vw] top-[18vh] z-20 hidden lg:block">
          <Polaroid
            image={lead.shot}
            alt={t(lead.shotAlt ?? { pt: lead.name, en: lead.name })}
            title={lead.name}
            tag={`/${t(lead.role).split(' · ')[0].toLowerCase()}`}
            href={lead.links.site ?? '#projetos'}
          />
        </motion.div>
      )}
    </section>
  );
}
