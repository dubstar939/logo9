import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Check, Search, Download, RotateCcw, Layout, Type, Palette, Image as ImageIcon } from 'lucide-react';
import { icons, industryIcons, getIconById, IconData } from '../data/icons';
import { colorPalettes, fontOptions, industries, layoutOptions } from '../data/options';
import { toPng } from 'html-to-image';

// Types
export interface LogoConfig {
  businessName: string;
  tagline: string;
  industry: string;
  selectedIconId: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  fontId: string;
  fontWeight: number;
  layoutId: string;
  iconSize: number;
  fontSize: number;
  letterSpacing: number;
  showTagline: boolean;
  taglineSize: number;
  bgColor: string;
  borderRadius: number;
  iconRotation: number;
}

interface LogoWizardProps {
  onBack: () => void;
}

type Step = 'info' | 'industry' | 'colors' | 'generate' | 'edit' | 'download';

const defaultConfig: LogoConfig = {
  businessName: '',
  tagline: '',
  industry: '',
  selectedIconId: 'abstract-3',
  primaryColor: '#4c6ef5',
  secondaryColor: '#748ffc',
  textColor: '#1a1a2e',
  fontId: 'montserrat',
  fontWeight: 700,
  layoutId: 'icon-top',
  iconSize: 48,
  fontSize: 28,
  letterSpacing: 1,
  showTagline: true,
  taglineSize: 14,
  bgColor: '#ffffff',
  borderRadius: 0,
  iconRotation: 0,
};

