/**
 * FishOp Mobile - Gestion de l'état de l'application
 * Pattern Observer pour notifier les changements d'état
 */

class AppState {
    constructor() {
        this.data = {
            screen: 'tracking',
            trackingActive: false,
            trackingTime: '0h 00min',
            casiersDetected: 0,
            timer: null,
            minutes: 0
        };
        this.listeners = [];
    }

    /**
     * Récupère l'état actuel
     */
    get() {
        return this.data;
    }

    /**
     * Met à jour l'état et notifie les listeners
     */
    set(updates) {
        this.data = { ...this.data, ...updates };
        this.notify();
    }

    /**
     * Abonne un listener aux changements d'état
     */
    subscribe(listener) {
        this.listeners.push(listener);
    }

    /**
     * Notifie tous les listeners
     */
    notify() {
        this.listeners.forEach(listener => listener(this.data));
    }

    /**
     * Réinitialise l'état à zéro
     */
    reset() {
        this.set({
            screen: 'tracking',
            trackingActive: false,
            trackingTime: '0h 00min',
            casiersDetected: 0,
            minutes: 0
        });
    }
}

// Export d'une instance unique (Singleton)
export const state = new AppState();