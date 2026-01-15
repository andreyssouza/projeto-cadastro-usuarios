import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles/globalStyles';
import MyRoutes from './routes';


const root = createRoot(document.getElementById('root'));
root.render(
<>

<MyRoutes/>
<GlobalStyles/>
</>
)