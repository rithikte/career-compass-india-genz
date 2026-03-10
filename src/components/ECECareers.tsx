import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Cpu, CircuitBoard, TestTube, Radio,
  BookOpen, Target, AlertTriangle, Clock,
  CheckCircle, XCircle, TrendingUp, Shield,
  ChevronDown, ChevronUp, Briefcase, GraduationCap,
  BarChart3, Layers
} from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

interface RoleData {
  id: string;
  icon: React.ElementType;
  color: string;
  roleName: string;
  ess: number;
  dds: number;
  cri: number;
  aiImpact: string;
  aiReason: string;
  startEnv: string;
  marketVariants: string[];
  dailyOutputs: string[];
  nonOutputs: string[];
  interviewElimination: string[];
  subjects: SubjectData[];
  subjectWeights: { name: string; weight: number }[];
  knowledgeStack: { subject: string; topics: string[] }[];
  weeklyPlan: { subject: string; hours: number }[];
  weeklySplit: string[];
  jobTasks: { task: string; frequency: string; risk: string }[];
  consequenceLine: string;
  marketDemand: string;
  marketDemandDetail: string;
  metroHiring: string[];
  tier2Hiring: string[];
  interviewTopics: string[];
  secondaryTopics: string[];
  topInterviewSubjects: string[];
  fresherRejections: string[];
  collegeGap: string;
  jobGap: string;
  gapLabel: string;
  gapRecovery: { days: string; focus: string }[];
  certPriority: string;
  portfolioOutput: string;
  survivalPriorities: string[];
  depthScale: { level: number; label: string; desc: string }[];
  expectedLevel: string;
  selfCheck: string[];
  kspScores: { subject: string; score: number }[];
  otherScores: { label: string; value: number }[];
}

interface SubjectData {
  id: string;
  name: string;
  equivalents: string[];
  identity: string;
  outputLink: string;
  scores: {
    workOutput: string;
    interviewGate: string;
    fresherFailure: string;
    degreeGap: string;
    crossCompany: string;
    definitionClarity: string;
    finalScore: number;
  };
}

