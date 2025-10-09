import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { ChevronDown, ChevronRight, Check, Search, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface CareerExplorerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Domain {
  id: string;
  label: string;
}

interface SubjectCombination {
  id: string;
  label: string;
  percentages: string[];
}

interface Topic {
  id: string;
  title: string;
  subtopics: string;
}

interface DepthLevel {
  stars: number;
  label: string;
  topics: Topic[];
  pickCount: number;
}

const domains: Domain[] = [
  { id: 'btech', label: 'B.Tech – Degree' },
  { id: 'bsc', label: 'B.Sc – Degree' },
  { id: 'diploma', label: 'Diploma' },
  { id: 'integrated', label: 'Integrated Course' },
];

const subjectCombinations: Record<string, SubjectCombination[]> = {
  MPC: [
    { id: 'mpc-1', label: 'Math Focus', percentages: ['Math 45%', 'Physics 35%', 'Chemistry 20%'] },
    { id: 'mpc-2', label: 'Physics Focus', percentages: ['Physics 45%', 'Chemistry 35%', 'Math 20%'] },
    { id: 'mpc-3', label: 'Chemistry Focus', percentages: ['Chemistry 45%', 'Physics 35%', 'Math 20%'] },
    { id: 'mpc-4', label: 'Math Dominant', percentages: ['Math 80%', 'Physics 15%', 'Chemistry 5%'] },
    { id: 'mpc-5', label: 'Physics Dominant', percentages: ['Physics 80%', 'Math 15%', 'Chemistry 5%'] },
    { id: 'mpc-6', label: 'Chemistry Dominant', percentages: ['Chemistry 80%', 'Physics 15%', 'Math 5%'] },
  ],
  MBIPC: [
    { id: 'mbipc-1', label: 'Biology-Physics Focus', percentages: ['Biology 45%', 'Physics 35%', 'Chemistry 20%'] },
    { id: 'mbipc-2', label: 'Biology-Chemistry Focus', percentages: ['Biology 45%', 'Chemistry 35%', 'Physics 20%'] },
  ],
  BIPC: [
    { id: 'bipc-1', label: 'Biology-Physics Balance', percentages: ['Biology 45%', 'Physics 35%', 'Chemistry 20%'] },
    { id: 'bipc-2', label: 'Biology-Chemistry Balance', percentages: ['Biology 45%', 'Chemistry 35%', 'Physics 20%'] },
    { id: 'bipc-3', label: 'Biology Dominant', percentages: ['Biology 80%', 'Chemistry 15%', 'Physics 5%'] },
  ],
};

const biologyDepthLevels: DepthLevel[] = [
  {
    stars: 4,
    label: 'Very Deep',
    pickCount: 1,
    topics: [
      { id: 'bio-vd-1', title: 'Cell Structure & Functions', subtopics: 'Cell Organelles, Plasma Membrane, Nucleus, Mitochondria, Ribosomes' },
      { id: 'bio-vd-2', title: 'Human Anatomy & Physiology', subtopics: 'Circulatory System, Nervous System, Respiratory System, Excretory System' },
      { id: 'bio-vd-3', title: 'Genetics & Molecular Biology', subtopics: 'DNA, RNA, Replication, Transcription, Protein Synthesis' },
    ],
  },
  {
    stars: 4,
    label: 'Deep',
    pickCount: 1,
    topics: [
      { id: 'bio-d-1', title: 'Microbiology & Immunology', subtopics: 'Bacteria, Viruses, Fungi, Immunity' },
      { id: 'bio-d-2', title: 'Molecular Genetics', subtopics: 'DNA, RNA, Genes, Replication, Protein Synthesis' },
      { id: 'bio-d-3', title: 'Cell Biology', subtopics: 'Cell Organelles, Mitosis, Meiosis' },
    ],
  },
  {
    stars: 3,
    label: 'Moderate-Deep',
    pickCount: 1,
    topics: [
      { id: 'bio-md-1', title: 'Biotechnology', subtopics: 'Cloning, PCR, Recombinant DNA' },
      { id: 'bio-md-2', title: 'Biomolecules', subtopics: 'Carbohydrates, Proteins, Lipids, Enzymes' },
      { id: 'bio-md-3', title: 'Plant Physiology', subtopics: 'Photosynthesis, Respiration, Transpiration, Mineral Nutrition' },
    ],
  },
  {
    stars: 2,
    label: 'Moderate',
    pickCount: 0,
    topics: [
      { id: 'bio-m-1', title: 'Soil Biology', subtopics: 'Soil Microbes, Nitrogen Cycle, Mycorrhiza' },
      { id: 'bio-m-2', title: 'Crop Science', subtopics: 'Plant Growth, Plant Hormones, Plant Diseases' },
      { id: 'bio-m-3', title: 'Ecology', subtopics: 'Ecosystems, Food Chains, Biodiversity' },
    ],
  },
];

const chemistryDepthLevels: DepthLevel[] = [
  {
    stars: 4,
    label: 'Very Deep',
    pickCount: 1,
    topics: [
      { id: 'chem-vd-1', title: 'Environmental Chemistry', subtopics: 'Fertilizers, Pesticides, Green Chemistry' },
      { id: 'chem-vd-2', title: 'Organic Chemistry', subtopics: 'Carbohydrates, Plant Secondary Compounds' },
      { id: 'chem-vd-3', title: 'Soil Chemistry', subtopics: 'Acids, Bases, pH, Nutrient Cycles' },
    ],
  },
  {
    stars: 3,
    label: 'Moderate-Deep',
    pickCount: 0,
    topics: [
      { id: 'chem-md-1', title: 'Water Chemistry', subtopics: 'pH, Dissolved Oxygen, Salinity' },
      { id: 'chem-md-2', title: 'Biomolecules', subtopics: 'Proteins, Lipids, Carbohydrates' },
      { id: 'chem-md-3', title: 'Organic Chemistry - Advanced', subtopics: 'Hormones, Vitamins' },
    ],
  },
  {
    stars: 3,
    label: 'Moderate-Deep',
    pickCount: 0,
    topics: [
      { id: 'chem-md-4', title: 'Biomolecules - Dairy', subtopics: 'Proteins (Casein), Carbohydrates, Fats' },
      { id: 'chem-md-5', title: 'Enzymes', subtopics: 'Enzyme Action in Milk Processing' },
      { id: 'chem-md-6', title: 'Analytical Chemistry', subtopics: 'pH, Nutrient Testing' },
    ],
  },
];

const physicsDepthLevels: DepthLevel[] = [
  {
    stars: 4,
    label: 'Very Deep',
    pickCount: 1,
    topics: [
      { id: 'phys-vd-1', title: 'Heat', subtopics: 'Pasteurization, Cooling' },
      { id: 'phys-vd-2', title: 'Fluids', subtopics: 'Milk Flow, Mixing' },
      { id: 'phys-vd-3', title: 'Fluids - Advanced', subtopics: 'Archimedes\' Principle, Pressure, Flow of Liquids' },
      { id: 'phys-vd-4', title: 'Heat - Thermal Properties', subtopics: 'Heating, Cooling, Thermal Properties of Water' },
    ],
  },
  {
    stars: 2,
    label: 'Moderate',
    pickCount: 0,
    topics: [
      { id: 'phys-m-1', title: 'Fluid Mechanics', subtopics: 'Flow of Liquids, Bernoulli\'s Theorem' },
      { id: 'phys-m-2', title: 'Heat - Environmental', subtopics: 'Heat, Temperature, Greenhouse Effect' },
      { id: 'phys-m-3', title: 'Organic Chemistry', subtopics: 'Functional Groups, Biomolecules' },
      { id: 'phys-m-4', title: 'Biomolecules', subtopics: 'Proteins, Enzymes, Carbohydrates' },
    ],
  },
];

export const CareerExplorer: React.FC<CareerExplorerProps> = ({ open, onOpenChange }) => {
  const [step, setStep] = useState(1);
  const [selectedDomain, setSelectedDomain] = useState<string>('');
  const [selectedStream, setSelectedStream] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCombination, setSelectedCombination] = useState<string>('');
  const [selectedBiologyTopics, setSelectedBiologyTopics] = useState<Record<number, string>>({});
  const [selectedChemistryTopics, setSelectedChemistryTopics] = useState<Record<number, string>>({});
  const [selectedPhysicsTopics, setSelectedPhysicsTopics] = useState<Record<number, string>>({});
  const [expandedSections, setExpandedSections] = useState<string[]>(['biology', 'chemistry', 'physics']);

  const resetState = () => {
    setStep(1);
    setSelectedDomain('');
    setSelectedStream('');
    setSearchQuery('');
    setSelectedCombination('');
    setSelectedBiologyTopics({});
    setSelectedChemistryTopics({});
    setSelectedPhysicsTopics({});
    setExpandedSections([]);
  };

  const handleClose = () => {
    resetState();
    onOpenChange(false);
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleBiologySelection = (levelIndex: number, topicId: string) => {
    setSelectedBiologyTopics(prev => ({
      ...prev,
      [levelIndex]: topicId,
    }));
  };

  const handleChemistrySelection = (levelIndex: number, topicId: string) => {
    setSelectedChemistryTopics(prev => ({
      ...prev,
      [levelIndex]: topicId,
    }));
  };

  const handlePhysicsSelection = (levelIndex: number, topicId: string) => {
    setSelectedPhysicsTopics(prev => ({
      ...prev,
      [levelIndex]: topicId,
    }));
  };

  const handleStep1Next = () => {
    if (selectedDomain) {
      setStep(2);
    }
  };

  const handleStep2Next = () => {
    if (selectedStream) {
      setStep(3);
    }
  };

  const handleStep3Next = () => {
    if (searchQuery.trim()) {
      setStep(4);
    }
  };

  const handleStep4Next = () => {
    if (selectedStream && selectedCombination) {
      setStep(5);
    }
  };

  const handleStep5Submit = () => {
    const biologyLevelsRequired = selectedStream !== 'MPC' ? biologyDepthLevels.filter(l => l.pickCount > 0).length : 0;
    const chemistryLevelsRequired = chemistryDepthLevels.filter(l => l.pickCount > 0).length;
    const physicsLevelsRequired = physicsDepthLevels.filter(l => l.pickCount > 0).length;

    const biologyFilled = Object.keys(selectedBiologyTopics).length === biologyLevelsRequired;
    const chemistryFilled = Object.keys(selectedChemistryTopics).length === chemistryLevelsRequired;
    const physicsFilled = Object.keys(selectedPhysicsTopics).length === physicsLevelsRequired;

    if (biologyFilled && chemistryFilled && physicsFilled) {
      console.log('Submitted:', {
        domain: selectedDomain,
        stream: selectedStream,
        searchQuery,
        combination: selectedCombination,
        biology: selectedBiologyTopics,
        chemistry: selectedChemistryTopics,
        physics: selectedPhysicsTopics,
      });
      handleClose();
    }
  };

  const getStepTitle = () => {
    switch (step) {
      case 1:
        return 'Select Domain';
      case 2:
        return 'Choose Your Stream';
      case 3:
        return 'Search Your Degree';
      case 4:
        return 'Select Percentage Distribution';
      case 5:
        return 'Select Core Topics';
      default:
        return '';
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {getStepTitle()}
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4 sm:space-y-6 py-2 sm:py-4">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Select Domain</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {domains.map((domain) => (
                  <Card
                    key={domain.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedDomain === domain.id
                        ? 'border-2 border-blue-500 bg-blue-50'
                        : 'hover:border-blue-300'
                    }`}
                    onClick={() => setSelectedDomain(domain.id)}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg">{domain.label}</h4>
                        {selectedDomain === domain.id && (
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2 sm:pt-4">
              <Button
                onClick={handleStep1Next}
                disabled={!selectedDomain}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                Next Step
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 sm:space-y-6 py-2 sm:py-4">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Select Stream</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {['MPC', 'BIPC', 'MBIPC'].map((stream) => (
                  <Button
                    key={stream}
                    variant={selectedStream === stream ? 'default' : 'outline'}
                    className={`h-16 sm:h-20 text-base sm:text-lg font-semibold transition-all ${
                      selectedStream === stream
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'hover:border-blue-500 hover:bg-blue-50'
                    }`}
                    onClick={() => setSelectedStream(stream)}
                  >
                    {stream}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3 pt-2 sm:pt-4">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base"
              >
                Back
              </Button>
              <Button
                onClick={handleStep2Next}
                disabled={!selectedStream}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                Next Step
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 sm:space-y-6 py-2 sm:py-4">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Search Your Degree</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter degree name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 sm:pl-10 h-12 sm:h-14 text-sm sm:text-base lg:text-lg border-2 focus:border-blue-500 rounded-xl"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3 pt-2 sm:pt-4">
              <Button
                variant="outline"
                onClick={() => setStep(2)}
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base"
              >
                Back
              </Button>
              <Button
                onClick={handleStep3Next}
                disabled={!searchQuery.trim()}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                Next Step
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4 sm:space-y-6 py-2 sm:py-4">
            {/* Stream Selection */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Select Stream</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {['MPC', 'BIPC', 'MBIPC'].map((stream) => (
                  <Button
                    key={stream}
                    variant={selectedStream === stream ? 'default' : 'outline'}
                    className={`h-16 sm:h-20 text-base sm:text-lg font-semibold transition-all ${
                      selectedStream === stream
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'hover:border-blue-500 hover:bg-blue-50'
                    }`}
                    onClick={() => {
                      setSelectedStream(stream);
                      setSelectedCombination('');
                    }}
                  >
                    {stream}
                  </Button>
                ))}
              </div>
            </div>

            {/* Combination Selection */}
            {selectedStream && (
              <div className="space-y-3 sm:space-y-4 animate-fade-in">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Select Percentage Distribution</h3>
                <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
                  {subjectCombinations[selectedStream].map((combo) => (
                    <Card
                      key={combo.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedCombination === combo.id
                          ? 'border-2 border-blue-500 bg-blue-50'
                          : 'hover:border-blue-300'
                      }`}
                      onClick={() => setSelectedCombination(combo.id)}
                    >
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{combo.label}</h4>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {combo.percentages.map((pct, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white rounded-full text-xs sm:text-sm font-medium text-gray-700 border border-gray-200"
                                >
                                  {pct}
                                </span>
                              ))}
                            </div>
                          </div>
                          {selectedCombination === combo.id && (
                            <Check className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Next Button */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 pt-2 sm:pt-4">
              <Button
                variant="outline"
                onClick={() => setStep(3)}
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base"
              >
                Back
              </Button>
              <Button
                onClick={handleStep4Next}
                disabled={!selectedStream || !selectedCombination}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                Next Step
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4 sm:space-y-6 py-2 sm:py-4">
            {/* Biology Subject Depth */}
            {selectedStream !== 'MPC' && (
              <div className="space-y-3 sm:space-y-4">
                <button
                  onClick={() => toggleSection('biology')}
                  className="w-full flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl hover:border-green-400 transition-all"
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900">Biology Subject Depth</span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 transition-transform ${
                      expandedSections.includes('biology') ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedSections.includes('biology') && (
                  <div className="space-y-3 sm:space-y-4 pl-2 sm:pl-4 animate-fade-in">
                    {biologyDepthLevels.map((level, levelIndex) => (
                      <div key={levelIndex} className="space-y-2">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <div className="flex">
                            {[...Array(level.stars)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-gray-700">({level.label})</span>
                          {level.pickCount > 0 && (
                            <span className="text-xs text-gray-500">Dropdown pick {level.pickCount}</span>
                          )}
                        </div>
                        
                        {level.pickCount > 0 ? (
                          <Select
                            value={selectedBiologyTopics[levelIndex] || ''}
                            onValueChange={(value) => handleBiologySelection(levelIndex, value)}
                          >
                            <SelectTrigger className="w-full bg-white border-2 border-green-200 hover:border-green-400 transition-all h-auto min-h-[2.5rem] sm:min-h-[3rem]">
                              <SelectValue placeholder="Select a topic..." />
                            </SelectTrigger>
                            <SelectContent className="bg-white z-[100] max-w-[calc(100vw-2rem)] sm:max-w-lg">
                              {level.topics.map((topic) => (
                                <SelectItem key={topic.id} value={topic.id} className="cursor-pointer">
                                  <div className="py-1">
                                    <div className="font-semibold text-xs sm:text-sm">{topic.title}</div>
                                    <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 leading-relaxed">{topic.subtopics}</div>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : (
                          <div className="space-y-2">
                            {level.topics.map((topic) => (
                              <div key={topic.id} className="p-2.5 sm:p-3 bg-white border border-gray-200 rounded-lg">
                                <div className="font-medium text-xs sm:text-sm text-gray-900">{topic.title}</div>
                                <div className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-relaxed">{topic.subtopics}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Chemistry Subject Depth */}
            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={() => toggleSection('chemistry')}
                className="w-full flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl hover:border-orange-400 transition-all"
              >
                <span className="text-base sm:text-lg font-bold text-gray-900">Chemistry Subject Depth</span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 transition-transform ${
                    expandedSections.includes('chemistry') ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedSections.includes('chemistry') && (
                <div className="space-y-3 sm:space-y-4 pl-2 sm:pl-4 animate-fade-in">
                  {chemistryDepthLevels.map((level, levelIndex) => (
                    <div key={levelIndex} className="space-y-2">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <div className="flex">
                          {[...Array(level.stars)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">({level.label})</span>
                        {level.pickCount > 0 && (
                          <span className="text-xs text-gray-500">Dropdown pick {level.pickCount}</span>
                        )}
                      </div>
                      
                      {level.pickCount > 0 ? (
                        <Select
                          value={selectedChemistryTopics[levelIndex] || ''}
                          onValueChange={(value) => handleChemistrySelection(levelIndex, value)}
                        >
                          <SelectTrigger className="w-full bg-white border-2 border-orange-200 hover:border-orange-400 transition-all h-auto min-h-[2.5rem] sm:min-h-[3rem]">
                            <SelectValue placeholder="Select a topic..." />
                          </SelectTrigger>
                          <SelectContent className="bg-white z-[100] max-w-[calc(100vw-2rem)] sm:max-w-lg">
                            {level.topics.map((topic) => (
                              <SelectItem key={topic.id} value={topic.id} className="cursor-pointer">
                                <div className="py-1">
                                  <div className="font-semibold text-xs sm:text-sm">{topic.title}</div>
                                  <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 leading-relaxed">{topic.subtopics}</div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <div className="space-y-2">
                          {level.topics.map((topic) => (
                            <div key={topic.id} className="p-2.5 sm:p-3 bg-white border border-gray-200 rounded-lg">
                              <div className="font-medium text-xs sm:text-sm text-gray-900">{topic.title}</div>
                              <div className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-relaxed">{topic.subtopics}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Physics Subject Depth */}
            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={() => toggleSection('physics')}
                className="w-full flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl hover:border-blue-400 transition-all"
              >
                <span className="text-base sm:text-lg font-bold text-gray-900">Physics Subject Depth</span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 transition-transform ${
                    expandedSections.includes('physics') ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedSections.includes('physics') && (
                <div className="space-y-3 sm:space-y-4 pl-2 sm:pl-4 animate-fade-in">
                  {physicsDepthLevels.map((level, levelIndex) => (
                    <div key={levelIndex} className="space-y-2">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <div className="flex">
                          {[...Array(level.stars)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">({level.label})</span>
                        {level.pickCount > 0 && (
                          <span className="text-xs text-gray-500">Dropdown pick {level.pickCount}</span>
                        )}
                      </div>
                      
                      {level.pickCount > 0 ? (
                        <Select
                          value={selectedPhysicsTopics[levelIndex] || ''}
                          onValueChange={(value) => handlePhysicsSelection(levelIndex, value)}
                        >
                          <SelectTrigger className="w-full bg-white border-2 border-blue-200 hover:border-blue-400 transition-all h-auto min-h-[2.5rem] sm:min-h-[3rem]">
                            <SelectValue placeholder="Select a topic..." />
                          </SelectTrigger>
                          <SelectContent className="bg-white z-[100] max-w-[calc(100vw-2rem)] sm:max-w-lg">
                            {level.topics.map((topic) => (
                              <SelectItem key={topic.id} value={topic.id} className="cursor-pointer">
                                <div className="py-1">
                                  <div className="font-semibold text-xs sm:text-sm">{topic.title}</div>
                                  <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 leading-relaxed">{topic.subtopics}</div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <div className="space-y-2">
                          {level.topics.map((topic) => (
                            <div key={topic.id} className="p-2.5 sm:p-3 bg-white border border-gray-200 rounded-lg">
                              <div className="font-medium text-xs sm:text-sm text-gray-900">{topic.title}</div>
                              <div className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-relaxed">{topic.subtopics}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 pt-2 sm:pt-4">
              <Button
                variant="outline"
                onClick={() => setStep(4)}
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base"
              >
                Back
              </Button>
              <Button
                onClick={handleStep5Submit}
                disabled={
                  (selectedStream !== 'MPC' 
                    ? Object.keys(selectedBiologyTopics).length !== biologyDepthLevels.filter(l => l.pickCount > 0).length
                    : false) ||
                  Object.keys(selectedChemistryTopics).length !== chemistryDepthLevels.filter(l => l.pickCount > 0).length ||
                  Object.keys(selectedPhysicsTopics).length !== physicsDepthLevels.filter(l => l.pickCount > 0).length
                }
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                Submit
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
