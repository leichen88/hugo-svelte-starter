
import './global.css';
import { mount } from 'svelte';

// Create a mapping of component names to their import paths
const componentMap = {
    BarChart: () => import('./visualizations/BarChart.svelte'),
};

const loadComponent = async (componentName, targetId) => {
    try {
        const load = componentMap[componentName];
        if (!load) {
            console.error(`Component "${componentName}" not found.`);
            return;
        }

        const { default: Component } = await load();
        const target = document.getElementById(targetId);
        if (target) {
            mount(Component, { target });
        }
    } catch (error) {
        console.error(`Failed to load component "${componentName}":`, error);
    }
};

// Find all divs with data-component-name attributes
document.querySelectorAll('[data-component-name]').forEach((el) => {
    const componentName = el.dataset.componentName;
    const targetId = el.id;
    if (componentName && targetId) {
        loadComponent(componentName, targetId);
    }
});
