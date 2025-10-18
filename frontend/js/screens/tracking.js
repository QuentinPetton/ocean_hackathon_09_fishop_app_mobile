/**
 * FishOp Mobile - Écran de tracking/géolocalisation
 */

import { icons } from '../utils/icons.js';

export function renderTrackingScreen(state) {
    return `
        <div style="min-height: 100vh; height: 100%; display: flex; flex-direction: column;" class="gradient-bg">
            <!-- Header -->
            <div style="padding: 40px 24px 24px; color: white;">
                <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 32px;">
                    <div style="background: rgba(255, 255, 255, 0.95); padding: 16px 24px; border-radius: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
                        <img src="./assets/logo_fishOp-removebg-preview.png" alt="FishOp" style="height: 50px; width: auto; display: block;">
                    </div>
                </div>
            </div>

            <!-- Contenu central -->
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; padding: 0 24px;">
                <div style="width: 120px; height: 120px; background: rgba(255, 255, 255, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;" class="${state.trackingActive ? 'animate-pulse' : ''}">
                    ${icons.navigation}
                </div>

                <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 12px; text-align: center;">
                    ${state.trackingActive ? 'Géolocalisation active' : 'Prêt à démarrer'}
                </h2>

                <p style="text-align: center; opacity: 0.9; margin-bottom: 32px; line-height: 1.5;">
                    ${state.trackingActive
            ? 'Votre position est enregistrée. Nous détecterons automatiquement les arrêts.'
            : 'Appuyez sur Démarrer pour lancer le suivi de votre sortie en mer'}
                </p>

                ${state.trackingActive ? `
                    <div style="background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border-radius: 16px; padding: 20px; margin-bottom: 24px; width: 100%; max-width: 300px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <span style="font-size: 14px;">Temps écoulé</span>
                            <span style="font-weight: bold; font-size: 16px;">${state.trackingTime}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 14px;">Arrêts détectés</span>
                            <span style="font-weight: bold; font-size: 16px;">${state.casiersDetected}</span>
                        </div>
                    </div>
                ` : ''}
            </div>

            <!-- Boutons -->
            <div style="padding: 24px; display: flex; flex-direction: column; gap: 12px;">
                ${state.trackingActive ? `
                    <button onclick="changeScreen('photo')" style="background: white; color: #0f766e; font-weight: bold; padding: 16px; border-radius: 9999px; width: 100%; border: none; cursor: pointer; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); display: flex; align-items: center; justify-content: center; gap: 8px;">
                        ${icons.camera}
                        Photographier un bac
                    </button>
                ` : ''}

                <button onclick="toggleTracking()" class="${state.trackingActive ? 'btn-danger' : 'btn-primary'}">
                    ${state.trackingActive ? 'Arrêter la sortie' : 'Démarrer'}
                </button>
            </div>
        </div>
    `;
}