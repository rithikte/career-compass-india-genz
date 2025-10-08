import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { ChevronDown, ChevronRight, Check } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface CareerExplorerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface SubjectCombination {
  id: string;
  label: string;
  percentages: string[];
}

interface Topic {
  id: number;
  title: string;
  subtopics: string;
}

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

const biologyTopics: Topic[] = [
  { id: 1, title: 'Cell Structure & Functions', subtopics: 'Cell Organelles, Plasma Membrane, Nucleus, Mitochondria, Ribosomes' },
  { id: 2, title: 'Human Anatomy & Physiology', subtopics: 'Circulatory System, Nervous System, Respiratory System, Excretory System' },
  { id: 3, title: 'Genetics & Molecular Biology', subtopics: 'DNA, RNA, Replication, Transcription, Protein Synthesis' },
  { id: 4, title: 'Microbiology & Immunology', subtopics: 'Bacteria, Viruses, Fungi, Immunity' },
  { id: 5, title: 'Molecular Genetics', subtopics: 'DNA, RNA, Genes, Replication, Protein Synthesis' },
  { id: 6, title: 'Cell Biology', subtopics: 'Cell Organelles, Mitosis, Meiosis' },
  { id: 7, title: 'Biotechnology', subtopics: 'Cloning, PCR, Recombinant DNA' },
  { id: 8, title: 'Biomolecules', subtopics: 'Carbohydrates, Proteins, Lipids, Enzymes' },
  { id: 9, title: 'Plant Physiology', subtopics: 'Photosynthesis, Respiration, Transpiration, Mineral Nutrition' },
  { id: 10, title: 'Soil Biology', subtopics: 'Soil Microbes, Nitrogen Cycle, Mycorrhiza' },
  { id: 11, title: 'Crop Science', subtopics: 'Plant Growth, Plant Hormones, Plant Diseases' },
  { id: 12, title: 'Ecology', subtopics: 'Ecosystems, Food Chains, Biodiversity' },
];

const chemistryTopics: Topic[] = [
  { id: 1, title: 'Environmental Chemistry', subtopics: 'Fertilizers, Pesticides, Green Chemistry' },
  { id: 2, title: 'Organic Chemistry', subtopics: 'Carbohydrates, Plant Secondary Compounds' },
  { id: 3, title: 'Soil Chemistry', subtopics: 'Acids, Bases, pH, Nutrient Cycles' },
  { id: 4, title: 'Water Chemistry', subtopics: 'pH, Dissolved Oxygen, Salinity' },
  { id: 5, title: 'Biomolecules', subtopics: 'Proteins, Lipids, Carbohydrates' },
  { id: 6, title: 'Organic Chemistry - Advanced', subtopics: 'Hormones, Vitamins' },
  { id: 7, title: 'Biomolecules - Dairy', subtopics: 'Proteins (Casein), Carbohydrates, Fats' },
  { id: 8, title: 'Enzymes', subtopics: 'Enzyme Action in Milk Processing' },
  { id: 9, title: 'Analytical Chemistry', subtopics: 'pH, Nutrient Testing' },
];

const physicsTopics: Topic[] = [
  { id: 1, title: 'Heat', subtopics: 'Pasteurization, Cooling' },
  { id: 2, title: 'Fluids', subtopics: 'Milk Flow, Mixing' },
  { id: 3, title: 'Fluids - Advanced', subtopics: 'Archimedes\' Principle, Pressure, Flow of Liquids' },
  { id: 4, title: 'Heat - Thermal Properties', subtopics: 'Heating, Cooling, Thermal Properties of Water' },
  { id: 5, title: 'Fluid Mechanics', subtopics: 'Flow of Liquids, Bernoulli\'s Theorem' },
  { id: 6, title: 'Heat - Environmental', subtopics: 'Heat, Temperature, Greenhouse Effect' },
  { id: 7, title: 'Organic Chemistry', subtopics: 'Functional Groups, Biomolecules' },
  { id: 8, title: 'Biomolecules', subtopics: 'Proteins, Enzymes, Carbohydrates' },
];

