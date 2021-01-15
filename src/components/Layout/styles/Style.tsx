import CSS from 'csstype';

export const sidebarStyle: CSS.Properties = {
    overflow: 'hidden',
    height: '100vh',
    position: 'fixed',
    left: 0,
    borderRight: '1px solid #2E6B65'
}

export const contentStyle: CSS.Properties = {
    padding: '24px',
    margin: '0',
    minHeight: '280px',
}

export const menuStyle: CSS.Properties = {
    minHeight: '100vh',
    height: '100%',
    backgroundColor: '#16a596',
    borderRight: 'none'
}

export const headerStyle: CSS.Properties = {
    backgroundColor: '#16a596',
}