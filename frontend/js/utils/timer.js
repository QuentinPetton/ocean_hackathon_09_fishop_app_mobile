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
        const newSeconds = currentState.seconds + 1;
        const hours = Math.floor(newSeconds / 3600);
        const mins = Math.floor((newSeconds % 3600) / 60);
        const secs = newSeconds % 60;

        state.set({
            seconds: newSeconds,
            trackingTime: `${hours}h ${mins.toString().padStart(2, '0')}min ${secs.toString().padStart(2, '0')}s`
        });
    }, 1000); // Toutes les secondes

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
        seconds: 0,
        trackingTime: '0h 00min 00s'
    });
}