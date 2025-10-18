/**
 * FishOp Mobile - Gestion du timer
 */

import { state } from '../state.js';

let timerInterval = null;

/**
 * Démarre le timer
 */
export function startTimer() {
    timerInterval = setInterval(() => {
        const currentState = state.get();
        const newMinutes = currentState.minutes + 1;
        const hours = Math.floor(newMinutes / 60);
        const mins = newMinutes % 60;

        state.set({
            minutes: newMinutes,
            trackingTime: `${hours}h ${mins.toString().padStart(2, '0')}min`
        });
    }, 60000); // Toutes les minutes

    state.set({ timer: timerInterval });
}

/**
 * Arrête le timer
 */
export function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        state.set({ timer: null });
    }
}

/**
 * Réinitialise le timer
 */
export function resetTimer() {
    stopTimer();
    state.set({
        minutes: 0,
        trackingTime: '0h 00min'
    });
}