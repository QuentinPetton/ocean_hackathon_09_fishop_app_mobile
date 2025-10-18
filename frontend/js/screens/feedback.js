/**
 * FishOp Mobile - Écran de feedback
 */

export function renderFeedbackScreen(state) {
    return `
        <div style="min-height: 100vh; height: 100%; display: flex; flex-direction: column; background: white;">
            <!-- Header -->
            <div style="background: #0d9488; color: white; padding: 14px 24px;">
                <h2 style="font-size: 24px; font-weight: bold; margin: 0 0 4px 0;">Fin de sortie</h2>
                <p style="font-size: 14px; opacity: 0.9; margin: 0;">Partagez votre retour d'expérience</p>
            </div>

            <!-- Contenu -->
            <div style="flex: 1; padding: 24px; overflow-y: auto;">
                <!-- Résumé -->
                <div style="background: #f9fafb; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
                    <h3 style="font-weight: bold; margin: 0 0 16px 0;">Résumé de la sortie</h3>
                    <div style="display: flex; flex-direction: column; gap: 12px; font-size: 14px;">
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #6b7280;">Durée:</span>
                            <span style="font-weight: 600;">${state.trackingTime}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #6b7280;">Arrêts détectés:</span>
                            <span style="font-weight: 600;">2</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #6b7280;">Captures:</span>
                            <span style="font-weight: 600;">5 poulpes</span>
                        </div>
                    </div>
                </div>

                <!-- Évaluation -->
                <div style="margin-bottom: 24px;">
                    <label style="display: block; font-weight: bold; margin-bottom: 12px;">
                        La préconisation était-elle correcte ?
                    </label>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
                        <button
                            onclick="selectFeedback('bad')"
                            id="feedback-bad"
                            style="padding: 16px; background: #fee2e2; border: 2px solid #fca5a5; border-radius: 16px; cursor: pointer; transition: all 0.2s; transform: scale(${state.selectedFeedback === 'bad' ? '1.05' : '1'}); box-shadow: ${state.selectedFeedback === 'bad' ? '0 8px 16px rgba(220, 38, 38, 0.3)' : 'none'}; opacity: ${state.selectedFeedback && state.selectedFeedback !== 'bad' ? '0.5' : '1'};">
                            <div style="font-size: 32px; margin-bottom: 4px;">😞</div>
                            <div style="font-size: 12px; font-weight: 600; color: #991b1b;">Mauvais</div>
                        </button>
                        <button
                            onclick="selectFeedback('ok')"
                            id="feedback-ok"
                            style="padding: 16px; background: #fef3c7; border: 2px solid #fde047; border-radius: 16px; cursor: pointer; transition: all 0.2s; transform: scale(${state.selectedFeedback === 'ok' ? '1.05' : '1'}); box-shadow: ${state.selectedFeedback === 'ok' ? '0 8px 16px rgba(234, 179, 8, 0.3)' : 'none'}; opacity: ${state.selectedFeedback && state.selectedFeedback !== 'ok' ? '0.5' : '1'};">
                            <div style="font-size: 32px; margin-bottom: 4px;">😐</div>
                            <div style="font-size: 12px; font-weight: 600; color: #854d0e;">Moyen</div>
                        </button>
                        <button
                            onclick="selectFeedback('good')"
                            id="feedback-good"
                            style="padding: 16px; background: #dcfce7; border: 2px solid #86efac; border-radius: 16px; cursor: pointer; transition: all 0.2s; transform: scale(${state.selectedFeedback === 'good' ? '1.05' : '1'}); box-shadow: ${state.selectedFeedback === 'good' ? '0 8px 16px rgba(22, 163, 74, 0.3)' : 'none'}; opacity: ${state.selectedFeedback && state.selectedFeedback !== 'good' ? '0.5' : '1'};">
                            <div style="font-size: 32px; margin-bottom: 4px;">😊</div>
                            <div style="font-size: 12px; font-weight: 600; color: #166534;">Très bon</div>
                        </button>
                    </div>
                </div>

                <!-- Commentaires -->
                <div>
                    <label style="display: block; font-weight: bold; margin-bottom: 12px;">Commentaires (optionnel)</label>
                    <textarea
                        style="width: 90%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 16px; resize: none; font-size: 14px;"
                        rows="4"
                        placeholder="Partagez vos observations..."
                    ></textarea>
                </div>
            </div>

            <!-- Boutons -->
            <div style="padding: 24px; border-top: 1px solid #e5e7eb; display: flex; flex-direction: column; gap: 12px;">
                <button onclick="endTracking()" class="btn-primary" style="background: #0d9488; color: white;">
                    Envoyer et terminer
                </button>
                <button onclick="changeScreen('tracking')" style="background: transparent; border: none; color: #6b7280; font-weight: 600; padding: 8px; cursor: pointer;">
                    Ignorer
                </button>
            </div>
        </div>
    `;
}