/**
 * FishOp Mobile - Application principale
 * Point d'entrée de l'application avec architecture modulaire
 */

import { state } from './state.js';
import { startTimer, stopTimer } from './utils/timer.js';
import { renderTrackingScreen } from './screens/tracking.js';
import { renderPhotoScreen } from './screens/photo.js';
import { renderAnalysisScreen } from './screens/analysis.js';
import { renderFeedbackScreen } from './screens/feedback.js';

// ========================================
// Rendu de l'application
// ========================================

/**
 * Fonction principale de rendu
 * Sélectionne l'écran approprié en fonction de l'état
 */
function render() {
    const app = document.getElementById('app');
    const currentState = state.get();
    let content = '';

    switch(currentState.screen) {
        case 'tracking':
            content = renderTrackingScreen(currentState);
            break;
        case 'photo':
            content = renderPhotoScreen(currentState);
            break;
        case 'analysis':
            content = renderAnalysisScreen(currentState);
            break;
        case 'feedback':
            content = renderFeedbackScreen(currentState);
            break;
    }

    app.innerHTML = content;
}

// ========================================
// Actions globales (exposées au window)
// ========================================

/**
 * Change l'écran affiché
 */
window.changeScreen = function(screen) {
    state.set({ screen });
};

/**
 * Active/désactive le tracking
 */
window.toggleTracking = function() {
    const currentState = state.get();
    const newTrackingState = !currentState.trackingActive;

    if (newTrackingState) {
        startTimer();
        state.set({ trackingActive: true });
    } else {
        stopTimer();
        state.set({
            trackingActive: false,
            screen: 'feedback'
        });
    }
};

/**
 * Incrémente le compteur de casiers et retourne à l'écran photo
 */
window.addCasier = function() {
    const currentState = state.get();
    state.set({
        casiersDetected: currentState.casiersDetected + 1,
        screen: 'photo'
    });
};

/**
 * Termine le tracking et réinitialise l'état
 */
window.endTracking = function() {
    stopTimer();
    state.reset();
};

/**
 * Enregistre le feedback utilisateur
 */
window.selectFeedback = function(type) {
    state.set({ selectedFeedback: type });
    console.log('Feedback sélectionné:', type);
    // TODO: Envoyer le feedback au backend
};

// ========================================
// Initialisation
// ========================================

// S'abonne aux changements d'état pour re-render automatiquement
state.subscribe(render);

// Rendu initial
render();