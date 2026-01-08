/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Module 1: Foundations of Physical AI',
      items: [
        'module-1/overview',
        'module-1/lesson-1-physical-ai',
        'module-1/lesson-2-software-vs-physical-ai',
        'module-1/lesson-3-embodied-intelligence',
        'module-1/lesson-4-sensors-actuators',
      ],
    },

    {
      type: 'category',
      label: 'Module 2: Robot Bodies, Motion & Control',
      items: [
        'module-2/overview',
        'module-2/lesson-1-robot-bodies',
        'module-2/lesson-2-motion-and-balance',
      ],
    },
  ],
};

module.exports = sidebars;