const roles: RoleData[] = [
  {
    id: 'pr1',
    icon: Cpu,
    color: 'indigo',
    roleName: 'Embedded Systems / Firmware Engineer',
    ess: 82, dds: 86, cri: 29,
    aiImpact: 'MEDIUM',
    aiReason: 'AI can assist code drafting, but board bring-up, peripheral debugging, RTOS integration, and hardware-software fault isolation remain human-judgment-heavy engineering work.',
    startEnv: 'R&D Center',
    marketVariants: ['Embedded Engineer', 'Firmware Engineer', 'Embedded Software Engineer', 'Project Engineer — Embedded Systems'],
    dailyOutputs: [
      'Bring up microcontroller-based boards and make firmware run correctly on real hardware.',
      'Validate embedded device behavior, including timing, signal flow, and system response before release or lab acceptance.',
      'Write and debug low-level interface logic for GPIO, timers, interrupts, UART, SPI, and I2C behavior.'
    ],
    nonOutputs: [
      'Full custom ASIC physical design is not owned by this role.',
      'Telecom network rollout or RF field optimization is not owned by this role.',
      'Pure software development without embedded hardware context is not owned by this role.'
    ],
    interviewElimination: [
      'Rejected if unable to explain microcontroller architecture, interrupts, timers, and peripheral interfacing.',
      'Rejected if unable to reason through embedded system behavior and hardware-software interaction.',
      'Rejected if unable to connect digital logic to firmware-controlled hardware issues.'
    ],
    subjects: [
      { id: 'S1', name: 'RISC and Microcontroller Architectures', equivalents: ['Microcontrollers', 'Microprocessor and Microcontroller', 'Embedded Microcontrollers'], identity: 'Governs processor control, interrupts, peripherals, and firmware execution on embedded hardware.', outputLink: 'Bring up microcontroller-based boards and make firmware run correctly on real hardware.', scores: { workOutput: '28/30', interviewGate: '18/20', fresherFailure: '14/15', degreeGap: '8/10', crossCompany: '14/15', definitionClarity: '9/10', finalScore: 91 } },
      { id: 'S2', name: 'Embedded System Design', equivalents: ['Embedded Systems', 'Embedded Systems Design', 'Embedded System Architecture'], identity: 'Governs hardware-software co-design, real-time behavior, and embedded system integration.', outputLink: 'Validate embedded device behavior, including timing, signal flow, and system response before release.', scores: { workOutput: '26/30', interviewGate: '16/20', fresherFailure: '13/15', degreeGap: '8/10', crossCompany: '13/15', definitionClarity: '8/10', finalScore: 84 } },
      { id: 'S3', name: 'Digital Logic Design', equivalents: ['Switching Theory and Logic Design', 'Digital Systems', 'Logic Design and Switching Theory'], identity: 'Governs combinational and sequential logic behind embedded control and state behavior.', outputLink: 'Write and debug low-level interface logic for GPIO, timers, interrupts, UART, SPI, and I2C.', scores: { workOutput: '22/30', interviewGate: '15/20', fresherFailure: '11/15', degreeGap: '6/10', crossCompany: '12/15', definitionClarity: '10/10', finalScore: 76 } },
      { id: 'S4', name: 'Electronic Devices and Circuits', equivalents: ['Electronic Circuits', 'Electronic Devices and Circuit Theory', 'Analog Electronic Circuits'], identity: 'Governs device behavior, interfacing limits, and real circuit response in embedded boards.', outputLink: 'Bring up microcontroller-based boards and make firmware run correctly on real hardware.', scores: { workOutput: '20/30', interviewGate: '12/20', fresherFailure: '10/15', degreeGap: '5/10', crossCompany: '11/15', definitionClarity: '9/10', finalScore: 67 } },
      { id: 'S5', name: 'Signals and Systems', equivalents: ['Signals, Systems and Transforms', 'Linear Signals and Systems', 'Signals and Systems Analysis'], identity: 'Governs sampling, transforms, and signal-flow reasoning inside embedded systems.', outputLink: 'Validate embedded device behavior, including timing, signal flow, and system response.', scores: { workOutput: '19/30', interviewGate: '11/20', fresherFailure: '9/15', degreeGap: '5/10', crossCompany: '10/15', definitionClarity: '9/10', finalScore: 63 } },
    ],
    subjectWeights: [
      { name: 'RISC and Microcontroller Architectures', weight: 24 },
      { name: 'Embedded System Design', weight: 22 },
      { name: 'Digital Logic Design', weight: 20 },
      { name: 'Electronic Devices and Circuits', weight: 18 },
      { name: 'Signals and Systems', weight: 16 },
    ],
    knowledgeStack: [
      { subject: 'RISC and Microcontroller Architectures', topics: ['Processor architecture basics', 'Registers, memory map, and instruction flow', 'GPIO, timers, interrupts', 'UART, SPI, I2C interfacing', 'ADC/DAC basics', 'Peripheral initialization and debugging logic'] },
      { subject: 'Embedded System Design', topics: ['Hardware-software partitioning', 'Real-time behavior', 'System timing and scheduling basics', 'Interface integration', 'Embedded debugging flow', 'Board bring-up sequence thinking'] },
      { subject: 'Digital Logic Design', topics: ['Boolean logic and logic minimization', 'Combinational circuits', 'Sequential circuits', 'Flip-flops, counters, registers', 'State-machine behavior', 'Timing/state transition reasoning'] },
      { subject: 'Electronic Devices and Circuits', topics: ['Diodes, BJTs, MOSFET basics', 'Biasing and switching behavior', 'Amplifier response basics', 'Interface voltage/current behavior', 'Practical circuit fault reasoning', 'Signal integrity at board level'] },
      { subject: 'Signals and Systems', topics: ['Continuous and discrete signals', 'Sampling basics', 'System response thinking', 'Convolution/LTI intuition', 'Frequency-domain interpretation', 'Signal-flow reasoning in embedded behavior'] },
    ],
    weeklyPlan: [
      { subject: 'RISC and Microcontroller Architectures', hours: 2.4 },
      { subject: 'Embedded System Design', hours: 2.2 },
      { subject: 'Digital Logic Design', hours: 2.0 },
      { subject: 'Electronic Devices and Circuits', hours: 1.8 },
      { subject: 'Signals and Systems', hours: 1.6 },
    ],
    weeklySplit: ['4.6 hr on firmware + microcontroller execution', '2.0 hr on digital behavior and debugging logic', '1.8 hr on board/circuit understanding', '1.6 hr on signal/timing interpretation'],
    jobTasks: [
      { task: 'Configure microcontroller peripherals', frequency: 'Very Often', risk: 'Firmware does not control hardware correctly' },
      { task: 'Debug board bring-up issues', frequency: 'Very Often', risk: 'Hardware appears dead or unstable' },
      { task: 'Write interface logic for UART/SPI/I2C/GPIO', frequency: 'Very Often', risk: 'Devices fail to communicate' },
      { task: 'Handle interrupt/timer-based behavior', frequency: 'Often', risk: 'Timing bugs and random failures appear' },
      { task: 'Validate system timing and response', frequency: 'Often', risk: 'Product behaves inconsistently in real use' },
      { task: 'Trace hardware-software interaction faults', frequency: 'Often', risk: 'Root cause is misdiagnosed, delaying release' },
      { task: 'Support prototype testing and correction', frequency: 'Regularly', risk: 'Faulty design passes forward or rework increases' },
    ],
    consequenceLine: 'If these tasks are done badly, the product may power on but still fail in communication, timing, stability, or reliable field behavior.',
    marketDemand: 'MODERATE',
    marketDemandDetail: 'Embedded firmware demand is real and stable in India, but it is not mass-hiring like generic software roles. Hiring is sharper, more technical, and usually concentrated in product, electronics, automotive, industrial, and system-focused companies.',
    metroHiring: ['Stricter technical screening', 'More specialized embedded teams', 'Cleaner role boundaries', 'Better tool/process exposure early'],
    tier2Hiring: ['Faster hands-on responsibility', 'Broader debugging exposure early', 'Smaller teams, less specialization', 'More learning through direct problem-solving'],
    interviewTopics: ['Microcontroller architecture, interrupts, timers, and peripheral interfacing', 'Embedded system behavior and hardware-software interaction', 'Digital logic, registers, counters, and state behavior'],
    secondaryTopics: ['Board-level circuit behavior', 'Signal timing, sampling, and response interpretation', 'Practical debugging sequence on real hardware'],
    topInterviewSubjects: ['RISC and Microcontroller Architectures', 'Embedded System Design'],
    fresherRejections: [
      'They know C programming but cannot explain how firmware controls actual hardware.',
      'They cannot explain interrupts, timers, memory map, or peripheral configuration clearly.',
      'They fail digital logic reasoning when interviewers test sequence/state behavior.',
      'They cannot debug board bring-up issues step by step.',
      'They confuse signal symptoms with root cause and give vague answers instead of engineering logic.',
      'They studied circuits and signals academically but cannot connect them to embedded product failures.',
    ],
    collegeGap: 'You mostly learn subjects separately: microcontrollers, logic, circuits, and signals as isolated academic blocks.',
    jobGap: 'You must combine them instantly: firmware + peripherals + logic + board behavior + timing response in one real system.',
    gapLabel: 'MODERATE GAP',
    gapRecovery: [
      { days: 'Days 1–30', focus: 'Microcontrollers, interrupts, timers, GPIO, UART/SPI/I2C' },
      { days: 'Days 31–60', focus: 'Embedded system flow, board bring-up, digital logic debugging' },
      { days: 'Days 61–90', focus: 'Integrate one real hardware project and document failures + fixes' },
    ],
    certPriority: 'Embedded Systems / Microcontroller programming certification with practical board-level work',
    portfolioOutput: 'Build and document one embedded project with sensor/input, interrupt handling, communication interface, and debugging notes',
    survivalPriorities: ['RISC and Microcontroller Architectures', 'Embedded System Design', 'Digital Logic Design', 'Electronic Devices and Circuits', 'Signals and Systems'],
    depthScale: [
      { level: 1, label: 'Definition', desc: 'What the block/peripheral/signal is' },
      { level: 2, label: 'Process', desc: 'How it works step by step' },
      { level: 3, label: 'Application', desc: 'How it is used in embedded hardware' },
      { level: 4, label: 'Failure reasoning', desc: 'What breaks when configuration or logic is wrong' },
      { level: 5, label: 'Risk-based decision', desc: 'What to change first under real debug pressure' },
    ],
    expectedLevel: 'For this role, level 3 is not enough. You must usually reach Level 4 in microcontrollers, embedded system flow, and digital logic to survive interviews and first-job execution.',
    selfCheck: [
      'Can you explain interrupts, timers, GPIO, UART, SPI, and I2C without memorized lines?',
      'Can you describe how you would debug a board that powers on but does not respond correctly?',
      'Can you connect digital logic/state behavior to firmware-controlled hardware issues?',
      'Can you explain how hardware-software interaction fails in a real embedded system?',
      'Can you show at least one working embedded project with clear debugging steps?',
    ],
    kspScores: [{ subject: 'S1', score: 91 }, { subject: 'S2', score: 84 }, { subject: 'S3', score: 76 }, { subject: 'S4', score: 67 }, { subject: 'S5', score: 63 }],
    otherScores: [{ label: 'ODS', value: 77 }, { label: 'FWS', value: 76 }, { label: 'OIS', value: 72 }, { label: 'IPI', value: 80 }, { label: 'GAP', value: 64 }, { label: 'CONF', value: 76 }],
  },
  {
    id: 'pr2',
    icon: CircuitBoard,
    color: 'emerald',
    roleName: 'Electronics Hardware Design Engineer',
    ess: 78, dds: 85, cri: 32,
    aiImpact: 'MEDIUM',
    aiReason: 'AI can suggest circuits or layouts, but component selection, signal integrity judgment, design trade-offs, and lab-debug closure still depend on human engineering decisions.',
    startEnv: 'R&D Center',
    marketVariants: ['Hardware Design Engineer', 'Embedded Hardware Design Engineer', 'Electronics Design Engineer', 'Project Engineer — Electronics Hardware'],
    dailyOutputs: [
      'Create and refine circuit-level hardware blocks for embedded or electronic products, including component selection and interface-level design decisions.',
      'Analyze and validate board-level behavior such as power, signal flow, timing, and interface compatibility before prototype freeze or lab handoff.',
      'Support schematic-to-prototype closure by identifying circuit faults, design weaknesses, and hardware integration issues during early build cycles.',
    ],
    nonOutputs: [
      'Full custom ASIC physical design or back-end chip implementation is not owned by this role.',
      'Telecom network rollout, RF field optimization, or operator-side deployment is not owned by this role.',
      'Pure firmware-only development without circuit ownership is not owned by this role.',
    ],
    interviewElimination: [
      'Rejected if unable to explain analog circuit behavior, biasing, stability, or real electronic device operation.',
      'Rejected if unable to reason through digital logic, interfaces, or hardware block behavior at circuit level.',
      'Rejected if unable to connect theory to practical board design issues such as signal integrity, component choice, or measurement-based debugging.',
    ],
    subjects: [
      { id: 'S1', name: 'Electronic Circuit Analysis', equivalents: ['Analog Circuits', 'Electronic Circuits', 'Analog Electronic Circuits'], identity: 'Governs analog circuit behavior, biasing, response, and design-level electrical decisions.', outputLink: 'Create and refine circuit-level hardware blocks for embedded or electronic products.', scores: { workOutput: '28/30', interviewGate: '17/20', fresherFailure: '14/15', degreeGap: '8/10', crossCompany: '14/15', definitionClarity: '9/10', finalScore: 90 } },
      { id: 'S2', name: 'Electronic Devices and Circuits', equivalents: ['Electronic Devices and Circuit Theory', 'Microelectronic Circuits'], identity: 'Governs semiconductor device behavior and real circuit operation in hardware blocks.', outputLink: 'Support schematic-to-prototype closure by identifying circuit faults and design weaknesses.', scores: { workOutput: '25/30', interviewGate: '15/20', fresherFailure: '13/15', degreeGap: '7/10', crossCompany: '12/15', definitionClarity: '9/10', finalScore: 81 } },
      { id: 'S3', name: 'Digital Logic Design', equivalents: ['Switching Theory and Logic Design', 'Digital Systems'], identity: 'Governs digital hardware behavior, logic transitions, and sequential control structures.', outputLink: 'Analyze and validate board-level behavior such as power, signal flow, timing, and interface compatibility.', scores: { workOutput: '21/30', interviewGate: '14/20', fresherFailure: '11/15', degreeGap: '6/10', crossCompany: '12/15', definitionClarity: '10/10', finalScore: 74 } },
      { id: 'S4', name: 'Network Analysis and Synthesis', equivalents: ['Network Analysis', 'Circuit Theory', 'Electrical Network Analysis'], identity: 'Governs circuit modeling, transfer behavior, and electrical response across hardware networks.', outputLink: 'Analyze and validate board-level behavior such as power, signal flow, timing, and interface compatibility.', scores: { workOutput: '20/30', interviewGate: '12/20', fresherFailure: '10/15', degreeGap: '5/10', crossCompany: '11/15', definitionClarity: '9/10', finalScore: 67 } },
      { id: 'S5', name: 'Electromagnetic Waves and Transmission Lines', equivalents: ['Transmission Lines and Waveguides', 'Electromagnetic Theory'], identity: 'Governs interconnect behavior, signal propagation, impedance effects, and high-speed hardware integrity.', outputLink: 'Analyze and validate board-level behavior such as power, signal flow, timing, and interface compatibility.', scores: { workOutput: '18/30', interviewGate: '10/20', fresherFailure: '8/15', degreeGap: '5/10', crossCompany: '9/15', definitionClarity: '9/10', finalScore: 59 } },
    ],
    subjectWeights: [
      { name: 'Electronic Circuit Analysis', weight: 24 },
      { name: 'Electronic Devices and Circuits', weight: 22 },
      { name: 'Digital Logic Design', weight: 20 },
      { name: 'Network Analysis and Synthesis', weight: 18 },
      { name: 'Electromagnetic Waves and Transmission Lines', weight: 16 },
    ],
    knowledgeStack: [
      { subject: 'Electronic Circuit Analysis', topics: ['Biasing and operating-point judgment', 'Small-signal behavior', 'Amplifier response', 'Frequency response basics', 'Feedback impact', 'Circuit-level trade-off thinking'] },
      { subject: 'Electronic Devices and Circuits', topics: ['Diode, BJT, MOSFET behavior', 'Device-region understanding', 'Practical switching behavior', 'Interface voltage/current limits', 'Component behavior under load', 'Real board-level fault reasoning'] },
      { subject: 'Digital Logic Design', topics: ['Combinational logic', 'Sequential logic', 'Flip-flops, counters, registers', 'State behavior', 'Logic-level interfacing', 'Timing and control-path reasoning'] },
      { subject: 'Network Analysis and Synthesis', topics: ['KCL/KVL-based reasoning', 'Network theorems', 'Transfer behavior', 'Poles, zeros, response intuition', 'Two-port and signal-path thinking', 'Fault tracing across connected blocks'] },
      { subject: 'Electromagnetic Waves and Transmission Lines', topics: ['Propagation basics', 'Impedance mismatch intuition', 'Reflection and transmission behavior', 'Signal integrity basics', 'Interconnect behavior', 'High-frequency board effects'] },
    ],
    weeklyPlan: [
      { subject: 'Electronic Circuit Analysis', hours: 2.4 },
      { subject: 'Electronic Devices and Circuits', hours: 2.2 },
      { subject: 'Digital Logic Design', hours: 2.0 },
      { subject: 'Network Analysis and Synthesis', hours: 1.8 },
      { subject: 'Electromagnetic Waves and Transmission Lines', hours: 1.6 },
    ],
    weeklySplit: ['4.6 hr on analog/device-level hardware decisions', '2.0 hr on digital/control-path understanding', '1.8 hr on response and fault-tracing logic', '1.6 hr on interconnect/high-frequency behavior'],
    jobTasks: [
      { task: 'Select and justify circuit blocks/components', frequency: 'Very Often', risk: 'Unstable or non-working hardware design' },
      { task: 'Review and refine analog signal paths', frequency: 'Very Often', risk: 'Wrong gain, noise, biasing, or response' },
      { task: 'Validate digital interface behavior on boards', frequency: 'Often', risk: 'Logic mismatch or interface failure' },
      { task: 'Check power and signal-path behavior before prototype freeze', frequency: 'Often', risk: 'Prototype rework and delayed iteration' },
      { task: 'Diagnose schematic-to-prototype issues', frequency: 'Often', risk: 'Wrong root cause and repeated lab failure' },
      { task: 'Review interconnect and compatibility behavior', frequency: 'Regularly', risk: 'Signal loss, mismatch, or unreliable hardware' },
      { task: 'Support prototype debug and design corrections', frequency: 'Very Often', risk: 'Design escapes into later stages' },
    ],
    consequenceLine: 'If these tasks are done badly, hardware may look correct on paper but fail during prototype, validation, or real operating conditions.',
    marketDemand: 'MODERATE',
    marketDemandDetail: 'This role exists in India, but hiring is narrower than generic software or testing roles. Demand is strongest in product companies, electronics OEMs, automotive electronics, industrial systems, and specialized hardware teams.',
    metroHiring: ['Stricter technical screening', 'More specialized analog/digital hardware teams', 'Cleaner separation between design, validation, and manufacturing'],
    tier2Hiring: ['Faster hands-on responsibility', 'Broader exposure across design plus debug', 'More practical ownership with smaller teams'],
    interviewTopics: ['Analog circuit behavior, biasing, amplifier response, and component-level reasoning', 'Electronic devices and practical circuit operation', 'Digital logic and interface behavior in real hardware systems'],
    secondaryTopics: ['Network response and signal-path analysis', 'Prototype fault tracing', 'Transmission-line or interconnect behavior in communication/high-speed contexts'],
    topInterviewSubjects: ['Electronic Circuit Analysis', 'Electronic Devices and Circuits'],
    fresherRejections: [
      'They memorize formulas but cannot explain why a circuit is unstable or why a stage is not biasing correctly.',
      'They know device theory loosely but cannot apply it to real component behavior in a board.',
      'They fail to connect digital logic with actual hardware interface problems.',
      'They cannot move from schematic theory to prototype fault isolation.',
      'They speak generally about electronics but cannot justify design trade-offs.',
      'They do not understand when interconnect behavior starts affecting hardware reliability.',
    ],
    collegeGap: 'You study analog circuits, devices, digital logic, and networks as separate academic subjects.',
    jobGap: 'You must combine them to make design decisions, interpret lab failures, and correct hardware before prototype freeze.',
    gapLabel: 'MODERATE GAP',
    gapRecovery: [
      { days: 'Days 1–30', focus: 'Analog circuits, biasing, amplifier behavior, device-region understanding' },
      { days: 'Days 31–60', focus: 'Digital interfaces, logic behavior, board-level fault tracing' },
      { days: 'Days 61–90', focus: 'One hardware design project with circuit justification, prototype issues, and correction notes' },
    ],
    certPriority: 'PCB / Electronics Hardware Design certification with practical circuit-design exposure',
    portfolioOutput: 'Build and document one working hardware project showing circuit choice, logic/interface behavior, test results, and debugging corrections',
    survivalPriorities: ['Electronic Circuit Analysis', 'Electronic Devices and Circuits', 'Digital Logic Design', 'Network Analysis and Synthesis', 'Electromagnetic Waves and Transmission Lines'],
    depthScale: [
      { level: 1, label: 'Definition', desc: 'What the circuit/device/block is' },
      { level: 2, label: 'Process', desc: 'How the block works' },
      { level: 3, label: 'Application', desc: 'How it is used in real hardware design' },
      { level: 4, label: 'Failure reasoning', desc: 'Why the design or prototype fails' },
      { level: 5, label: 'Risk-based decision', desc: 'Which design correction to choose first' },
    ],
    expectedLevel: 'For this role, level 3 is not enough in analog circuits and devices. You need Level 4 to survive interviews and early hardware-design work.',
    selfCheck: [
      'Can you explain biasing, gain, loading, and frequency response without memorized wording?',
      'Can you identify why a designed circuit may fail when moved to a real board?',
      'Can you connect device behavior to actual hardware faults or instability?',
      'Can you explain digital interface issues using logic and circuit reasoning together?',
      'Can you show one hardware project with design choices, testing, and debug corrections?',
    ],
    kspScores: [{ subject: 'S1', score: 90 }, { subject: 'S2', score: 81 }, { subject: 'S3', score: 74 }, { subject: 'S4', score: 67 }, { subject: 'S5', score: 59 }],
    otherScores: [{ label: 'ODS', value: 75 }, { label: 'FWS', value: 73 }, { label: 'OIS', value: 68 }, { label: 'IPI', value: 79 }, { label: 'GAP', value: 62 }, { label: 'CONF', value: 74 }],
  },
  {
    id: 'pr3',
    icon: TestTube,
    color: 'amber',
    roleName: 'Hardware Test / Validation Engineer',
    ess: 81, dds: 79, cri: 34,
    aiImpact: 'LOW',
    aiReason: 'Test scripting can be assisted, but instrument setup, failure isolation, waveform interpretation, board validation, and pass/fail judgment are still physical and lab-dependent.',
    startEnv: 'Semiconductor / Electronics Manufacturer',
    marketVariants: ['Hardware Validation Engineer', 'Electronics Test Engineer', 'Board Bring-up / Validation Engineer', 'Product Validation Engineer'],
    dailyOutputs: [
      'Execute board-, module-, or subsystem-level validation using instruments and defined test procedures to confirm whether hardware meets expected behavior.',
      'Capture, interpret, and isolate failures in signals, timing, interface behavior, power, and measurement readings during prototype or pre-release testing.',
      'Produce pass/fail evidence, defect observations, and validation findings that directly affect release, rework, or design correction decisions.',
    ],
    nonOutputs: [
      'Full schematic ownership or primary circuit design creation is not owned by this role.',
      'Telecom field rollout or network deployment is not owned by this role.',
      'Pure firmware feature development without test ownership is not owned by this role.',
    ],
    interviewElimination: [
      'Rejected if unable to use measurement logic correctly or explain errors, calibration, instrument behavior, and reading interpretation.',
      'Rejected if unable to reason through digital behavior, logic states, counters, timing, and sequential operation during hardware debug.',
      'Rejected if unable to connect signals, systems, circuits, and control response to real validation outcomes.',
    ],
    subjects: [
      { id: 'S1', name: 'Electronic Measurements and Instrumentation', equivalents: ['Electronic Instrumentation and Measurements', 'Measurements and Instrumentation'], identity: 'Governs instrument use, calibration, error analysis, and trustworthy electrical measurement.', outputLink: 'Execute board-, module-, or subsystem-level validation using instruments.', scores: { workOutput: '29/30', interviewGate: '18/20', fresherFailure: '14/15', degreeGap: '8/10', crossCompany: '14/15', definitionClarity: '9/10', finalScore: 92 } },
      { id: 'S2', name: 'Digital Logic Design', equivalents: ['Switching Theory and Logic Design', 'Digital Systems'], identity: 'Governs logic states, timing, sequencing, and digital hardware behavior under test.', outputLink: 'Capture, interpret, and isolate failures in signals, timing, and interface behavior.', scores: { workOutput: '24/30', interviewGate: '16/20', fresherFailure: '12/15', degreeGap: '7/10', crossCompany: '12/15', definitionClarity: '10/10', finalScore: 77 } },
      { id: 'S3', name: 'Signals and Systems', equivalents: ['Signals, Systems and Transforms', 'Linear Signals and Systems'], identity: 'Governs waveform behavior, sampling logic, transforms, and system response interpretation.', outputLink: 'Capture, interpret, and isolate failures in signals, timing, and measurement readings.', scores: { workOutput: '21/30', interviewGate: '13/20', fresherFailure: '11/15', degreeGap: '6/10', crossCompany: '11/15', definitionClarity: '9/10', finalScore: 71 } },
      { id: 'S4', name: 'Network Analysis and Synthesis', equivalents: ['Network Analysis', 'Circuit Theory', 'Networks and Circuits'], identity: 'Governs circuit response, transfer behavior, and electrical network behavior under test.', outputLink: 'Capture, interpret, and isolate failures in signals, timing, and interface behavior.', scores: { workOutput: '20/30', interviewGate: '12/20', fresherFailure: '10/15', degreeGap: '5/10', crossCompany: '10/15', definitionClarity: '9/10', finalScore: 66 } },
      { id: 'S5', name: 'Control Systems', equivalents: ['Automatic Control Systems', 'Feedback Control Systems', 'Linear Control Systems'], identity: 'Governs dynamic response, stability, and feedback behavior during hardware validation.', outputLink: 'Produce pass/fail evidence, defect observations, and validation findings.', scores: { workOutput: '18/30', interviewGate: '10/20', fresherFailure: '9/15', degreeGap: '5/10', crossCompany: '9/15', definitionClarity: '9/10', finalScore: 61 } },
    ],
    subjectWeights: [
      { name: 'Electronic Measurements and Instrumentation', weight: 25 },
      { name: 'Digital Logic Design', weight: 22 },
      { name: 'Signals and Systems', weight: 20 },
      { name: 'Network Analysis and Synthesis', weight: 18 },
      { name: 'Control Systems', weight: 15 },
    ],
    knowledgeStack: [
      { subject: 'Electronic Measurements and Instrumentation', topics: ['Instrument selection', 'Calibration basics', 'Error interpretation', 'Waveform reading', 'Measurement reliability', 'Pass/fail evidence capture'] },
      { subject: 'Digital Logic Design', topics: ['Logic states and transitions', 'Combinational and sequential behavior', 'Counters, registers, flip-flops', 'State-based fault reasoning', 'Timing-related logic issues', 'Digital debug flow'] },
      { subject: 'Signals and Systems', topics: ['Waveform behavior', 'Sampling basics', 'System response interpretation', 'Time-domain vs frequency-domain thinking', 'Signal distortion reasoning', 'Dynamic behavior under test'] },
      { subject: 'Network Analysis and Synthesis', topics: ['Circuit-path reasoning', 'Transfer behavior', 'Response prediction', 'Fault tracing through connected blocks', 'Resonance/transient intuition', 'Electrical network behavior under test'] },
      { subject: 'Control Systems', topics: ['Stability basics', 'Response and settling behavior', 'Feedback intuition', 'Overshoot/oscillation reasoning', 'Controlled-system failure patterns', 'Dynamic validation logic'] },
    ],
    weeklyPlan: [
      { subject: 'Electronic Measurements and Instrumentation', hours: 2.5 },
      { subject: 'Digital Logic Design', hours: 2.2 },
      { subject: 'Signals and Systems', hours: 2.0 },
      { subject: 'Network Analysis and Synthesis', hours: 1.8 },
      { subject: 'Control Systems', hours: 1.5 },
    ],
    weeklySplit: ['2.5 hr on instrumentation and reading confidence', '4.2 hr on digital + signal behavior under validation', '1.8 hr on circuit/network fault tracing', '1.5 hr on dynamic/stability interpretation'],
    jobTasks: [
      { task: 'Set up instruments and capture test readings', frequency: 'Very Often', risk: 'Wrong readings create false pass/fail decisions' },
      { task: 'Validate board or subsystem behavior against expected output', frequency: 'Very Often', risk: 'Faulty hardware may be accepted or good hardware rejected' },
      { task: 'Trace digital timing or logic-state failures', frequency: 'Often', risk: 'Root cause stays hidden and debug time increases' },
      { task: 'Interpret waveform mismatch and signal distortion', frequency: 'Often', risk: 'Test conclusions become technically wrong' },
      { task: 'Run electrical response checks across circuit paths', frequency: 'Often', risk: 'Failure source is misidentified' },
      { task: 'Record defect evidence for release or rework decision', frequency: 'Very Often', risk: 'Wrong evidence disrupts release and rework flow' },
      { task: 'Support re-test after issue correction', frequency: 'Regularly', risk: 'Fix validation remains incomplete or misleading' },
    ],
    consequenceLine: 'If these tasks are done badly, defective hardware may pass forward, good hardware may be blocked, and the team loses trust in test evidence.',
    marketDemand: 'MODERATE',
    marketDemandDetail: 'This role is real in India, especially in electronics manufacturing, product validation, semiconductor-adjacent testing, and hardware QA environments.',
    metroHiring: ['Stricter technical screening', 'More structured validation teams', 'Cleaner separation between design, validation, and quality'],
    tier2Hiring: ['Faster hands-on responsibility', 'Broader exposure across testing, debug, and rework', 'More practical ownership early'],
    interviewTopics: ['Measurement tools, reading interpretation, calibration logic', 'Digital logic behavior, sequencing, and failure analysis', 'Signal behavior, waveform interpretation, and system-response reasoning'],
    secondaryTopics: ['Circuit/network response and fault tracing', 'Stability or dynamic behavior in controlled systems', 'Practical test flow and validation logic'],
    topInterviewSubjects: ['Electronic Measurements and Instrumentation', 'Digital Logic Design'],
    fresherRejections: [
      'They cannot use instruments confidently or explain whether a reading is trustworthy.',
      'They misread waveforms and give wrong technical conclusions.',
      'They know digital logic theory but cannot apply it to actual hardware failures.',
      'They cannot isolate whether a failure is signal-related, logic-related, or measurement-related.',
      'They record observations without engineering interpretation.',
      'They fail to connect test output with release, rework, or validation consequences.',
    ],
    collegeGap: 'You learn measurements, logic, signals, networks, and control as separate academic subjects.',
    jobGap: 'You must use them together in one flow: test setup, observation, interpretation, fault isolation, and pass/fail decision.',
    gapLabel: 'MODERATE GAP',
    gapRecovery: [
      { days: 'Days 1–30', focus: 'Instruments, waveform reading, measurement error, validation basics' },
      { days: 'Days 31–60', focus: 'Digital logic failure cases, signal behavior, practical fault interpretation' },
      { days: 'Days 61–90', focus: 'Test one hardware board/system, record failures, retest after fixes, and document final conclusions' },
    ],
    certPriority: 'Electronics Testing / Embedded Hardware Validation certification with hands-on instrumentation work',
    portfolioOutput: 'Build a hardware validation report for one board or subsystem showing test setup, captured readings, failure cases, root cause, and retest results',
    survivalPriorities: ['Electronic Measurements and Instrumentation', 'Digital Logic Design', 'Signals and Systems', 'Network Analysis and Synthesis', 'Control Systems'],
    depthScale: [
      { level: 1, label: 'Definition', desc: 'What the signal, reading, or block is' },
      { level: 2, label: 'Process', desc: 'How the test or system behaves' },
      { level: 3, label: 'Application', desc: 'How it is checked during validation' },
      { level: 4, label: 'Failure reasoning', desc: 'Why the result is wrong and where the fault sits' },
      { level: 5, label: 'Risk-based decision', desc: 'Whether to pass, fail, rework, or escalate' },
    ],
    expectedLevel: 'For this role, level 3 is not enough in instrumentation, digital logic, and signal behavior. You need Level 4 to survive interviews and real validation work.',
    selfCheck: [
      'Can you explain how to verify whether a measurement is correct or misleading?',
      'Can you read a waveform and explain what failure it points to?',
      'Can you trace a digital failure using state, timing, or logic behavior?',
      'Can you separate signal-path problems from instrument/setup problems?',
      'Can you document one real validation case from observation to conclusion?',
    ],
    kspScores: [{ subject: 'S1', score: 92 }, { subject: 'S2', score: 77 }, { subject: 'S3', score: 71 }, { subject: 'S4', score: 66 }, { subject: 'S5', score: 61 }],
    otherScores: [{ label: 'ODS', value: 74 }, { label: 'FWS', value: 75 }, { label: 'OIS', value: 68 }, { label: 'IPI', value: 75 }, { label: 'GAP', value: 60 }, { label: 'CONF', value: 73 }],
  },
  {
    id: 'pr4',
    icon: Radio,
    color: 'rose',
    roleName: 'Telecom Network Integration Engineer',
    ess: 76, dds: 77, cri: 41,
    aiImpact: 'LOW',
    aiReason: 'AI may help documentation and configuration suggestions, but integration, commissioning, fault isolation, and live network acceptance remain field-and-system judgment work.',
    startEnv: 'Telecom Infra / Network Vendor',
    marketVariants: ['Integration Engineer', 'Network Integration Engineer', 'Telecom Integration Engineer', 'Network Deployment / Integration Engineer'],
    dailyOutputs: [
      'Integrate network elements and transmission links so configured telecom systems come up correctly in live or pre-live environments.',
      'Validate alarms, provisioning status, interface connectivity, and service-level acceptance during node or link commissioning.',
      'Diagnose integration faults across transmission, RF-support interfaces, IP/backhaul, and telecom equipment handoff stages.',
    ],
    nonOutputs: [
      'Long-term network planning or capacity strategy is not owned by this role.',
      'Pure RF design optimization or antenna design ownership is not owned by this role.',
      'Generic IT support, helpdesk, or non-telecom enterprise infrastructure administration is not owned by this role.',
    ],
    interviewElimination: [
      'Rejected if unable to explain communication links, modulation basics, signal flow, and telecom transmission behavior.',
      'Rejected if unable to reason through switching/routing/interface behavior and basic protocol-level integration logic.',
      'Rejected if unable to troubleshoot alarms, link failures, configuration mismatch, or service non-up scenarios.',
    ],
    subjects: [
      { id: 'S1', name: 'Digital Communications', equivalents: ['Digital Communication Systems', 'Digital Communication', 'Principles of Digital Communication'], identity: 'Governs encoded signal transfer, detection, and error-sensitive telecom link behavior.', outputLink: 'Integrate network elements and transmission links so configured telecom systems come up correctly.', scores: { workOutput: '26/30', interviewGate: '17/20', fresherFailure: '13/15', degreeGap: '8/10', crossCompany: '13/15', definitionClarity: '9/10', finalScore: 86 } },
      { id: 'S2', name: 'Analog and Digital Communications', equivalents: ['Communication Systems', 'Analog and Digital Communication', 'Principles of Communication Systems'], identity: 'Governs end-to-end signal transmission, modulation, reception, and communication chain behavior.', outputLink: 'Validate alarms, provisioning status, interface connectivity, and service-level acceptance.', scores: { workOutput: '24/30', interviewGate: '15/20', fresherFailure: '12/15', degreeGap: '7/10', crossCompany: '12/15', definitionClarity: '9/10', finalScore: 79 } },
      { id: 'S3', name: 'Computer Networks', equivalents: ['Data Communications and Computer Networks', 'Data Communication and Networking'], identity: 'Governs addressing, routing, protocol exchange, and network node connectivity behavior.', outputLink: 'Diagnose integration faults across transmission, IP/backhaul, and telecom equipment handoff.', scores: { workOutput: '25/30', interviewGate: '16/20', fresherFailure: '13/15', degreeGap: '8/10', crossCompany: '14/15', definitionClarity: '10/10', finalScore: 86 } },
      { id: 'S4', name: 'Switching Theory and Logic Design', equivalents: ['Digital Logic Design', 'Digital Systems', 'Logic Design and Switching Theory'], identity: 'Governs switching states, digital control paths, and interface logic behavior.', outputLink: 'Validate alarms, provisioning status, interface connectivity, and service-level acceptance.', scores: { workOutput: '18/30', interviewGate: '10/20', fresherFailure: '9/15', degreeGap: '5/10', crossCompany: '9/15', definitionClarity: '10/10', finalScore: 61 } },
      { id: 'S5', name: 'Microwave Engineering', equivalents: ['Microwave and Radar Engineering', 'RF and Microwave Engineering'], identity: 'Governs high-frequency link behavior, wave propagation, and microwave subsystem understanding.', outputLink: 'Diagnose integration faults across transmission, RF-support interfaces, and telecom equipment handoff.', scores: { workOutput: '19/30', interviewGate: '11/20', fresherFailure: '10/15', degreeGap: '6/10', crossCompany: '10/15', definitionClarity: '9/10', finalScore: 65 } },
    ],
    subjectWeights: [
      { name: 'Digital Communications', weight: 23 },
      { name: 'Computer Networks', weight: 23 },
      { name: 'Analog and Digital Communications', weight: 21 },
      { name: 'Microwave Engineering', weight: 17 },
      { name: 'Switching Theory and Logic Design', weight: 16 },
    ],
    knowledgeStack: [
      { subject: 'Digital Communications', topics: ['Modulation and demodulation basics', 'Signal detection logic', 'Error/noise impact', 'Link behavior interpretation', 'Digital transmission concepts', 'Communication failure reasoning'] },
      { subject: 'Computer Networks', topics: ['IP addressing and subnet basics', 'Routing and switching logic', 'Protocol-layer understanding', 'Interface connectivity checks', 'Network fault isolation', 'Backhaul/service-path reasoning'] },
      { subject: 'Analog and Digital Communications', topics: ['End-to-end communication chain', 'Analog modulation basics', 'Sampling and conversion logic', 'Receiver/transmitter flow', 'Noise and distortion impact', 'Mixed communication-path reasoning'] },
      { subject: 'Microwave Engineering', topics: ['RF link basics', 'Propagation behavior', 'Waveguide and microwave-path understanding', 'High-frequency link issues', 'Matching and loss intuition', 'Telecom equipment RF context'] },
      { subject: 'Switching Theory and Logic Design', topics: ['Switching states', 'Combinational and sequential behavior', 'Logic-controlled equipment states', 'Timing/state transition reasoning', 'Digital control-path understanding', 'Alarm/state behavior interpretation'] },
    ],
    weeklyPlan: [
      { subject: 'Digital Communications', hours: 2.3 },
      { subject: 'Computer Networks', hours: 2.3 },
      { subject: 'Analog and Digital Communications', hours: 2.1 },
      { subject: 'Microwave Engineering', hours: 1.7 },
      { subject: 'Switching Theory and Logic Design', hours: 1.6 },
    ],
    weeklySplit: ['4.4 hr on communication-system understanding', '2.3 hr on network-layer integration logic', '1.7 hr on RF/microwave context', '1.6 hr on equipment state and switching behavior'],
    jobTasks: [
      { task: 'Integrate telecom nodes and links into working service path', frequency: 'Very Often', risk: 'Site/service remains down or unstable' },
      { task: 'Validate interface connectivity and provisioning status', frequency: 'Very Often', risk: 'Equipment appears connected but service does not come up' },
      { task: 'Troubleshoot alarms and link failures', frequency: 'Very Often', risk: 'Wrong root cause leads to repeated escalation' },
      { task: 'Check IP/backhaul or routing-side readiness', frequency: 'Often', risk: 'Network handoff fails or traffic does not pass' },
      { task: 'Verify communication-path behavior during commissioning', frequency: 'Often', risk: 'Wrong signal assumptions delay acceptance' },
      { task: 'Support RF/microwave-linked integration checks', frequency: 'Regularly', risk: 'Link quality or compatibility problems stay unresolved' },
      { task: 'Close integration issues and support acceptance handoff', frequency: 'Often', risk: 'Service readiness is delayed or rejected' },
    ],
    consequenceLine: 'If these tasks are done badly, telecom equipment may be installed but still fail to pass traffic, stabilize links, or reach acceptance-ready status.',
    marketDemand: 'MODERATE',
    marketDemandDetail: 'This role exists steadily in India in telecom vendors, integration partners, and network deployment environments. It is real but narrower than generic IT roles.',
    metroHiring: ['Stricter technical screening', 'More structured integration teams', 'Cleaner separation between planning, integration, and operations'],
    tier2Hiring: ['Faster hands-on responsibility', 'Broader exposure across integration and support', 'Earlier real troubleshooting ownership'],
    interviewTopics: ['Digital communications and communication-link behavior', 'Computer networks, IP basics, routing/switching, and interface connectivity', 'Analog and digital communication-chain reasoning'],
    secondaryTopics: ['Alarm and service bring-up troubleshooting', 'Microwave/RF support understanding', 'Equipment state logic and switching behavior'],
    topInterviewSubjects: ['Digital Communications', 'Computer Networks'],
    fresherRejections: [
      'They cannot explain how a link comes up from communication side to network side.',
      'They know definitions but cannot troubleshoot non-up service or connectivity mismatch.',
      'They fail basic IP/routing/interface questions that are directly used in integration work.',
      'They confuse communication theory with actual telecom equipment behavior.',
      'They cannot interpret alarms, provisioning failure, or handoff breakdown logically.',
    ],
    collegeGap: 'You study communications, networks, logic, and microwave as separate academic subjects.',
    jobGap: 'You must use them together: communication link + network path + equipment state + RF behavior in one integration flow.',
    gapLabel: 'MODERATE GAP',
    gapRecovery: [
      { days: 'Days 1–30', focus: 'Digital communications, modulation, link behavior, and basic telecom flow' },
      { days: 'Days 31–60', focus: 'Computer networks, IP/routing, interface connectivity, and troubleshooting' },
      { days: 'Days 61–90', focus: 'One integration scenario: node bring-up, alarm resolution, service acceptance documentation' },
    ],
    certPriority: 'Telecom / Network Integration certification with practical commissioning and troubleshooting exposure',
    portfolioOutput: 'Document one integration scenario with equipment bring-up, fault isolation, alarm resolution, and acceptance handoff steps',
    survivalPriorities: ['Digital Communications', 'Computer Networks', 'Analog and Digital Communications', 'Microwave Engineering', 'Switching Theory and Logic Design'],
    depthScale: [
      { level: 1, label: 'Definition', desc: 'What the signal, node, or link is' },
      { level: 2, label: 'Process', desc: 'How integration or commissioning works' },
      { level: 3, label: 'Application', desc: 'How it is used in real telecom integration' },
      { level: 4, label: 'Failure reasoning', desc: 'Why the service is not coming up or link is unstable' },
      { level: 5, label: 'Risk-based decision', desc: 'Whether to escalate, reconfigure, or accept' },
    ],
    expectedLevel: 'For this role, level 3 is not enough in communications and networks. You need Level 4 to survive interviews and real integration work.',
    selfCheck: [
      'Can you explain how a telecom link comes up from modulation to network-side service?',
      'Can you troubleshoot a non-up service scenario using protocol and configuration reasoning?',
      'Can you trace an integration fault across communication, network, and equipment layers?',
      'Can you interpret alarms and provisioning status to identify real failure points?',
      'Can you document one integration case from site bring-up to acceptance closure?',
    ],
    kspScores: [{ subject: 'S1', score: 86 }, { subject: 'S2', score: 79 }, { subject: 'S3', score: 86 }, { subject: 'S4', score: 61 }, { subject: 'S5', score: 65 }],
    otherScores: [{ label: 'ODS', value: 75 }, { label: 'FWS', value: 76 }, { label: 'OIS', value: 69 }, { label: 'IPI', value: 77 }, { label: 'GAP', value: 68 }, { label: 'CONF', value: 75 }],
  },
];

