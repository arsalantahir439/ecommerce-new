import home from '../assets/header-icons/home.png';
import team from '../assets/header-icons/team.png';
import time from '../assets/header-icons/time.png';
import growth from '../assets/header-icons/growth.png';
import files from '../assets/header-icons/files.png';
import tasks from '../assets/header-icons/tasks.png';
import benefits from '../assets/header-icons/benefits.png';
import analysis from '../assets/header-icons/analysis.png';
import payroll from '../assets/header-icons/payroll.png';
import settings from '../assets/header-icons/settings.png';

export const headerLinks = [
    { id: 1, name: 'home', icon: home,link:'/' },
    {
        id: 2, name: 'team', icon: team, subMenu: [{
            id: 1,
            heading: '',
            links: [
                { id: 1, name: 'employee directory', path: '/employee-directory' },
                { id: 2, name: 'company structure', path: '/company-structure' },
                { id: 3, name: 'employees club', path: '/employees-club' },
                { id: 4, name: 'import people', path: '/import-people' },
                { id: 5, name: 'recruitment', path: '/recruitment' },
            ]
        }]
    },
    {
        id: 3, name: 'time', icon: time, subMenu: [{
            id: 1,
            heading: 'time off',
            links: [
                { id: 1, name: 'my time off', path: '/my-time-off' },
                { id: 2, name: 'employee time off', path: '/employee-time-off' },
                { id: 3, name: 'time off calendar', path: '/time-off-calendar' },
                { id: 4, name: 'time off request', path: '/time-off-request' },
                { id: 5, name: 'policy balance', path: '/policy balance' },
                { id: 6, name: 'import time off', path: '/import-time-off' },
            ]
        },
        {
            id: 2,
            heading: 'attendence',
            links: [
                { id: 1, name: 'my attendance', path: '/my-attendance' },
                { id: 2, name: 'employee attendance', path: '/employee-attandance' }
            ]
        }
        ]
    },
    {
        id: 4, name: 'growth', icon: growth, subMenu: [
            { id: 1, singleName: 'survey', singlePath: '/survey' },
            {
                id: 2, heading: 'performance', links: [
                    { id: 1, name: 'my evaluation', path: '/my-evaluation' },
                    { id: 2, name: 'team evaluation', path: '/team-evaluation' },
                    { id: 3, name: 'employee evaluation', path: '/employee-evaluation' },
                ]
            },
            {
                id: 3, heading: 'goals', links: [
                    { id: 1, name: 'my goals', path: '/my-goals' },
                    { id: 2, name: 'team goals', path: '/team-goals' },
                    { id: 3, name: 'employee goals', path: '/employee-goals' },
                ]
            },
            { id: 4, singleName: '1-on-1s', singlePath: '/1-on-1s' }
        ]
    },
    {
        id: 5, name: 'files', icon: files, subMenu: [
            {
                id: 1, heading: '', links: [
                    { id: 1, name: 'my files', path: '/my-files' },
                    { id: 2, name: 'employee files', path: '/employee-files' },
                    { id: 3, name: 'company files', path: '/company-files' },
                    { id: 4, name: 'confidential files', path: '/confidential-files' },
                    { id: 5, name: 'E-Sign files', path: '/e-sign-files' },
                ]
            },
        ]
    },
    {
        id: 6, name: 'tasks', icon: tasks, subMenu: [
            {
                id: 1, heading: '', links: [
                    { id: 1, name: 'my tasks', path: '/my-tasks' },
                    { id: 2, name: 'employee tasks', path: '/employee-tasks' },
                    { id: 3, name: 'manage tasks', path: '/manage-tasks' },
                ]
            }
        ]
    },
    {
        id: 7, name: 'benefits', icon: benefits, subMenu: [
            {
                id: 1, heading: '', links: [
                    { id: 1, name: 'my benefits', path: '/my-benefits' },
                    { id: 2, name: 'benefit details', path: '/benefit-details' },
                    { id: 3, name: 'benefit requests', path: '/benefit requests' },
                ]
            }
        ]
    },
    {
        id: 8, name: 'analysis', icon: analysis, subMenu: [
            {
                id: 1, heading: '', links: [
                    { id: 1, name: 'analytics dashboard', path: '/analytics-dashboard' },
                    { id: 2, name: 'reports', path: '/reports' },
                ]
            }
        ]
    },
    {
        id: 9, name: 'payroll', icon: payroll, subMenu: [
            {
                id: 1, heading: '', links: [
                    { id: 1, name: 'payroll analytics', path: '/payroll-analytics' },
                    { id: 2, name: 'company payroll', path: '/comnpany-payroll' },
                    { id: 3, name: 'employee payroll', path: '/employee-payroll' },
                ]
            }
        ]
    },
    {
        id: 10, name: 'settings', icon: settings, subMenu: [
            {
                id: 1, heading: '', links: [
                    { id: 1, name: 'my company', path: '/my-company' },
                    { id: 2, name: 'locations', path: '/locations' },
                    { id: 3, name: 'departments', path: '/departments' },
                    { id: 4, name: 'calendars', path: '/calendars' },
                    { id: 5, name: 'flows', path: '/flows' },
                    { id: 6, name: 'time off', path: '/time-off' },
                    { id: 7, name: 'attendance', path: '/attendance' },
                    { id: 8, name: 'surveys', path: '/surveys' },
                    { id: 9, name: 'performance', path: '/performance' },
                    { id: 10, name: '1-on-1s', path: '/1-on-1s' },
                    { id: 11, name: 'files', path: '/files' },
                    { id: 12, name: 'tasks', path: '/tasks' },
                    { id: 13, name: 'benefits', path: '/benefits' },
                    { id: 14, name: 'payroll', path: '/payroll' },
                    { id: 15, name: 'rola & permissions', path: '/roles-permissions' },
                    { id: 16, name: 'integrations', path: '/integrations' },
                    { id: 17, name: 'personalisation', path: '/personalisation' },
                ]
            }
        ]
    },
];