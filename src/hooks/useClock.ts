import { useEffect, useState } from 'react';

/**
 * Retorna o horário atual de Brasília (BRT / UTC-3) formatado como "HH:MM AM/PM",
 * atualizado a cada segundo. Usa o timeZone 'America/Sao_Paulo' para ficar
 * correto independentemente do fuso do visitante.
 */
export function useClock(): string {
  const [time, setTime] = useState<string>('--:-- --');

  useEffect(() => {
    const format = (): string =>
      new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(new Date());

    // Atualiza imediatamente e depois a cada segundo.
    setTime(format());
    const id = window.setInterval(() => setTime(format()), 1000);

    return () => window.clearInterval(id);
  }, []);

  return time;
}