// ─── HELPER FUNCTIONS ────────────────────────────────────────────────────────

const getColorClasses = (color: string) => {
  const map: Record<string, { bg: string; border: string; text: string; light: string; gradient: string }> = {
    indigo: { bg: 'bg-indigo-600', border: 'border-indigo-200', text: 'text-indigo-700', light: 'bg-indigo-50', gradient: 'from-indigo-500 to-indigo-700' },
    emerald: { bg: 'bg-emerald-600', border: 'border-emerald-200', text: 'text-emerald-700', light: 'bg-emerald-50', gradient: 'from-emerald-500 to-emerald-700' },
    amber: { bg: 'bg-amber-600', border: 'border-amber-200', text: 'text-amber-700', light: 'bg-amber-50', gradient: 'from-amber-500 to-amber-700' },
    rose: { bg: 'bg-rose-600', border: 'border-rose-200', text: 'text-rose-700', light: 'bg-rose-50', gradient: 'from-rose-500 to-rose-700' },
  };
  return map[color] || map.indigo;
};

const getScoreColor = (score: number) => {
  if (score >= 85) return 'text-emerald-600 bg-emerald-50';
  if (score >= 70) return 'text-blue-600 bg-blue-50';
  if (score >= 60) return 'text-amber-600 bg-amber-50';
  return 'text-red-600 bg-red-50';
};

