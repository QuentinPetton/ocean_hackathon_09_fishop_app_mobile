/**
 * FishOp Mobile - Écran d'analyse
 */

import { icons } from '../utils/icons.js';

export function renderAnalysisScreen(state) {
    return `
        <div style="min-height: 100vh; height: 100%; display: flex; flex-direction: column; background: white;">

            <!-- Contenu -->
            <div style="flex: 1; padding: 24px; overflow-y: auto;">
                <!-- Image preview -->
                <div style="background: #f3f4f6; border-radius: 16px; padding: 16px; margin-bottom: 24px;">
                    <div style="aspect-ratio: 16/9; background: #d1d5db; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                        <div style="color: #6b7280;">
                            ${icons.cameraBig}
                        </div>
                    </div>
                </div>

                <!-- Résultats -->
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <!-- Détection réussie -->
                    <div style="background: #dcfce7; border: 2px solid #86efac; border-radius: 16px; padding: 16px;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <div style="color: #16a34a;">
                                ${icons.check}
                            </div>
                            <h3 style="font-weight: bold; color: #166534; margin: 0;">Détection réussie</h3>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 14px;">
                            <div style="display: flex; justify-content: space-between;">
                                <span style="color: #4b5563;">Espèce:</span>
                                <span style="font-weight: 600;">Poulpe commun</span>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span style="color: #4b5563;">Quantité:</span>
                                <span style="font-weight: 600;">2 spécimens</span>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span style="color: #4b5563;">Taille moyenne:</span>
                                <span style="font-weight: 600;">~45 cm</span>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span style="color: #4b5563;">Coordonnées:</span>
                                <span style="font-weight: 600; font-size: 12px;">48.42°N, 4.51°W</span>
                            </div>
                        </div>
                    </div>

                    <!-- Réglementation -->
                    <div style="background: #dbeafe; border: 2px solid #93c5fd; border-radius: 16px; padding: 16px;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <div style="color: #2563eb;">
                                ${icons.alertCircle}
                            </div>
                            <h3 style="font-weight: bold; color: #1e40af; margin: 0;">Réglementation</h3>
                        </div>
                        <p style="font-size: 14px; color: #374151; line-height: 1.6; margin: 0;">
                            ✓ Taille minimale respectée<br />
                            ✓ Quota journalier: 2/15
                        </p>
                    </div>
                </div>
            </div>

            <!-- Boutons -->
            <div style="padding: 24px; border-top: 1px solid #e5e7eb; display: flex; flex-direction: column; gap: 12px;">
                <button onclick="addCasier()" class="btn-primary" style="background: #0d9488; color: white;">
                    Saisir un nouveau bac
                </button>
                <button onclick="changeScreen('tracking')" class="btn-secondary">
                    Retour
                </button>
            </div>
        </div>
    `;
}