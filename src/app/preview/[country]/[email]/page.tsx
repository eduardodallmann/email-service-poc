import { PreviewArea } from '~/components/layout/preview-area';
import type { Country } from '~/emails/types';

export default function Preview({
  params,
}: {
  params: { country: Country; email: string };
}) {
  return <PreviewArea country={params.country} email={params.email} />;
}
