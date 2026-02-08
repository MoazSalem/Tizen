import { useCallback, useEffect } from 'react';
import { Spotlight } from '@enact/spotlight';
import Spottable from '@enact/spotlight/Spottable';
import Scroller from '@enact/sandstone/Scroller';
import Slider from '@enact/sandstone/Slider';
import { useSettings } from '../../context/SettingsContext';
import {
    SUBTITLE_SIZE_OPTIONS,
    SUBTITLE_COLOR_OPTIONS,
    SUBTITLE_POSITION_OPTIONS,
    SUBTITLE_SHADOW_COLOR_OPTIONS,
    SUBTITLE_BACKGROUND_COLOR_OPTIONS
} from '../../utils/subtitleConstants';
import css from './Player.module.less';

const SpottableButton = Spottable('button');

const SubtitleSettingsOverlay = ({ visible, onClose }) => {
    const { settings, updateSetting } = useSettings();

    const cycleOption = useCallback((key, options) => {
        const currentIndex = options.findIndex(o => o.value === settings[key]);
        const nextIndex = (currentIndex + 1) % options.length;
        updateSetting(key, options[nextIndex].value);
    }, [settings, updateSetting]);

    const getLabel = (key, options) => {
        const option = options.find(o => o.value === settings[key]);
        return option ? option.label : 'Unknown';
    };

    // Set initial focus when opening
    useEffect(() => {
        if (visible) {
            setTimeout(() => {
                Spotlight.focus('subtitle-settings-size');
            }, 100);
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <div className={css.trackModal} onClick={onClose}>
            <div
                className={`${css.modalContent} ${css.settingsModal}`}
                onClick={(e) => e.stopPropagation()}
                data-modal="subtitle-settings"
                spotlightId="subtitle-settings-container"
            >
                <h2 className={css.modalTitle}>Subtitle Appearance</h2>

                <Scroller
                    horizontalScrollbar="hidden"
                    verticalScrollbar="visible"
                    style={{ flex: 1, minHeight: 0 }}
                >
                    <div className={css.trackList}>
                        {/* Size */}
                        <SpottableButton
                            spotlightId="subtitle-settings-size"
                            className={css.settingItem}
                            onClick={() => cycleOption('subtitleSize', SUBTITLE_SIZE_OPTIONS)}
                        >
                            <span className={css.settingLabel}>Size</span>
                            <span className={css.settingValue}>{getLabel('subtitleSize', SUBTITLE_SIZE_OPTIONS)}</span>
                        </SpottableButton>

                        {/* Position */}
                        <SpottableButton
                            spotlightId="subtitle-settings-position"
                            className={css.settingItem}
                            onClick={() => cycleOption('subtitlePosition', SUBTITLE_POSITION_OPTIONS)}
                        >
                            <span className={css.settingLabel}>Position</span>
                            <span className={css.settingValue}>{getLabel('subtitlePosition', SUBTITLE_POSITION_OPTIONS)}</span>
                        </SpottableButton>

                        {/* Absolute Position (Conditional) */}
                        {settings.subtitlePosition === 'absolute' && (
                            <div className={css.sliderItem}>
                                <div className={css.sliderLabel}>
                                    <span>Absolute Position</span>
                                    <span className={css.sliderValue}>{settings.subtitlePositionAbsolute}%</span>
                                </div>
                                <Slider
                                    min={0}
                                    max={100}
                                    step={5}
                                    value={settings.subtitlePositionAbsolute}
                                    onChange={(e) => updateSetting('subtitlePositionAbsolute', e.value)}
                                    className={css.settingsSlider}
                                    tooltip={false}
                                />
                            </div>
                        )}

                        {/* Opacity */}
                        <div className={css.sliderItem}>
                            <div className={css.sliderLabel}>
                                <span>Opacity</span>
                                <span className={css.sliderValue}>{settings.subtitleOpacity}%</span>
                            </div>
                            <Slider
                                min={0}
                                max={100}
                                step={5}
                                value={settings.subtitleOpacity}
                                onChange={(e) => updateSetting('subtitleOpacity', e.value)}
                                className={css.settingsSlider}
                                tooltip={false}
                            />
                        </div>

                        {/* Text Color */}
                        <SpottableButton
                            spotlightId="subtitle-settings-color"
                            className={css.settingItem}
                            onClick={() => cycleOption('subtitleColor', SUBTITLE_COLOR_OPTIONS)}
                        >
                            <span className={css.settingLabel}>Text Color</span>
                            <span className={css.settingValue}>{getLabel('subtitleColor', SUBTITLE_COLOR_OPTIONS)}</span>
                        </SpottableButton>

                        <div className={css.divider} />

                        {/* Shadow Settings */}
                        <SpottableButton
                            spotlightId="subtitle-settings-shadow-color"
                            className={css.settingItem}
                            onClick={() => cycleOption('subtitleShadowColor', SUBTITLE_SHADOW_COLOR_OPTIONS)}
                        >
                            <span className={css.settingLabel}>Shadow Color</span>
                            <span className={css.settingValue}>{getLabel('subtitleShadowColor', SUBTITLE_SHADOW_COLOR_OPTIONS)}</span>
                        </SpottableButton>

                        <div className={css.sliderItem}>
                            <div className={css.sliderLabel}>
                                <span>Shadow Opacity</span>
                                <span className={css.sliderValue}>{settings.subtitleShadowOpacity}%</span>
                            </div>
                            <Slider
                                min={0}
                                max={100}
                                step={5}
                                value={settings.subtitleShadowOpacity}
                                onChange={(e) => updateSetting('subtitleShadowOpacity', e.value)}
                                className={css.settingsSlider}
                                tooltip={false}
                            />
                        </div>

                        <div className={css.sliderItem}>
                            <div className={css.sliderLabel}>
                                <span>Shadow Size (Blur)</span>
                                <span className={css.sliderValue}>{settings.subtitleShadowBlur.toFixed(1)}</span>
                            </div>
                            <Slider
                                min={0}
                                max={1}
                                step={0.1}
                                value={settings.subtitleShadowBlur}
                                onChange={(e) => updateSetting('subtitleShadowBlur', e.value)}
                                className={css.settingsSlider}
                                tooltip={false}
                            />
                        </div>

                        <div className={css.divider} />

                        {/* Background Settings */}
                        <SpottableButton
                            spotlightId="subtitle-settings-background-color"
                            className={css.settingItem}
                            onClick={() => cycleOption('subtitleBackgroundColor', SUBTITLE_BACKGROUND_COLOR_OPTIONS)}
                        >
                            <span className={css.settingLabel}>Background Color</span>
                            <span className={css.settingValue}>{getLabel('subtitleBackgroundColor', SUBTITLE_BACKGROUND_COLOR_OPTIONS)}</span>
                        </SpottableButton>

                        <div className={css.sliderItem}>
                            <div className={css.sliderLabel}>
                                <span>Background Opacity</span>
                                <span className={css.sliderValue}>{settings.subtitleBackground}%</span>
                            </div>
                            <Slider
                                min={0}
                                max={100}
                                step={5}
                                value={settings.subtitleBackground}
                                onChange={(e) => updateSetting('subtitleBackground', e.value)}
                                className={css.settingsSlider}
                                tooltip={false}
                            />
                        </div>
                    </div>

                    <p className={css.modalFooter}>
                        <SpottableButton
                            spotlightId="subtitle-settings-close"
                            className={css.closeBtn}
                            onClick={onClose}
                        >
                            Close
                        </SpottableButton>
                    </p>
                </Scroller>
            </div>
        </div>
    );
};

export default SubtitleSettingsOverlay;
