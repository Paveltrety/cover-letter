import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      <form method="post" action={'http://localhost:5002/api/head-hunter/form-data'}>
        <input name='test' />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