export const CareerExplorer: React.FC<CareerExplorerProps> = ({ open, onOpenChange }) => {
  const [step, setStep] = useState(1);
  const [selectedStream, setSelectedStream] = useState<string>('');
  const [selectedCombination, setSelectedCombination] = useState<string>('');
  const [selectedBiologyTopics, setSelectedBiologyTopics] = useState<number[]>([]);
  const [selectedChemistryTopics, setSelectedChemistryTopics] = useState<number[]>([]);
  const [selectedPhysicsTopics, setSelectedPhysicsTopics] = useState<number[]>([]);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const resetState = () => {
    setStep(1);
    setSelectedStream('');
    setSelectedCombination('');
    setSelectedBiologyTopics([]);
    setSelectedChemistryTopics([]);
    setSelectedPhysicsTopics([]);
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

  const toggleBiologyTopic = (id: number) => {
    setSelectedBiologyTopics(prev =>
      prev.includes(id)
        ? prev.filter(t => t !== id)
        : prev.length < 4
        ? [...prev, id]
        : prev
    );
  };

  const toggleChemistryTopic = (id: number) => {
    setSelectedChemistryTopics(prev =>
      prev.includes(id)
        ? prev.filter(t => t !== id)
        : prev.length < 3
        ? [...prev, id]
        : prev
    );
  };

  const togglePhysicsTopic = (id: number) => {
    setSelectedPhysicsTopics(prev =>
      prev.includes(id)
        ? prev.filter(t => t !== id)
        : prev.length < 2
        ? [...prev, id]
        : prev
    );
  };

  const handleStep1Next = () => {
    if (selectedStream && selectedCombination) {
      setStep(2);
    }
  };

  const handleStep2Submit = () => {
    // Check if required topics are selected based on the stream
    const biologyRequired = selectedStream !== 'MPC' ? 4 : 0;
    const chemistryRequired = 3;
    const physicsRequired = 2;

    if (
      selectedBiologyTopics.length === biologyRequired &&
      selectedChemistryTopics.length === chemistryRequired &&
      selectedPhysicsTopics.length === physicsRequired
    ) {
      // Submit logic here
      console.log('Submitted:', {
        stream: selectedStream,
        combination: selectedCombination,
        biology: selectedBiologyTopics,
        chemistry: selectedChemistryTopics,
        physics: selectedPhysicsTopics,
      });
      handleClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {step === 1 ? 'Choose Your Stream' : 'Select Core Topics'}
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-6 py-4">
            {/* Stream Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Select Stream</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['MPC', 'BIPC', 'MBIPC'].map((stream) => (
                  <Button
                    key={stream}
                    variant={selectedStream === stream ? 'default' : 'outline'}
                    className={`h-20 text-lg font-semibold transition-all ${
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
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-lg font-semibold text-gray-900">Select Percentage Distribution</h3>
                <div className="grid grid-cols-1 gap-3">
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
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2">{combo.label}</h4>
                            <div className="flex flex-wrap gap-2">
                              {combo.percentages.map((pct, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                                >
                                  {pct}
                                </span>
                              ))}
                            </div>
                          </div>
                          {selectedCombination === combo.id && (
                            <Check className="w-6 h-6 text-blue-600 ml-4 flex-shrink-0" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Next Button */}
            <div className="flex justify-end pt-4">
              <Button
                onClick={handleStep1Next}
                disabled={!selectedStream || !selectedCombination}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Step
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 py-4">
            {/* Biology Topics (if not MPC) */}
            {selectedStream !== 'MPC' && (
              <div className="space-y-3">
                <button
                  onClick={() => toggleSection('biology')}
                  className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl hover:border-green-400 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-gray-900">Biology (55–60%)</span>
                    <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700">
                      Pick 4 topics ({selectedBiologyTopics.length}/4)
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      expandedSections.includes('biology') ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedSections.includes('biology') && (
                  <div className="grid grid-cols-1 gap-2 pl-4 animate-fade-in">
                    {biologyTopics.map((topic) => (
                      <Card
                        key={topic.id}
                        className={`cursor-pointer transition-all ${
                          selectedBiologyTopics.includes(topic.id)
                            ? 'border-2 border-green-500 bg-green-50'
                            : 'hover:border-green-300'
                        } ${
                          !selectedBiologyTopics.includes(topic.id) && selectedBiologyTopics.length >= 4
                            ? 'opacity-50 cursor-not-allowed'
                            : ''
                        }`}
                        onClick={() => toggleBiologyTopic(topic.id)}
                      >
                        <CardContent className="p-3">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 mb-1 text-sm">{topic.title}</h4>
                              <p className="text-xs text-gray-600 line-clamp-2">{topic.subtopics}</p>
                            </div>
                            {selectedBiologyTopics.includes(topic.id) && (
                              <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Chemistry Topics */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('chemistry')}
                className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl hover:border-orange-400 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-gray-900">Chemistry (25–30%)</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700">
                    Pick 3 topics ({selectedChemistryTopics.length}/3)
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    expandedSections.includes('chemistry') ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedSections.includes('chemistry') && (
                <div className="grid grid-cols-1 gap-2 pl-4 animate-fade-in">
                  {chemistryTopics.map((topic) => (
                    <Card
                      key={topic.id}
                      className={`cursor-pointer transition-all ${
                        selectedChemistryTopics.includes(topic.id)
                          ? 'border-2 border-orange-500 bg-orange-50'
                          : 'hover:border-orange-300'
                      } ${
                        !selectedChemistryTopics.includes(topic.id) && selectedChemistryTopics.length >= 3
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                      }`}
                      onClick={() => toggleChemistryTopic(topic.id)}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 mb-1 text-sm">{topic.title}</h4>
                            <p className="text-xs text-gray-600 line-clamp-2">{topic.subtopics}</p>
                          </div>
                          {selectedChemistryTopics.includes(topic.id) && (
                            <Check className="w-5 h-5 text-orange-600 flex-shrink-0" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Physics Topics */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('physics')}
                className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl hover:border-blue-400 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-gray-900">Physics (15%)</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700">
                    Pick 2 topics ({selectedPhysicsTopics.length}/2)
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    expandedSections.includes('physics') ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedSections.includes('physics') && (
                <div className="grid grid-cols-1 gap-2 pl-4 animate-fade-in">
                  {physicsTopics.map((topic) => (
                    <Card
                      key={topic.id}
                      className={`cursor-pointer transition-all ${
                        selectedPhysicsTopics.includes(topic.id)
                          ? 'border-2 border-blue-500 bg-blue-50'
                          : 'hover:border-blue-300'
                      } ${
                        !selectedPhysicsTopics.includes(topic.id) && selectedPhysicsTopics.length >= 2
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                      }`}
                      onClick={() => togglePhysicsTopic(topic.id)}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 mb-1 text-sm">{topic.title}</h4>
                            <p className="text-xs text-gray-600 line-clamp-2">{topic.subtopics}</p>
                          </div>
                          {selectedPhysicsTopics.includes(topic.id) && (
                            <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="px-6 py-3 rounded-xl font-semibold"
              >
                Back
              </Button>
              <Button
                onClick={handleStep2Submit}
                disabled={
                  (selectedStream !== 'MPC' ? selectedBiologyTopics.length !== 4 : false) ||
                  selectedChemistryTopics.length !== 3 ||
                  selectedPhysicsTopics.length !== 2
                }
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