const getFrequencyColor = (freq: string) => {
  if (freq === 'Very Often') return 'bg-red-100 text-red-700';
  if (freq === 'Often') return 'bg-amber-100 text-amber-700';
  return 'bg-blue-100 text-blue-700';
};

// ─── COLLAPSIBLE SECTION ─────────────────────────────────────────────────────

const CollapsibleSection = ({ title, icon: Icon, children, defaultOpen = false }: { title: string; icon: React.ElementType; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 hover:bg-slate-100 transition-colors">
        <div className="flex items-center gap-2 sm:gap-3">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
          <span className="text-sm sm:text-base font-semibold text-slate-800">{title}</span>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
      </button>
      {open && <div className="px-4 sm:px-6 py-4 sm:py-5">{children}</div>}
    </div>
  );
};

// ─── ROLE DETAIL COMPONENT ──────────────────────────────────────────────────

const RoleDetail = ({ role }: { role: RoleData }) => {
  const colors = getColorClasses(role.color);
  const Icon = role.icon;

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Hero Card */}
      <Card className={`${colors.border} border-2 overflow-hidden`}>
        <div className={`bg-gradient-to-r ${colors.gradient} p-4 sm:p-6 lg:p-8`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-white/20 rounded-xl">
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{role.roleName}</h2>
              <p className="text-white/80 text-xs sm:text-sm mt-1">Primary Start: {role.startEnv}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4 sm:mt-6">
            {[
              { label: 'ESS', value: role.ess },
              { label: 'DDS', value: role.dds },
              { label: 'CRI', value: role.cri },
              { label: 'AI Impact', value: role.aiImpact },
            ].map(s => (
              <div key={s.label} className="bg-white/15 rounded-lg p-2 sm:p-3 text-center">
                <div className="text-[10px] sm:text-xs text-white/70">{s.label}</div>
                <div className="text-sm sm:text-lg font-bold text-white">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
        <CardContent className="p-4 sm:p-6">
          <div className={`${colors.light} rounded-lg p-3 sm:p-4 mb-4`}>
            <p className={`text-xs sm:text-sm ${colors.text}`}><strong>AI Impact:</strong> {role.aiReason}</p>
          </div>
          <div>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-2">Market Title Variants:</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {role.marketVariants.map((v, i) => (
                <Badge key={i} variant="outline" className="text-[10px] sm:text-xs">{v}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Role Boundary */}
      <CollapsibleSection title="Role Boundary Lock" icon={Target} defaultOpen>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-semibold text-emerald-700 mb-2 flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> Daily Outputs</h4>
            <ul className="space-y-2">
              {role.dailyOutputs.map((o, i) => <li key={i} className="text-xs sm:text-sm text-slate-700 pl-3 border-l-2 border-emerald-300">{o}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-red-700 mb-2 flex items-center gap-1.5"><XCircle className="w-4 h-4" /> Non-Outputs</h4>
            <ul className="space-y-2">
              {role.nonOutputs.map((o, i) => <li key={i} className="text-xs sm:text-sm text-slate-600 pl-3 border-l-2 border-red-300">{o}</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-amber-700 mb-2 flex items-center gap-1.5"><AlertTriangle className="w-4 h-4" /> Interview Elimination Pattern</h4>
          <ul className="space-y-2">
            {role.interviewElimination.map((e, i) => <li key={i} className="text-xs sm:text-sm text-slate-700 pl-3 border-l-2 border-amber-300">{e}</li>)}
          </ul>
        </div>
      </CollapsibleSection>

      {/* 5 Locked Core Subjects */}
      <CollapsibleSection title="5 Locked Core Subjects (SLP)" icon={BookOpen}>
        <div className="space-y-3">
          {role.subjects.map((sub, i) => (
            <Card key={sub.id} className="border-slate-200">
              <CardHeader className="p-3 sm:p-4 pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <CardTitle className="text-sm sm:text-base">{sub.id}: {sub.name}</CardTitle>
                  <Badge className={`${getScoreColor(sub.scores.finalScore)} text-xs w-fit`}>{sub.scores.finalScore}/100</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 pt-0">
                <p className="text-xs sm:text-sm text-slate-600 mb-2">{sub.identity}</p>
                <p className="text-[10px] sm:text-xs text-slate-500 mb-3"><strong>Output Link:</strong> {sub.outputLink}</p>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {sub.equivalents.map((eq, j) => <Badge key={j} variant="outline" className="text-[9px] sm:text-[10px]">{eq}</Badge>)}
                </div>
                {/* Score grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 mt-3">
                  {[
                    { label: 'Work Output', val: sub.scores.workOutput },
                    { label: 'Interview Gate', val: sub.scores.interviewGate },
                    { label: 'Fresher Failure', val: sub.scores.fresherFailure },
                    { label: 'Degree Gap', val: sub.scores.degreeGap },
                    { label: 'Cross-Company', val: sub.scores.crossCompany },
                    { label: 'Clarity', val: sub.scores.definitionClarity },
                  ].map(s => (
                    <div key={s.label} className="bg-slate-50 rounded p-1.5 sm:p-2 text-center">
                      <div className="text-[8px] sm:text-[10px] text-slate-500">{s.label}</div>
                      <div className="text-[10px] sm:text-xs font-bold text-slate-800">{s.val}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CollapsibleSection>

      {/* Subject Survival Block */}
      <CollapsibleSection title="5 Subject Survival Block" icon={Shield}>
        <div className="space-y-2">
          {role.subjectWeights.map((sw, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm font-medium text-slate-700 flex-1 min-w-0 truncate">{i + 1}. {sw.name}</span>
              <div className="w-24 sm:w-40 bg-slate-100 rounded-full h-4 sm:h-5 overflow-hidden flex-shrink-0">
                <div className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-end pr-1.5`} style={{ width: `${sw.weight * 4}%` }}>
                  <span className="text-[9px] sm:text-[10px] font-bold text-white">{sw.weight}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Core Knowledge Stack */}
      <CollapsibleSection title="Core Knowledge Stack" icon={Layers}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {role.knowledgeStack.map((ks, i) => (
            <Card key={i} className="border-slate-200">
              <CardHeader className="p-3 pb-1">
                <CardTitle className="text-xs sm:text-sm">{ks.subject}</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-1">
                <ul className="space-y-1">
                  {ks.topics.map((t, j) => <li key={j} className="text-[10px] sm:text-xs text-slate-600 flex items-start gap-1"><span className="text-slate-400 mt-0.5">•</span>{t}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </CollapsibleSection>

      {/* 10 Hours Per Week Plan */}
      <CollapsibleSection title="10 Hours Per Week Plan" icon={Clock}>
        <div className="space-y-2 mb-4">
          {role.weeklyPlan.map((wp, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm text-slate-700 flex-1 min-w-0 truncate">{wp.subject}</span>
              <Badge variant="outline" className="text-[10px] sm:text-xs flex-shrink-0">{wp.hours} hr</Badge>
            </div>
          ))}
        </div>
        <div className={`${colors.light} rounded-lg p-3`}>
          <p className="text-xs font-semibold text-slate-700 mb-1.5">Practical Weekly Split:</p>
          <ul className="space-y-1">
            {role.weeklySplit.map((ws, i) => <li key={i} className="text-[10px] sm:text-xs text-slate-600">• {ws}</li>)}
          </ul>
        </div>
      </CollapsibleSection>

      {/* Job Task Table */}
      <CollapsibleSection title="Job Task Table" icon={Briefcase}>
        {/* Desktop table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left p-2 sm:p-3 font-semibold text-slate-700">Task</th>
                <th className="text-center p-2 sm:p-3 font-semibold text-slate-700">Frequency</th>
                <th className="text-left p-2 sm:p-3 font-semibold text-slate-700">Risk If Wrong</th>
              </tr>
            </thead>
            <tbody>
              {role.jobTasks.map((jt, i) => (
                <tr key={i} className="border-t border-slate-100">
                  <td className="p-2 sm:p-3 text-slate-700">{jt.task}</td>
                  <td className="p-2 sm:p-3 text-center"><Badge className={`${getFrequencyColor(jt.frequency)} text-[10px]`}>{jt.frequency}</Badge></td>
                  <td className="p-2 sm:p-3 text-slate-600">{jt.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Mobile cards */}
        <div className="sm:hidden space-y-2">
          {role.jobTasks.map((jt, i) => (
            <Card key={i} className="border-slate-200">
              <CardContent className="p-3">
                <p className="text-xs font-medium text-slate-800 mb-1.5">{jt.task}</p>
                <div className="flex items-center justify-between">
                  <Badge className={`${getFrequencyColor(jt.frequency)} text-[9px]`}>{jt.frequency}</Badge>
                  <p className="text-[10px] text-red-600 max-w-[60%] text-right">{jt.risk}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-3 bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-xs sm:text-sm text-red-700"><strong>⚠️ Consequence:</strong> {role.consequenceLine}</p>
        </div>
      </CollapsibleSection>

      {/* Market Demand */}
      <CollapsibleSection title="Market Demand & Hiring" icon={TrendingUp}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Badge className="bg-blue-100 text-blue-700 text-xs mb-2">{role.marketDemand}</Badge>
            <p className="text-xs sm:text-sm text-slate-600">{role.marketDemandDetail}</p>
          </div>
          <div className="space-y-3">
            <div>
              <h5 className="text-xs font-semibold text-slate-700 mb-1">🏙️ Metro Hiring</h5>
              <ul className="space-y-0.5">
                {role.metroHiring.map((m, i) => <li key={i} className="text-[10px] sm:text-xs text-slate-600">• {m}</li>)}
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-slate-700 mb-1">🏘️ Tier-2 Hiring</h5>
              <ul className="space-y-0.5">
                {role.tier2Hiring.map((t, i) => <li key={i} className="text-[10px] sm:text-xs text-slate-600">• {t}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Interview Reality */}
      <CollapsibleSection title="Interview Reality" icon={Target}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div>
            <h5 className="text-xs font-semibold text-red-700 mb-1.5">🔴 Most Common Elimination Topics</h5>
            <ul className="space-y-1">
              {role.interviewTopics.map((t, i) => <li key={i} className="text-xs sm:text-sm text-slate-700 pl-2 border-l-2 border-red-300">{t}</li>)}
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-semibold text-amber-700 mb-1.5">🟡 Secondary Topics</h5>
            <ul className="space-y-1">
              {role.secondaryTopics.map((t, i) => <li key={i} className="text-xs sm:text-sm text-slate-600 pl-2 border-l-2 border-amber-300">{t}</li>)}
            </ul>
          </div>
        </div>
        <div className={`${colors.light} rounded-lg p-3`}>
          <p className="text-xs font-semibold text-slate-700">Top Interview Pressure: {role.topInterviewSubjects.join(' → ')}</p>
        </div>
      </CollapsibleSection>

      {/* Why Freshers Get Rejected */}
      <CollapsibleSection title="Why Freshers Get Rejected" icon={XCircle}>
        <div className="space-y-2">
          {role.fresherRejections.map((r, i) => (
            <div key={i} className="flex items-start gap-2 bg-red-50 rounded-lg p-2 sm:p-3">
              <AlertTriangle className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-red-800">{r}</p>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Degree vs Job Gap */}
      <CollapsibleSection title="Degree vs Job Gap" icon={GraduationCap}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-3 sm:p-4">
              <h5 className="text-xs font-semibold text-blue-800 mb-1">🎓 In College</h5>
              <p className="text-xs sm:text-sm text-blue-700">{role.collegeGap}</p>
            </CardContent>
          </Card>
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-3 sm:p-4">
              <h5 className="text-xs font-semibold text-amber-800 mb-1">💼 On Job</h5>
              <p className="text-xs sm:text-sm text-amber-700">{role.jobGap}</p>
            </CardContent>
          </Card>
        </div>
        <Badge className="bg-amber-100 text-amber-800 text-xs mb-3">{role.gapLabel}</Badge>
        <div className="mt-3">
          <h5 className="text-xs font-semibold text-slate-700 mb-2">90-Day Recovery Roadmap</h5>
          <div className="space-y-2">
            {role.gapRecovery.map((gr, i) => (
              <div key={i} className="flex items-start gap-2 sm:gap-3">
                <Badge variant="outline" className="text-[9px] sm:text-[10px] flex-shrink-0 mt-0.5">{gr.days}</Badge>
                <p className="text-xs sm:text-sm text-slate-700">{gr.focus}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-2">
            <div className="bg-emerald-50 rounded-lg p-2 sm:p-3">
              <p className="text-[10px] sm:text-xs text-emerald-800"><strong>📜 Certification:</strong> {role.certPriority}</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-2 sm:p-3">
              <p className="text-[10px] sm:text-xs text-indigo-800"><strong>📁 Portfolio:</strong> {role.portfolioOutput}</p>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Explanation Depth & Self Check */}
      <CollapsibleSection title="Explanation Depth & Self Check" icon={BarChart3}>
        <div className="space-y-1.5 mb-3">
          {role.depthScale.map(d => (
            <div key={d.level} className="flex items-center gap-2">
              <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold ${d.level <= 3 ? 'bg-slate-200 text-slate-600' : 'bg-amber-200 text-amber-800'}`}>{d.level}</div>
              <span className="text-xs sm:text-sm"><strong>{d.label}:</strong> {d.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-amber-50 rounded-lg p-3 mb-4">
          <p className="text-xs sm:text-sm text-amber-800">{role.expectedLevel}</p>
        </div>
        <h5 className="text-xs font-semibold text-slate-700 mb-2">Quick Self Check</h5>
        <div className="space-y-2">
          {role.selfCheck.map((sc, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-700">{sc}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 bg-emerald-50 rounded-lg p-3">
          <p className="text-xs sm:text-sm text-emerald-700 font-medium">If your answer is yes to all 5, you are close to placement-ready.</p>
        </div>
      </CollapsibleSection>

      {/* KSP Scores Summary */}
      <CollapsibleSection title="KSP & Score Summary" icon={BarChart3}>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
          {role.kspScores.map(ks => (
            <div key={ks.subject} className={`rounded-lg p-2 sm:p-3 text-center ${getScoreColor(ks.score)}`}>
              <div className="text-[10px] sm:text-xs font-medium">{ks.subject}</div>
              <div className="text-sm sm:text-lg font-bold">{ks.score}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {role.otherScores.map(os => (
            <div key={os.label} className="bg-slate-50 rounded-lg p-2 text-center">
              <div className="text-[9px] sm:text-[10px] text-slate-500">{os.label}</div>
              <div className="text-xs sm:text-sm font-bold text-slate-700">{os.value}</div>
            </div>
          ))}
        </div>
      </CollapsibleSection>
    </div>
  );
};

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────

const ECECareers = () => {
  const [activeRole, setActiveRole] = useState('pr1');
  const activeRoleData = roles.find(r => r.id === activeRole)!;

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="text-center px-4">
        <Badge className="bg-indigo-100 text-indigo-700 text-xs sm:text-sm mb-3">ECE Career Intelligence</Badge>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
          Electronics & Communication Engineering
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          4 Primary Roles — Subject-Locked Career Maps with Hiring Reality, Survival Priorities, and Self-Assessment
        </p>
      </div>

      {/* Role Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        {roles.map(role => {
          const Icon = role.icon;
          const colors = getColorClasses(role.color);
          const isActive = activeRole === role.id;
          return (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={`rounded-xl p-3 sm:p-4 text-left transition-all border-2 ${
                isActive
                  ? `${colors.border} ${colors.light} shadow-md`
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? colors.text : 'text-slate-400'}`} />
                <Badge className={`text-[8px] sm:text-[10px] ${isActive ? `${colors.light} ${colors.text}` : 'bg-slate-100 text-slate-500'}`}>
                  {role.id.toUpperCase()}
                </Badge>
              </div>
              <p className={`text-[10px] sm:text-xs font-semibold ${isActive ? colors.text : 'text-slate-600'} leading-tight`}>
                {role.roleName}
              </p>
              <div className="flex gap-1.5 mt-1.5 sm:mt-2">
                <span className="text-[8px] sm:text-[9px] text-slate-500">ESS:{role.ess}</span>
                <span className="text-[8px] sm:text-[9px] text-slate-500">DDS:{role.dds}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Role Content */}
      <RoleDetail role={activeRoleData} />
    </div>
  );
};

export default ECECareers;