const LogoWizard: React.FC<LogoWizardProps> = ({ onBack }) => {
  const [step, setStep] = useState<Step>('info');
  const [config, setConfig] = useState<LogoConfig>(defaultConfig);
  const [generatedLogos, setGeneratedLogos] = useState<LogoConfig[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPalette, setSelectedPalette] = useState<string | null>(null);
  const [editTab, setEditTab] = useState<'icon' | 'text' | 'colors' | 'layout'>('icon');
  const logoRef = useRef<HTMLDivElement>(null);

  const updateConfig = useCallback((updates: Partial<LogoConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  }, []);

  // Step 1: Business Info
  const renderInfoStep = () => (
    <div className="animate-fade-in-up max-w-lg mx-auto">
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-gradient-to-br from-brand-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">What's your business name?</h2>
        <p className="text-gray-500">Let's start creating your perfect logo</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Business Name *</label>
          <input
            type="text"
            value={config.businessName}
            onChange={(e) => updateConfig({ businessName: e.target.value })}
            placeholder="e.g., Acme Corp"
            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Tagline (optional)</label>
          <input
            type="text"
            value={config.tagline}
            onChange={(e) => updateConfig({ tagline: e.target.value })}
            placeholder="e.g., Innovation at its finest"
            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            onClick={onBack}
            className="px-6 py-4 rounded-2xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-all"
          >
            Back
          </button>
          <button
            onClick={() => config.businessName.trim() && setStep('industry')}
            disabled={!config.businessName.trim()}
            className="flex-1 bg-gradient-to-r from-brand-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-brand-500/25 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  // Step 2: Industry Selection
  const renderIndustryStep = () => (
    <div className="animate-fade-in-up max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">What's your industry?</h2>
        <p className="text-gray-500">We'll suggest relevant icons and styles for your business</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {industries.map((ind) => (
          <button
            key={ind.id}
            onClick={() => {
              updateConfig({ industry: ind.name });
              setStep('colors');
            }}
            className={`p-5 rounded-2xl border-2 transition-all duration-200 hover:scale-105 text-left group ${
              config.industry === ind.name
                ? 'border-brand-500 bg-brand-50 shadow-lg shadow-brand-500/10'
                : 'border-gray-200 hover:border-brand-300 hover:bg-gray-50'
            }`}
          >
            <span className="text-3xl block mb-2">{ind.emoji}</span>
            <span className="font-semibold text-gray-800 text-sm">{ind.name}</span>
          </button>
        ))}
      </div>

      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>
    </div>
  );

  // Step 3: Color Preferences
  const renderColorsStep = () => (
    <div className="animate-fade-in-up max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Pick your colors</h2>
        <p className="text-gray-500">Choose a color palette that represents your brand</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {colorPalettes.map((palette) => (
          <button
            key={palette.id}
            onClick={() => {
              setSelectedPalette(palette.id);
              updateConfig({
                primaryColor: palette.colors[1],
                secondaryColor: palette.colors[2],
                textColor: palette.colors[0],
              });
            }}
            className={`p-4 rounded-2xl border-2 transition-all duration-200 hover:scale-105 ${
              selectedPalette === palette.id
                ? 'border-brand-500 shadow-lg shadow-brand-500/10'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex gap-1 mb-3">
              {palette.colors.map((color, i) => (
                <div
                  key={i}
                  className="flex-1 h-8 rounded-lg"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">{palette.name}</span>
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setStep('industry')}
          className="px-6 py-4 rounded-2xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-all"
        >
          Back
        </button>
        <button
          onClick={() => {
            generateLogos();
            setStep('generate');
          }}
          className="flex-1 bg-gradient-to-r from-brand-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-brand-500/25 transition-all flex items-center justify-center gap-2"
        >
          Generate Logos
          <Sparkles className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  // Generate logos
  const generateLogos = () => {
    const iconIds = industryIcons[config.industry] || industryIcons['Other'];
    const fontIds = ['montserrat', 'poppins', 'playfair', 'raleway', 'oswald', 'inter'];
    const layoutIds = ['icon-top', 'icon-left', 'icon-right', 'icon-badge'];

    const logos: LogoConfig[] = [];

    for (const iconId of iconIds) {
      for (const fontId of fontIds.slice(0, 3)) {
        for (const layoutId of layoutIds.slice(0, 2)) {
          logos.push({
            ...config,
            selectedIconId: iconId,
            fontId,
            layoutId,
            iconSize: 40 + Math.floor(Math.random() * 20),
            fontSize: 22 + Math.floor(Math.random() * 12),
          });
        }
      }
    }

    // Shuffle and limit
    const shuffled = logos.sort(() => Math.random() - 0.5).slice(0, 24);
    setGeneratedLogos(shuffled);
  };

  // Step 4: Logo Grid
  const renderGenerateStep = () => (
    <div className="animate-fade-in-up max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Your logo options</h2>
        <p className="text-gray-500">Click on a logo you like to customize it further</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {generatedLogos.map((logo, i) => (
          <button
            key={i}
            onClick={() => {
              setConfig(logo);
              setStep('edit');
            }}
            className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-brand-400 hover:shadow-lg hover:shadow-brand-500/10 transition-all duration-200 hover:scale-105 group aspect-square flex flex-col items-center justify-center"
          >
            <LogoPreview config={logo} size="small" />
          </button>
        ))}
      </div>

      <div className="flex gap-3 justify-center">
        <button
          onClick={() => setStep('colors')}
          className="px-6 py-4 rounded-2xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-all"
        >
          Back
        </button>
        <button
          onClick={() => {
            generateLogos();
          }}
          className="px-6 py-4 rounded-2xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-all flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Generate More
        </button>
      </div>
    </div>
  );

  // Step 5: Editor
  const renderEditStep = () => {
    // Editor tab state is managed at component level

    const filteredIcons = searchQuery
      ? icons.filter(ic => ic.name.toLowerCase().includes(searchQuery.toLowerCase()) || ic.category.toLowerCase().includes(searchQuery.toLowerCase()))
      : config.industry
        ? (industryIcons[config.industry] || []).map(id => getIconById(id)).filter(Boolean) as IconData[]
        : icons;

    return (
      <div className="animate-fade-in-up">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Preview Panel */}
          <div className="lg:w-1/2">
            <div className="sticky top-8">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-2 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="ml-2 text-xs text-gray-400 font-medium">Logo Preview</span>
                </div>
                <div className="p-12 flex items-center justify-center min-h-[400px]" style={{ backgroundColor: config.bgColor }}>
                  <div ref={logoRef}>
                    <LogoPreview config={config} size="large" />
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-3 mt-4 justify-center">
                <button
                  onClick={() => {
                    generateLogos();
                    setStep('generate');
                  }}
                  className="px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-all flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Browse More
                </button>
                <button
                  onClick={() => setStep('download')}
                  className="px-8 py-3 bg-gradient-to-r from-brand-500 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-brand-500/25 transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* Editor Panel */}
          <div className="lg:w-1/2">
            {/* Tabs */}
            <div className="flex gap-1 bg-gray-100 rounded-2xl p-1.5 mb-6">
              {([
                { id: 'icon', label: 'Icon', icon: ImageIcon },
                { id: 'text', label: 'Text', icon: Type },
                { id: 'colors', label: 'Colors', icon: Palette },
                { id: 'layout', label: 'Layout', icon: Layout },
              ] as const).map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setEditTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all ${
                    editTab === tab.id
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Icon Tab */}
            {editTab === 'icon' && (
              <div className="animate-fade-in">
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search icons..."
                    className="w-full pl-12 pr-5 py-3.5 border-2 border-gray-200 rounded-2xl focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-6 gap-3 max-h-[500px] overflow-y-auto pr-2">
                  {filteredIcons.map((icon) => (
                    <button
                      key={icon.id}
                      onClick={() => updateConfig({ selectedIconId: icon.id })}
                      className={`aspect-square rounded-xl border-2 flex items-center justify-center transition-all hover:scale-110 ${
                        config.selectedIconId === icon.id
                          ? 'border-brand-500 bg-brand-50 shadow-md'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      title={icon.name}
                    >
                      <svg
                        viewBox={icon.viewBox}
                        className="w-6 h-6"
                        fill="none"
                        stroke={config.selectedIconId === icon.id ? '#4c6ef5' : '#6b7280'}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={icon.path} />
                      </svg>
                    </button>
                  ))}
                </div>

                {/* Icon Size */}
                <div className="mt-6 p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Icon Size</span>
                    <span className="text-sm text-gray-500">{config.iconSize}px</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={config.iconSize}
                    onChange={(e) => updateConfig({ iconSize: Number(e.target.value) })}
                    className="w-full accent-brand-500"
                  />
                </div>

                {/* Icon Rotation */}
                <div className="mt-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Icon Rotation</span>
                    <span className="text-sm text-gray-500">{config.iconRotation}°</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={config.iconRotation}
                    onChange={(e) => updateConfig({ iconRotation: Number(e.target.value) })}
                    className="w-full accent-brand-500"
                  />
                </div>
              </div>
            )}

            {/* Text Tab */}
            {editTab === 'text' && (
              <div className="animate-fade-in space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Business Name</label>
                  <input
                    type="text"
                    value={config.businessName}
                    onChange={(e) => updateConfig({ businessName: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tagline</label>
                  <input
                    type="text"
                    value={config.tagline}
                    onChange={(e) => updateConfig({ tagline: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Font Family</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-[400px] overflow-y-auto pr-2">
                    {fontOptions.map((font) => (
                      <button
                        key={font.id}
                        onClick={() => updateConfig({ fontId: font.id })}
                        className={`px-4 py-4 rounded-xl border-2 text-left transition-all ${
                          config.fontId === font.id
                            ? 'border-brand-500 bg-brand-50 shadow-md'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="text-xs text-gray-500 block mb-1">{font.name}</span>
                        <span 
                          className="text-base" 
                          style={{ fontFamily: font.family }}
                        >
                          {config.businessName || 'Sample'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Font Weight</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: 'light', value: 300, label: 'Light' },
                      { id: 'regular', value: 400, label: 'Regular' },
                      { id: 'medium', value: 500, label: 'Medium' },
                      { id: 'semibold', value: 600, label: 'SemiBold' },
                      { id: 'bold', value: 700, label: 'Bold' },
                      { id: 'extrabold', value: 800, label: 'ExtraBold' },
                      { id: 'black', value: 900, label: 'Black' },
                    ].map((weight) => (
                      <button
                        key={weight.id}
                        onClick={() => updateConfig({ fontWeight: weight.value })}
                        className={`px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                          config.fontWeight === weight.value
                            ? 'border-brand-500 bg-brand-50 text-brand-700'
                            : 'border-gray-200 hover:border-gray-300 text-gray-600'
                        }`}
                        style={{ fontWeight: weight.value }}
                      >
                        {weight.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Font Size</span>
                    <span className="text-sm text-gray-500">{config.fontSize}px</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="60"
                    value={config.fontSize}
                    onChange={(e) => updateConfig({ fontSize: Number(e.target.value) })}
                    className="w-full accent-brand-500"
                  />
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Letter Spacing</span>
                    <span className="text-sm text-gray-500">{config.letterSpacing}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.5"
                    value={config.letterSpacing}
                    onChange={(e) => updateConfig({ letterSpacing: Number(e.target.value) })}
                    className="w-full accent-brand-500"
                  />
                </div>
              </div>
            )}

            {/* Colors Tab */}
            {editTab === 'colors' && (
              <div className="animate-fade-in space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Color Palettes</label>
                  <div className="grid grid-cols-4 gap-2">
                    {colorPalettes.map((palette) => (
                      <button
                        key={palette.id}
                        onClick={() => {
                          updateConfig({
                            primaryColor: palette.colors[1],
                            secondaryColor: palette.colors[2],
                            textColor: palette.colors[0],
                          });
                        }}
                        className="p-2 rounded-xl border-2 border-gray-200 hover:border-brand-400 transition-all"
                      >
                        <div className="flex gap-0.5">
                          {palette.colors.map((color, i) => (
                            <div key={i} className="flex-1 h-5 rounded" style={{ backgroundColor: color }} />
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2">Primary</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={config.primaryColor}
                        onChange={(e) => updateConfig({ primaryColor: e.target.value })}
                        className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={config.primaryColor}
                        onChange={(e) => updateConfig({ primaryColor: e.target.value })}
                        className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg text-sm font-mono focus:border-brand-500 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2">Text</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={config.textColor}
                        onChange={(e) => updateConfig({ textColor: e.target.value })}
                        className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={config.textColor}
                        onChange={(e) => updateConfig({ textColor: e.target.value })}
                        className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg text-sm font-mono focus:border-brand-500 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2">Background</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={config.bgColor}
                        onChange={(e) => updateConfig({ bgColor: e.target.value })}
                        className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={config.bgColor}
                        onChange={(e) => updateConfig({ bgColor: e.target.value })}
                        className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg text-sm font-mono focus:border-brand-500 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Layout Tab */}
            {editTab === 'layout' && (
              <div className="animate-fade-in space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Layout</label>
                  <div className="grid grid-cols-3 gap-3">
                    {layoutOptions.map((layout) => (
                      <button
                        key={layout.id}
                        onClick={() => updateConfig({ layoutId: layout.id })}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                          config.layoutId === layout.id
                            ? 'border-brand-500 bg-brand-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-center h-12 mb-2">
                          <LayoutMiniPreview layoutId={layout.id} color={config.primaryColor} />
                        </div>
                        <span className="text-xs font-medium text-gray-700">{layout.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Tagline Size</span>
                    <span className="text-sm text-gray-500">{config.taglineSize}px</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="24"
                    value={config.taglineSize}
                    onChange={(e) => updateConfig({ taglineSize: Number(e.target.value) })}
                    className="w-full accent-brand-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Step 6: Download
  const renderDownloadStep = () => {
    const [downloading, setDownloading] = useState(false);
    const downloadRef = useRef<HTMLDivElement>(null);

    const handleDownload = async (format: 'png' | 'svg') => {
      if (format === 'png' && downloadRef.current) {
        setDownloading(true);
        try {
          const dataUrl = await toPng(downloadRef.current, {
            quality: 1,
            backgroundColor: config.bgColor,
            width: 1024,
            height: 1024,
            style: { transform: 'scale(2)', transformOrigin: 'top left' },
          });
          const link = document.createElement('a');
          link.download = `${config.businessName.replace(/\s+/g, '-').toLowerCase()}-logo.png`;
          link.href = dataUrl;
          link.click();
        } catch (err) {
          console.error('Download failed:', err);
        }
        setDownloading(false);
      }
    };

    return (
      <div className="animate-fade-in-up max-w-3xl mx-auto text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-3">Your logo is ready!</h2>
        <p className="text-gray-500 mb-10">Download your logo and start using it everywhere</p>

        {/* Preview */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8 inline-block">
          <div className="p-16 flex items-center justify-center" style={{ backgroundColor: config.bgColor }}>
            <div ref={downloadRef}>
              <LogoPreview config={config} size="large" />
            </div>
          </div>
        </div>

        {/* Mockup previews */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {/* Business Card Mockup */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 aspect-[1.6] flex flex-col items-center justify-center">
              <div className="scale-50">
                <LogoPreview config={config} size="small" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 font-medium">Business Card</p>
          </div>

          {/* Social Media Mockup */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 aspect-square flex items-center justify-center">
              <div className="scale-50">
                <LogoPreview config={config} size="small" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 font-medium">Social Profile</p>
          </div>

          {/* T-Shirt Mockup */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 aspect-[0.8] flex items-center justify-center">
              <div className="scale-50">
                <LogoPreview config={config} size="small" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 font-medium">T-Shirt</p>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex gap-4 justify-center mb-8">
          <button
            onClick={() => handleDownload('png')}
            disabled={downloading}
            className="bg-gradient-to-r from-brand-500 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-brand-500/25 transition-all flex items-center gap-2 disabled:opacity-60"
          >
            <Download className="w-5 h-5" />
            {downloading ? 'Preparing...' : 'Download PNG'}
          </button>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setStep('edit')}
            className="px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-all"
          >
            Edit More
          </button>
          <button
            onClick={() => {
              setConfig(defaultConfig);
              setStep('info');
              setSelectedPalette(null);
              setGeneratedLogos([]);
            }}
            className="px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-all"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  };

  // Step indicator
  const steps: { id: Step; label: string }[] = [
    { id: 'info', label: 'Info' },
    { id: 'industry', label: 'Industry' },
    { id: 'colors', label: 'Colors' },
    { id: 'generate', label: 'Options' },
    { id: 'edit', label: 'Edit' },
    { id: 'download', label: 'Download' },
  ];

  const currentStepIndex = steps.findIndex(s => s.id === step);

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </button>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-400 to-accent-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-gray-900">LogoMaker</span>
            </div>

            <div className="flex items-center gap-1">
              {steps.map((s, i) => (
                <div key={s.id} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      i <= currentStepIndex
                        ? 'bg-brand-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {i < currentStepIndex ? <Check className="w-4 h-4" /> : i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-6 h-0.5 mx-1 ${i < currentStepIndex ? 'bg-brand-500' : 'bg-gray-200'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 py-10">
        {step === 'info' && renderInfoStep()}
        {step === 'industry' && renderIndustryStep()}
        {step === 'colors' && renderColorsStep()}
        {step === 'generate' && renderGenerateStep()}
        {step === 'edit' && renderEditStep()}
        {step === 'download' && renderDownloadStep()}
      </main>
    </div>
  );
};

// Logo Preview Component
const LogoPreview: React.FC<{ config: LogoConfig; size: 'small' | 'large' }> = ({ config, size }) => {
  const icon = getIconById(config.selectedIconId);
  const font = fontOptions.find(f => f.id === config.fontId);
  const scale = size === 'small' ? 0.6 : 1;

  const iconEl = icon && config.layoutId !== 'text-only' ? (
    <svg
      viewBox={icon.viewBox}
      style={{
        width: `${config.iconSize * scale}px`,
        height: `${config.iconSize * scale}px`,
        transform: `rotate(${config.iconRotation}deg)`,
      }}
      fill="none"
      stroke={config.primaryColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={icon.path} />
    </svg>
  ) : null;

  const textEl = config.layoutId !== 'icon-only' ? (
    <div style={{ fontFamily: font?.family, textAlign: 'center' as const }}>
      <div
        style={{
          fontSize: `${config.fontSize * scale}px`,
          fontWeight: config.fontWeight,
          color: config.textColor,
          letterSpacing: `${config.letterSpacing * scale}px`,
          lineHeight: 1.2,
        }}
      >
        {config.businessName || 'Your Brand'}
      </div>
      {config.showTagline && config.tagline && (
        <div
          style={{
            fontSize: `${config.taglineSize * scale}px`,
            color: config.secondaryColor,
            marginTop: `${4 * scale}px`,
            fontWeight: Math.max(300, config.fontWeight - 300),
          }}
        >
          {config.tagline}
        </div>
      )}
    </div>
  ) : null;

  const renderLayout = () => {
    switch (config.layoutId) {
      case 'icon-left':
        return (
          <div className="flex items-center gap-3">
            {iconEl}
            {textEl}
          </div>
        );
      case 'icon-right':
        return (
          <div className="flex items-center gap-3 flex-row-reverse">
            {iconEl}
            {textEl}
          </div>
        );
      case 'icon-top':
        return (
          <div className="flex flex-col items-center gap-2">
            {iconEl}
            {textEl}
          </div>
        );
      case 'icon-only':
        return iconEl;
      case 'text-only':
        return textEl;
      case 'icon-badge':
        return (
          <div className="flex flex-col items-center gap-2">
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: `${(config.iconSize + 20) * scale}px`,
                height: `${(config.iconSize + 20) * scale}px`,
                backgroundColor: config.primaryColor + '15',
                border: `2px solid ${config.primaryColor}30`,
              }}
            >
              {iconEl}
            </div>
            {textEl}
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center gap-2">
            {iconEl}
            {textEl}
          </div>
        );
    }
  };

  return <div className="logo-canvas">{renderLayout()}</div>;
};

// Mini layout preview for the layout selector
const LayoutMiniPreview: React.FC<{ layoutId: string; color: string }> = ({ layoutId, color }) => {
  const box = <div className="w-4 h-4 rounded" style={{ backgroundColor: color }} />;
  const lines = (
    <div className="flex flex-col gap-0.5">
      <div className="w-6 h-1 rounded bg-gray-400" />
      <div className="w-4 h-0.5 rounded bg-gray-300" />
    </div>
  );

  switch (layoutId) {
    case 'icon-left':
      return <div className="flex items-center gap-1">{box}{lines}</div>;
    case 'icon-right':
      return <div className="flex items-center gap-1 flex-row-reverse">{box}{lines}</div>;
    case 'icon-top':
      return <div className="flex flex-col items-center gap-1">{box}{lines}</div>;
    case 'icon-only':
      return box;
    case 'text-only':
      return lines;
    case 'icon-badge':
      return (
        <div className="flex flex-col items-center gap-1">
          <div className="w-6 h-6 rounded-full border flex items-center justify-center" style={{ borderColor: color }}>
            <div className="w-3 h-3 rounded" style={{ backgroundColor: color }} />
          </div>
          {lines}
        </div>
      );
    default:
      return <div className="flex flex-col items-center gap-1">{box}{lines}</div>;
  }
};

export default LogoWizard;
