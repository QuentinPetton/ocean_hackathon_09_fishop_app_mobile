/**
 * FishOp Mobile - Écran de photo
 */

import { icons } from '../utils/icons.js';

export function renderPhotoScreen(state) {
    return `
        <div style="min-height: 100vh; height: 100%; display: flex; flex-direction: column;" class="camera-view">
            <div style="flex: 1; position: relative;">
                <!-- Zone de prévisualisation caméra -->
                <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
                    <div style="color: #4b5563;">
                        ${icons.cameraBig}
                    </div>
                </div>

                <!-- Header avec bouton retour et info GPS -->
                <div style="position: absolute; top: 40px; left: 16px; right: 16px; display: flex; justify-content: space-between; align-items: start; z-index: 10;">
                    <button onclick="changeScreen('tracking')" style="padding: 12px; background: rgba(0, 0, 0, 0.5); border-radius: 50%; color: white; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                        ${icons.x}
                    </button>
                </div>

                <!-- Info IA -->
                <div style="position: absolute; bottom: 16px; left: 16px; right: 16px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 16px; padding: 16px; color: white;">
                    <p style="font-size: 13px; margin-bottom: 8px; opacity: 0.8;">L'IA analysera automatiquement:</p>
                    <ul style="font-size: 12px; opacity: 0.9; line-height: 1.6; list-style: none; padding: 0; margin: 0;">
                        <li>• Espèces de poissons/poulpes</li>
                        <li>• Quantité et taille des captures</li>
                        <li>• Coordonnées GPS du casier</li>
                    </ul>
                </div>
            </div>

            <!-- Bouton de capture -->
            <div style="padding: 24px; background: #111827;">
                <button onclick="changeScreen('analysis')" style="width: 80px; height: 80px; margin: 0 auto; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: none; cursor: pointer; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3); transition: transform 0.2s;">
                    <div style="width: 64px; height: 64px; border: 4px solid #0d9488; border-radius: 50%;"></div>
                </button>
            </div>
        </div>
    `;
}