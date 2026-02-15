import { createFileRoute } from '@tanstack/react-router';

import { MainPage } from '../modules/MainPage/MainPage';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return <MainPage />;
}
