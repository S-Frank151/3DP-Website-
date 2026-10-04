import Section from './Section.jsx';
import { sectors } from '../data/content.js';

export default function Sectors() {
  return (
    <Section
      id="sectors"
      alt
      title="Sectors we work across"
      intro="Data-driven decision making isn't specific to one industry — we bring the same rigor wherever your business operates."
    >
      <div className="flex flex-wrap gap-3">
        {sectors.map((sector) => (
          <div
            key={sector}
            className="flex-[1_1_180px] rounded-lg border border-line bg-elevated px-5 py-4 text-[0.98rem] text-ink"
          >
            {sector}
          </div>
        ))}
      </div>
    </Section>
  );
}
