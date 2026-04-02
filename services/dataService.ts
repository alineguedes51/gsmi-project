import type { PhDataPoint, WeekSelection } from '../types';
import { WeekSelection as WeekSelectionEnum } from '../types';

// --- Dados Manuais ---

// Dados definidos manualmente para a "Semana Anterior"
const previousWeekData: PhDataPoint[] = [
    { day: 'Seg', ph: 7.0 },
    { day: 'Ter', ph: 7.1 },
    { day: 'Qua', ph: 7.0 },
    { day: 'Qui', ph: 7.1 },
    { day: 'Sex', ph: 6.9 },

];

// Dados definidos manualmente para a "Semana Atual"
const currentWeekData: PhDataPoint[] = [
    { day: 'Seg', ph: 7.1 },
    { day: 'Ter', ph: 7.0 },
    { day: 'Qua', ph: 7.0 },
    { day: 'Qui', ph: 6.9 },
    { day: 'Sex', ph: 7.0 },

];

export const fetchPhData = (week: WeekSelection): Promise<PhDataPoint[]> => {
    return new Promise((resolve) => {
        // Simula o tempo de espera da rede
        setTimeout(() => {
            if (week === WeekSelectionEnum.Current) {
                resolve(currentWeekData);
            } else {
                resolve(previousWeekData);
            }
        }, 500);
    });
};
